import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AboutMeSection } from './pages/about-me-section/about-me-section';
import { ExperienceSection } from './pages/experience-section/experience-section';
import { ContactSection } from './pages/contact-section/contact-section';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
    AboutMeSection,
    ExperienceSection,
    ContactSection
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
