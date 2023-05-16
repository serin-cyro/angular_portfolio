import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Developer',
      company: 'Tata Consulltancy Services',
      duration: 'Aug 2022 - Now',
      description: [
        'Working On Angular Applications for a ReInsurance Cooperation',
        'Tryong to learn and become a better version of myself.',
      ],
    },
    {
      role: 'Intern',
      company: 'Tata Consulltancy Services',
      duration: 'Dec 2021-Aug 2022',
      description: [
        'Worked on a Python Project to seperate and segregate the data which has been scraped freom the web',
      ],
    },
    {
      role: 'Intern',
      company: 'Byte Head',
      duration: 'Jan 2021-Dec 2021',
      description: [
        'Working on a flutter mobile application that helps to track the count of visitors in a public space and also enables the user to track their vists each day'
      ],
    },
    
  ]

}
