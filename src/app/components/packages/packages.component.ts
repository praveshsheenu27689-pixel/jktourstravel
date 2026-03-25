import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
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
  activeTab = 'bali';
  selectedPkg: Package | null = null;

  @Output() bookPackage = new EventEmitter<string>();

  tabs = [
    { key: 'bali',      label: 'Bali',      icon: 'fas fa-umbrella-beach' },
    { key: 'dubai',     label: 'Dubai',     icon: 'fas fa-city' },
    { key: 'thailand',  label: 'Thailand',  icon: 'fas fa-elephant' },
    { key: 'singapore', label: 'Singapore', icon: 'fas fa-building' }
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
      case 'dubai':     return this.data.dubaiPackages;
      case 'thailand':  return this.data.thailandPackages;
      case 'singapore': return this.data.singaporePackages;
      default:          return this.data.baliPackages;
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
    const name = this.selectedPkg?.title || '';
    this.closeDetail();
    setTimeout(() => {
      this.bookPackage.emit(name);
    }, 350);
  }

  getHighlights(pkg: Package): string[] {
    const map: Record<string, string[]> = {
      'Dubai': [
        'Return international flights from Mumbai/Delhi',
        'Visa on arrival / visa assistance included',
        'Premium hotel stays with daily breakfast',
        'All transfers, city tours & desert safari included',
        'Dhow cruise, Burj Khalifa & top attractions covered'
      ],
      'Bali': [
        'Return international flights from Mumbai/Delhi',
        'Visa on arrival assistance included',
        'Premium hotel stays with daily breakfast',
        'All transfers & guided sightseeing included',
        'Water sports, temple visits & cultural shows'
      ],
      'Thailand': [
        'Return international flights from Mumbai/Delhi',
        'Visa on arrival assistance included',
        'Premium hotel stays with daily breakfast',
        'All transfers & guided sightseeing included',
        'Temples, islands, elephant sanctuary & night markets'
      ],
      'Singapore': [
        'Return international flights from Mumbai/Delhi',
        'Visa assistance & documentation support',
        'Premium hotel stays with daily breakfast',
        'All transfers & guided city tours included',
        'Universal Studios, Gardens by the Bay & top attractions'
      ]
    };
    return map[pkg.category] || map['Bali'];
  }

  getItinerary(pkg: Package): { title: string; desc: string }[] {
    const nights = this.getDurationNights(pkg);
    const days = [];
    const stops = pkg.itinerary.split(',').map(s => s.trim().replace(/\d+N$/, '').trim());

    const attractionBased = ['Bali', 'Dubai', 'Thailand', 'Singapore'];
    if (attractionBased.includes(pkg.category)) {
      const airports: Record<string, string> = {
        'Dubai': 'Dubai International Airport',
        'Thailand': 'Suvarnabhumi Airport, Bangkok',
        'Singapore': 'Changi Airport, Singapore',
        'Bali': 'Ngurah Rai Airport'
      };
      const cityName = airports[pkg.category];
      const perDay = Math.ceil(stops.length / (nights + 1));
      for (let i = 0; i < nights + 1; i++) {
        const dayAttractions = stops.slice(i * perDay, (i + 1) * perDay).join(', ');
        if (i === 0) days.push({ title: `Arrival – ${pkg.category}`, desc: `Arrive at ${cityName}, check-in to hotel. Evening at leisure. Welcome dinner.` });
        else if (i === nights) days.push({ title: `Departure – ${pkg.category}`, desc: `Breakfast at hotel. Check-out and transfer to airport. Tour ends with beautiful memories.` });
        else days.push({ title: `Day ${i + 1} – ${dayAttractions || stops[0]}`, desc: `Visit ${dayAttractions}. Expert guide accompanies throughout. Meals included.` });
      }
      return days;
    }

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
    // Try to extract from itinerary (e.g. "Ubud 2N, Kuta 3N")
    const stops = pkg.itinerary.split(',');
    let total = 0;
    stops.forEach(s => {
      const m = s.match(/(\d+)N/);
      if (m) total += parseInt(m[1]);
    });
    if (total) return total;
    // For Bali packages, infer from title
    const titleMatch = pkg.title.match(/(\d+)N/);
    if (titleMatch) return parseInt(titleMatch[1]);
    if (pkg.category === 'Bali') return 5;
    if (pkg.category === 'Dubai') return 4;
    if (pkg.category === 'Thailand') return 6;
    if (pkg.category === 'Singapore') return 5;
    return 4;
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
