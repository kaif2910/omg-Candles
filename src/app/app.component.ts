import { Component, AfterViewInit, HostListener } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        this.applyFadeIn();
      }
    });
  }

  ngAfterViewInit() {
    this.applyFadeIn();
    this.initTheme();
  }

  applyFadeIn() {
    setTimeout(() => {
      const items = document.querySelectorAll('.card, .product-card, .hero, .page-hero, .split, .contact-card, .feature');
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: .1 });

      items.forEach(el => {
        el.classList.add('fade-in');
        obs.observe(el);
      });
    }, 100);
  }

  initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    }
  }

  @HostListener('click', ['$event'])
  onAppClick(event: MouseEvent) {
    // Global click handler if needed
  }
}
