import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'Python',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C++',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
}
