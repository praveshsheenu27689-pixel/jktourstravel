import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements AfterViewInit {
  showAll = false;

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  get visibleDestinations() {
    return this.showAll ? this.data.destinations : this.data.destinations.slice(0, 12);
  }

  ngAfterViewInit() {
    gsap.fromTo('.destinations .section-header',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '#destinations', start: 'top 80%', once: true }
      }
    );
    gsap.fromTo('.dest-card',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.06, duration: 0.55, ease: 'power3.out',
        scrollTrigger: { trigger: '#destinations', start: 'top 75%', once: true }
      }
    );
  }

  goTo(id: string) { this.scrollSvc.scrollTo(id); }
}
