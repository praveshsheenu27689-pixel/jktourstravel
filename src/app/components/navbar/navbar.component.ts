import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { Subscription } from 'rxjs';
import gsap from 'gsap';

interface SearchResult { name: string; type: string; image: string; section: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  mobileOpen = false;
  searchOpen = false;
  activeMenu: string | null = null;
  activeSection = 'home';
  searchQuery = '';
  searchResults: SearchResult[] = [];
  private sub!: Subscription;

  popularTags = ['Dubai', 'Bali', 'Europe', 'Thailand', 'Andaman', 'Kerala', 'Singapore', 'Maldives'];

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  ngOnInit() {
    this.scrollSvc.init();
    this.sub = this.scrollSvc.activeSection$.subscribe(s => this.activeSection = s);
    setTimeout(() => {
      gsap.fromTo('.navbar', { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.nav-link', { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out', delay: 0.2 });
    }, 2900);
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 60; }

  @HostListener('document:click')
  onDocClick() { this.searchOpen = false; this.activeMenu = null; }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    if (this.mobileOpen) {
      setTimeout(() => {
        gsap.fromTo('.mobile-nav-item',
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.07, duration: 0.4, ease: 'power2.out' }
        );
      }, 10);
    }
  }

  toggleSearch(e: Event) {
    e.stopPropagation();
    this.searchOpen = !this.searchOpen;
    if (this.searchOpen) {
      this.searchQuery = '';
      this.searchResults = [];
      setTimeout(() => {
        gsap.fromTo('.search-panel', { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
        const input = document.querySelector('.search-panel input') as HTMLInputElement;
        input?.focus();
      }, 10);
    }
  }

  onSearch() {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) { this.searchResults = []; return; }

    const results: SearchResult[] = [];

    this.data.destinations.forEach(d => {
      if (d.name.toLowerCase().includes(q)) {
        results.push({ name: d.name, type: 'Destination', image: d.image, section: 'destinations' });
      }
    });

    const allPkgs = [
      ...this.data.domesticPackages,
      ...this.data.internationalPackages,
      ...this.data.europePackages,
      ...this.data.andamanPackages
    ];
    allPkgs.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.itinerary.toLowerCase().includes(q)) {
        results.push({ name: p.title, type: p.category + ' Package', image: p.image, section: 'packages' });
      }
    });

    this.searchResults = results.slice(0, 6);
  }

  doSearch() {
    if (this.searchResults.length > 0) {
      this.selectResult(this.searchResults[0]);
    } else {
      this.scrollSvc.scrollTo('destinations');
      this.searchOpen = false;
    }
  }

  selectResult(r: SearchResult) {
    this.scrollSvc.scrollTo(r.section);
    this.searchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }

  quickSearch(tag: string) {
    this.searchQuery = tag;
    this.onSearch();
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }

  openMega(key: string) {
    this.activeMenu = key;
    setTimeout(() => {
      gsap.fromTo('.mega-item',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.04, duration: 0.3, ease: 'power2.out' }
      );
    }, 10);
  }

  closeMega() { this.activeMenu = null; }

  scrollTo(id: string) {
    this.scrollSvc.scrollTo(id);
    this.mobileOpen = false;
    this.searchOpen = false;
    this.activeMenu = null;
  }
}
