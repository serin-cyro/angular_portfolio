import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData:string[][]=[
    ['Name', 'Serin Tony'],
    ['DOB','04/10/1999'],
    ['Experiance', '1 Year'],
    ['Education', 'Bachelors in Technology'],
    ['Intrests','Gaming']
  ];
  aboutMe:string[]=[
    'Hi, I am a Software Engineer currently working at Tata Consultancy Services for the past 10 months.',
     'I have worked on diffrent technologies like Flutter,Java , and I am currently working on Angular',
     'I belive thhat I am a competent enough person to work on diffrent technolkogies and also learn alongside working',
     
  ]

}
