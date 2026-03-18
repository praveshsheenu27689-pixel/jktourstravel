import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit {
  timelineSteps = [
    { day: 'Step 1', title: 'Choose Your Destination',  desc: 'Browse our wide range of domestic and international destinations. Pick your dream holiday spot.', icon: 'fas fa-map-marker-alt' },
    { day: 'Step 2', title: 'Select a Package',         desc: 'Choose from our curated packages or request a fully customized itinerary tailored to your needs.', icon: 'fas fa-suitcase' },
    { day: 'Step 3', title: 'Contact Our Team',         desc: 'Get in touch with our experienced travel agents who will guide you through every detail of your trip.', icon: 'fas fa-headset' },
    { day: 'Step 4', title: 'Confirm & Book',           desc: 'Confirm your itinerary, make payment, and receive all your travel documents and vouchers.', icon: 'fas fa-check-circle' },
    { day: 'Step 5', title: 'Pack Your Bags',           desc: 'Our team handles all logistics — hotels, transfers, sightseeing. You just need to show up!', icon: 'fas fa-plane-departure' },
    { day: 'Step 6', title: 'Enjoy Your Holiday',       desc: 'Experience your dream holiday with 24/7 support from J K Tours And Travels, Pune.', icon: 'fas fa-star' }
  ];

  constructor(private scrollSvc: ScrollService) {}

  ngAfterViewInit() {
    gsap.fromTo('.timeline-step',
      { x: (i: number) => i % 2 === 0 ? -50 : 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#timeline', start: 'top 70%', once: true } }
    );
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
