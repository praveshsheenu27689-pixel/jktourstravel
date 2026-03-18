import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  submitted = false;
  form = {
    name: '', email: '', phone: '',
    destination: '', date: '', travelers: '2',
    budget: '', message: ''
  };

  submit() {
    this.submitted = true;
    gsap.from('.success-msg', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' });
  }

  reset() {
    this.submitted = false;
    this.form = { name: '', email: '', phone: '', destination: '', date: '', travelers: '2', budget: '', message: '' };
  }
}
