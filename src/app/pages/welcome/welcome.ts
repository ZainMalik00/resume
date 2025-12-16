import { Component } from '@angular/core';
import { AboutMeSection } from '../about-me-section/about-me-section';
import { ExperienceSection } from '../experience-section/experience-section';
import { ContactSection } from '../contact-section/contact-section';
@Component({
  selector: 'app-welcome',
  imports: [AboutMeSection, ExperienceSection, ContactSection],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {

}
