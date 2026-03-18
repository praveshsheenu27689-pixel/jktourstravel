import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Package } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements AfterViewInit {
  activeTab = 'domestic';
  selectedPkg: Package | null = null;

  tabs = [
    { key: 'domestic',      label: 'Domestic',                icon: 'fas fa-flag' },
    { key: 'international', label: 'International',           icon: 'fas fa-globe' },
    { key: 'europe',        label: 'Europe Fixed Departures', icon: 'fas fa-plane' },
    { key: 'andaman',       label: 'Andaman Fixed Departures',icon: 'fas fa-water' }
  ];

  inclusions = [
    { icon: 'fas fa-plane',        label: 'Flights' },
    { icon: 'fas fa-hotel',        label: 'Hotels' },
    { icon: 'fas fa-utensils',     label: 'Meals' },
    { icon: 'fas fa-bus',          label: 'Transfers' },
    { icon: 'fas fa-camera',       label: 'Sightseeing' },
    { icon: 'fas fa-user-tie',     label: 'Tour Guide' },
    { icon: 'fas fa-shield-alt',   label: 'Travel Insurance' },
    { icon: 'fas fa-headset',      label: '24/7 Support' }
  ];

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  get currentPackages(): Package[] {
    switch (this.activeTab) {
      case 'europe':        return this.data.europePackages;
      case 'andaman':       return this.data.andamanPackages;
      case 'international': return this.data.internationalPackages;
      default:              return this.data.domesticPackages;
    }
  }

  ngAfterViewInit() {
    gsap.fromTo('.packages .section-header',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#packages', start: 'top 80%', once: true }
      }
    );
    gsap.fromTo('.pkg-card',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.07, duration: 0.55, ease: 'power3.out',
        scrollTrigger: { trigger: '#packages', start: 'top 75%', once: true }
      }
    );
  }

  setTab(key: string) {
    this.activeTab = key;
    this.selectedPkg = null;
    setTimeout(() => {
      gsap.fromTo('.pkg-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' }
      );
    }, 50);
  }

  openDetail(pkg: Package) {
    this.selectedPkg = pkg;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      gsap.from('.pkg-modal', { y: 60, opacity: 0, duration: 0.45, ease: 'power3.out' });
    }, 10);
  }

  closeDetail() {
    gsap.to('.pkg-modal', {
      y: 40, opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        this.selectedPkg = null;
        document.body.style.overflow = '';
      }
    });
  }

  bookNow() {
    this.closeDetail();
    setTimeout(() => this.scrollSvc.scrollTo('booking'), 350);
  }

  getHighlights(pkg: Package): string[] {
    const map: Record<string, string[]> = {
      'Domestic': [
        'Comfortable AC coach transfers throughout',
        'Handpicked 3★/4★ hotels with breakfast',
        'Expert local guide at every destination',
        'All entry tickets & sightseeing included',
        'Flexible itinerary — customizable on request'
      ],
      'International': [
        'Return international flights from Mumbai/Delhi',
        'Visa assistance & documentation support',
        'Premium hotel stays with daily breakfast',
        'Airport transfers & city tours included',
        'Dedicated tour manager throughout the trip'
      ],
      'Europe': [
        'Return flights from India included',
        'All meals as per itinerary (breakfast + dinner)',
        'Luxury coach travel across Europe',
        'Guided city tours with expert commentary',
        'All entry fees to monuments & attractions'
      ],
      'Andaman': [
        'Return flights from major Indian cities',
        'Ferry transfers between islands',
        'Scuba diving & water sports activities',
        'Beachside resort accommodation',
        'All meals included (breakfast + dinner)'
      ]
    };
    return map[pkg.category] || map['Domestic'];
  }

  getItinerary(pkg: Package): { title: string; desc: string }[] {
    const nights = this.getDurationNights(pkg);
    const days = [];
    const stops = pkg.itinerary.split(',').map(s => s.trim().replace(/\d+N$/, '').trim());
    for (let i = 0; i < Math.min(nights + 1, 6); i++) {
      const place = stops[i] || stops[stops.length - 1];
      if (i === 0) days.push({ title: `Arrival – ${place}`, desc: `Arrive at ${place}, check-in to hotel. Evening free for leisure. Welcome dinner.` });
      else if (i === nights) days.push({ title: `Departure – ${place}`, desc: `Breakfast at hotel. Check-out and transfer to airport. Tour ends with beautiful memories.` });
      else days.push({ title: `Explore ${place}`, desc: `Full day sightseeing in ${place}. Visit top attractions with expert guide. Meals included.` });
    }
    return days;
  }

  getDuration(pkg: Package): string {
    const n = this.getDurationNights(pkg);
    return `${n} Nights / ${n + 1} Days`;
  }

  private getDurationNights(pkg: Package): number {
    const stops = pkg.itinerary.split(',');
    let total = 0;
    stops.forEach(s => {
      const m = s.match(/(\d+)N/);
      if (m) total += parseInt(m[1]);
    });
    return total || 4;
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
