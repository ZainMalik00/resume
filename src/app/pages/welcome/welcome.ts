import { Component } from '@angular/core';
import { NzTabsModule  } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-welcome',
  imports: [NzTabsModule, NzCardModule, NzIconModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {

  WorkExperienceList = [
    {
      "title": "Product Developer",
      "company": "BMC Software",
      "duration": "Sep 2024 - Present",
      "location": "Remote",
      "description": [
        "Constructed Agentic AI LLM tools for BMC centric ChatGPT chatbots to improve result efficacy by 85%",
        "Developed an automation script with Python & Docker to reuse technical demos & create new ones 70% faster",
        "Provided technical assistance to clients during training sessions for BMC products & solutions"
      ], 
      "hasMultiple": false 
    },
    {
      "title": "Software Developer",
      "company": "Calian AT",
      "duration": "Jan 2023 - Aug 2024",
      "location": "Remote",
      "description": [
        "Refactored Calian’s monitor and control software in Java and C++ using Linux CentOS & RHEL to improve satellite to ground communications",
        "Designed software drivers for monitoring on-site hardware & electrical equipment for Star One D2 and Jupiter 2 & 3 satellites using Java and XML",
        "Created automation scripts in Python to migrate older drivers to new hardware improving productivity by 75%"
      ],
      "hasMultiple": false 
    },
    {
      "title": "Web Developer",
      "company": "TD Bank",
      "duration": "May 2022 - Aug 2022",
      "location": "Toronto, ON",
      "description": [
        "Created sprint capacity planning tools using HTML/JS/CSS & JQL to increase the workflow for 99 agile development teams using engineering usability metrics and passive evaluations",
        "Developed Confluence work-spaces for teams migrating to a scaled agile framework",
        "Designed internal documentation style-sheets and templates for Confluence"
      ],
      "hasMultiple": false 
    },
    {
      "title": ["Product Developer", "Frontend Developer"],
      "company": "Mitel Networks",
      "duration": ["Sep 2021 - Dec 2021", "Jan 2021 - Apr 2021"],
      "location": "Ottawa, ON",
      "description": [
        [
          "Designed a proof of concept which hosted Mitel’s web UCaaS platform into a desktop app using Electron.JS",
          "Pitched proof of concept to upper management and successfully converted it into a Mitel product",
          "Developed a custom title/menu bar UI and a miniature floater window for the video conferencing component"
        ],
        [
          "Implemented UI designs in Angular, HTML, and Sass for Mitel’s video conferencing web application",
          "Implemented unit tests in Jasmine using test-driven development to improve code coverage over 95%",
          "Developed in-app feedback & problem reporting components linked to GitHub to improve bug discovery by 30%"
        ]
      ],
      "hasMultiple": true 
    },
    {
      "title": "Full-Stack Developer",
      "company": "BioTalent Canada",
      "duration": "Jun 2020 - Aug 2020",
      "location": "Ottawa, ON",
      "description": [
        "Established requirements with shareholders and created a proof of concept for the BioMakerSpace",
        "Designed navigational components using React.JS and Ant Design for simulator/workshop pages",
        "Implemented REST API using Express.JS and Node.JS"
      ],
      "hasMultiple": false 
    },
  ]

  workExperienceOnClick(event: string) {
    console.log(event)
  };

}
