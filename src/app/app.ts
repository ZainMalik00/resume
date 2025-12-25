import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AboutMeSection } from './pages/about-me-section/about-me-section';
import { ExperienceSection } from './pages/experience-section/experience-section';
import { ContactSection } from './pages/contact-section/contact-section';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzPageHeaderModule,
    AboutMeSection,
    ExperienceSection,
    ContactSection,
    NzIconModule,
    NzButtonModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  menuType: 'expanded' | 'dropdown' = window.innerWidth <= 768 ? 'dropdown' : 'expanded';
  themeType = signal(document.body.style.colorScheme === 'dark' ? 'dark' : 'light');
  backgroundImageType = signal(document.body.style.colorScheme === 'dark' ? 'url(dark-bkg.gif)' : 'none') 

  @HostListener('window:resize')
  onResize() {
    this.menuType = window.innerWidth <= 768 ? 'dropdown' : 'expanded';
  }

  toggleTheme(event: Event) {
    const isDark = document.body.style.colorScheme === 'dark';
    document.body.style.colorScheme = isDark ? 'light' : 'dark';
    this.themeType.set(document.body.style.colorScheme)
    this.backgroundImageType.set(document.body.style.colorScheme === 'dark' ? 'url(dark-bkg.gif)' : 'none')
  }

}
