import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { Subscription } from 'rxjs';
import gsap from 'gsap';

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
  private sub!: Subscription;

  constructor(public data: DataService, private scrollSvc: ScrollService) {}

  ngOnInit() {
    this.scrollSvc.init();
    this.sub = this.scrollSvc.activeSection$.subscribe(s => this.activeSection = s);

    setTimeout(() => {
      gsap.from('.navbar', { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.nav-link', { y: -20, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out', delay: 0.2 });
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
        gsap.from('.mobile-nav-item', { x: -30, opacity: 0, stagger: 0.07, duration: 0.4, ease: 'power2.out' });
      }, 10);
    }
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
    if (this.searchOpen) {
      setTimeout(() => {
        gsap.from('.search-dropdown', { y: -10, opacity: 0, duration: 0.3, ease: 'power2.out' });
      }, 10);
    }
  }

  openMega(key: string) {
    this.activeMenu = key;
    setTimeout(() => {
      gsap.from('.mega-item', { y: -10, opacity: 0, stagger: 0.04, duration: 0.3, ease: 'power2.out' });
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
