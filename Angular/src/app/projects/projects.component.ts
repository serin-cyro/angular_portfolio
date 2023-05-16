import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [{
    title: 'Python Web Scrapper',
    technologies: 'Python, Pyspark, PowerBI',
    description: [
      'An Python Script that can be used to scour  a set of predefined websites for news on pre-specified platforms keywords.',
      'A PowerBI panel to display the procured information based on the count of the keywords that were defined.'
    ],
  },

    {
      title: 'Flutter Project',
      technologies: 'Flutter,  Firebase, Google APIs',
      description: [
        'A flutter mobile application that helps bto track the count of visitors in a public space and also enables the user to track their vists each day.',
        'Learned Advanced Flutter and also worked with Firebase.'
      ],
    },
    {
      title: 'Hitch a Ride ',
      technologies: 'Flutter,  Firebase, Google APIs',
      description: [
        'Worked as a team to create a ride sharing platform.',
        'Drivers get to select riders who are travelling to or around the destibation that they are going.',
        'Learned to build a full fledged application that can be deployed in the playstore.',
      ],
    },
    
  ];
}
