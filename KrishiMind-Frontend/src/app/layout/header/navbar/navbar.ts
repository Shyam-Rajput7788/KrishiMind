import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}

// import { Component, OnInit, Output, EventEmitter, Input, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
//   templateUrl: './navbar.html',
//   styleUrls: ['./navbar.css']
// })
// export class Navbar implements OnInit {
//   @Output() themeChanged = new EventEmitter<'light' | 'dark'>();
//   @Input() currentTheme: 'light' | 'dark' = 'light';
  
//   currentLang: string = 'en';
//   availableLanguages = [
//     { code: 'en', name: 'English', flag: '🇺🇸' },
//     { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
//     { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
//     { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
//     { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
//     { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
//     { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' }
//   ];

//   private translate = inject(TranslateService);

//   ngOnInit() {
//     // Load saved preferences
//     const savedLang = localStorage.getItem('krishimind_lang');
//     const savedTheme = localStorage.getItem('krishimind_theme');
    
//     if (savedLang) {
//       this.switchLanguage(savedLang);
//     } else {
//       this.translate.use('en');
//     }
    
//     if (savedTheme) {
//       this.currentTheme = savedTheme as 'light' | 'dark';
//       this.applyTheme(this.currentTheme);
//     } else {
//       // Check system preference
//       if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         this.currentTheme = 'dark';
//         this.applyTheme('dark');
//       }
//     }
//   }

//   toggleTheme() {
//     this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
//     this.applyTheme(this.currentTheme);
//     localStorage.setItem('krishimind_theme', this.currentTheme);
//     this.themeChanged.emit(this.currentTheme);
//   }

//   private applyTheme(theme: 'light' | 'dark') {
//     const htmlElement = document.documentElement;
//     if (theme === 'dark') {
//       htmlElement.setAttribute('data-bs-theme', 'dark');
//       document.body.classList.add('dark-theme');
//     } else {
//       htmlElement.removeAttribute('data-bs-theme');
//       document.body.classList.remove('dark-theme');
//     }
//   }

//   switchLanguage(lang: string) {
//     this.currentLang = lang;
//     this.translate.use(lang);
//     localStorage.setItem('krishimind_lang', lang);
    
//     // Update direction for RTL languages if needed
//     if (lang === 'ar' || lang === 'he') {
//       document.documentElement.dir = 'rtl';
//     } else {
//       document.documentElement.dir = 'ltr';
//     }
//   }

//   getCurrentLanguageName(): string {
//     const lang = this.availableLanguages.find(l => l.code === this.currentLang);
//     return lang ? lang.name : 'English';
//   }

//   getCurrentFlag(): string {
//     const lang = this.availableLanguages.find(l => l.code === this.currentLang);
//     return lang ? lang.flag : '🇺🇸';
//   }

//   // Mobile menu state
//   isMobileMenuOpen = false;

//   toggleMobileMenu() {
//     this.isMobileMenuOpen = !this.isMobileMenuOpen;
//   }
// }