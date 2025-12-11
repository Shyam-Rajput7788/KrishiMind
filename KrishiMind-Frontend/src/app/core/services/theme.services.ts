// src/app/core/services/theme.service.ts
import { Injectable, signal, effect, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private translate = inject(TranslateService);
  
  // Signal for theme state
  private themeSignal = signal<Theme>('light');
  
  // Public read-only signal
  theme = this.themeSignal.asReadonly();
  
  constructor() {
    // Initialize theme
    this.initializeTheme();
    
    // Apply theme changes automatically
    effect(() => {
      this.applyTheme(this.themeSignal());
    });
  }

  setTheme(theme: Theme) {
    this.themeSignal.set(theme);
    localStorage.setItem('krishimind_theme', theme);
  }

  toggleTheme() {
    const newTheme = this.themeSignal() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private applyTheme(theme: Theme) {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (theme === 'dark') {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      bodyElement.classList.add('dark-theme');
      bodyElement.classList.remove('light-theme');
    } else {
      htmlElement.removeAttribute('data-bs-theme');
      bodyElement.classList.add('light-theme');
      bodyElement.classList.remove('dark-theme');
    }
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem('krishimind_theme') as Theme;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else if (prefersDark) {
      this.setTheme('dark');
    }
  }
  
  // Watch for system theme changes
  watchSystemTheme() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem('krishimind_theme');
      if (!savedTheme) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}