import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-globe">
          <div class="globe-ring ring-1"></div>
          <div class="globe-ring ring-2"></div>
          <div class="globe-ring ring-3"></div>
          <div class="globe-center">
            <span class="globe-icon">🌏</span>
          </div>
          <div class="plane-orbit">
            <span class="orbit-plane">✈</span>
          </div>
        </div>
        <div class="loader-brand">
          <span class="brand-jk">JK</span>
          <span class="brand-name">Tour & Travels</span>
        </div>
        <div class="loader-bar">
          <div class="loader-fill"></div>
        </div>
        <div class="loader-percent">0%</div>
        <p class="loader-msg">Preparing your journey to paradise...</p>
      </div>
    </div>
  `,
  styles: [`
    .loader {
      position: fixed; inset: 0; z-index: 9999;
      background: linear-gradient(135deg, #0a2e1a 0%, #1a6b3c 60%, #2d9e5f 100%);
      display: flex; align-items: center; justify-content: center;
    }
    .loader-inner {
      text-align: center; color: #fff; width: 320px;
      display: flex; flex-direction: column; align-items: center; gap: 1.2rem;
    }
    .loader-globe {
      position: relative; width: 120px; height: 120px;
      display: flex; align-items: center; justify-content: center;
    }
    .globe-ring {
      position: absolute; border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.2);
      &.ring-1 { width: 120px; height: 120px; animation: ringPulse 2s ease-in-out infinite; }
      &.ring-2 { width: 90px; height: 90px; animation: ringPulse 2s ease-in-out infinite 0.3s; }
      &.ring-3 { width: 60px; height: 60px; animation: ringPulse 2s ease-in-out infinite 0.6s; }
    }
    @keyframes ringPulse {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.05); opacity: 0.7; }
    }
    .globe-center {
      width: 56px; height: 56px; border-radius: 50%;
      background: rgba(255,255,255,0.12);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem; z-index: 2;
      animation: globeSpin 4s linear infinite;
    }
    @keyframes globeSpin {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
    }
    .plane-orbit {
      position: absolute; width: 100%; height: 100%;
      animation: orbitSpin 2.5s linear infinite;
    }
    .orbit-plane {
      position: absolute; top: -8px; left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
    }
    @keyframes orbitSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .loader-brand {
      display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
    }
    .brand-jk {
      font-size: 2.8rem; font-weight: 800;
      font-family: 'Playfair Display', serif; line-height: 1;
      background: linear-gradient(135deg, #fff 30%, #f5a623 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .brand-name {
      font-size: 0.85rem; letter-spacing: 3px;
      text-transform: uppercase; opacity: 0.8;
    }
    .loader-bar {
      width: 100%; height: 4px;
      background: rgba(255,255,255,0.15); border-radius: 2px; overflow: hidden;
    }
    .loader-fill {
      height: 100%; width: 0;
      background: linear-gradient(90deg, #f5a623, #fff);
      border-radius: 2px;
    }
    .loader-percent {
      font-size: 0.85rem; font-weight: 600; color: var(--accent);
      letter-spacing: 1px;
    }
    .loader-msg {
      font-size: 0.8rem; opacity: 0.65; letter-spacing: 0.5px;
    }
  `]
})
export class LoaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    let pct = 0;
    const pctEl = document.querySelector('.loader-percent') as HTMLElement;

    const tl = gsap.timeline();
    tl.to('.loader-fill', { width: '100%', duration: 2.4, ease: 'power2.inOut',
      onUpdate: () => {
        pct = Math.round(parseFloat(gsap.getProperty('.loader-fill', 'width') as string) / 3.2);
        if (pctEl) pctEl.textContent = Math.min(pct, 100) + '%';
      }
    })
    .to('.loader', {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.8,
      ease: 'power3.inOut',
      delay: 0.2
    });
  }
}
