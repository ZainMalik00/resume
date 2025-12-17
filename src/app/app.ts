import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AboutMeSection } from './pages/about-me-section/about-me-section';
import { ExperienceSection } from './pages/experience-section/experience-section';
import { ContactSection } from './pages/contact-section/contact-section';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
    NzIconModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  menuType: 'expanded' | 'dropdown' = window.innerWidth <= 768 ? 'dropdown' : 'expanded';

  @HostListener('window:resize')
  onResize() {
    this.menuType = window.innerWidth <= 768 ? 'dropdown' : 'expanded';
  }

}
