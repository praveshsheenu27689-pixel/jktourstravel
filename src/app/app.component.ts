import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StickyBarComponent } from './components/sticky-bar/sticky-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { PackagesComponent } from './components/packages/packages.component';
import { DealsComponent } from './components/deals/deals.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ScrollStoryComponent } from './components/scroll-story/scroll-story.component';
import { MapSectionComponent } from './components/map-section/map-section.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollService } from './core/services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    TopbarComponent,
    NavbarComponent,
    StickyBarComponent,
    HeroComponent,
    DestinationsComponent,
    PackagesComponent,
    DealsComponent,
    CategoriesComponent,
    ScrollStoryComponent,
    MapSectionComponent,
    TimelineComponent,
    GalleryComponent,
    TestimonialsComponent,
    BookingComponent,
    AboutComponent,
    NewsletterComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;

  constructor(private scrollSvc: ScrollService) {}

  ngOnInit() {
    setTimeout(() => this.loading = false, 2800);
  }

  scrollTop(e: Event) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string) {
    this.scrollSvc.scrollTo(id);
  }
}
