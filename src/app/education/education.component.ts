import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "Mar Athanasius College of Engineering",
      course: 'B.Tech',
      duration: '2018-1022',
      score: '80%',
    },
    {
      institute: 'Carmel HSS Chalakudy',
      course: 'HSE',
      duration: '2015-2017',
      score: '80%',
    },
    {
      institute: 'Fr. Mathew Alakalam Public School',
      course: 'SSC',
      duration: '2015',
      score: '10 GPA',
    },
  ];

}
