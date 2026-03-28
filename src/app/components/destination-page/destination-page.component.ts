import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, DestinationPageData, DestPackage } from '../../core/services/data.service';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.scss'
})
export class DestinationPageComponent implements OnInit {
  dest!: DestinationPageData;
  notFound = false;
  isInternational = false;

  detailPkg: DestPackage | null = null;
  bookingPkg: DestPackage | null = null;

  booking = { name: '', phone: '', email: '', date: '', travelers: '2', special: '' };
  bookingSent = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public data: DataService
  ) {}

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('name')?.toLowerCase() ?? '';
    if (this.data.internationalDestinationPages[key]) {
      this.dest = this.data.internationalDestinationPages[key];
      this.isInternational = true;
    } else if (this.data.domesticDestinationPages[key]) {
      this.dest = this.data.domesticDestinationPages[key];
    } else {
      this.notFound = true;
    }
  }

  openDetail(pkg: DestPackage) {
    this.detailPkg = pkg;
    this.bookingPkg = null;
    document.body.style.overflow = 'hidden';
  }

  openBooking(pkg: DestPackage) {
    this.bookingPkg = pkg;
    this.detailPkg = null;
    this.bookingSent = false;
    this.booking = { name: '', phone: '', email: '', date: '', travelers: '2', special: '' };
    document.body.style.overflow = 'hidden';
  }

  closeAll() {
    this.detailPkg = null;
    this.bookingPkg = null;
    document.body.style.overflow = '';
  }

  switchToBooking() {
    if (this.detailPkg) {
      this.openBooking(this.detailPkg);
    }
  }

  submitBooking() {
    this.bookingSent = true;
  }

  goHome() { this.router.navigate(['/']); }

  @HostListener('document:keydown.escape')
  onEsc() { this.closeAll(); }
}
