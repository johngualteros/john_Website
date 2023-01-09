import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: Project[] = [
    {
      id: 1,
      title: 'Netflix Supabase Angular Clone',
      description: 'This is a clone of the Netflix website, built with Angular, Supabase and Sass got the validations and notifications',
      image: '../../../assets/netflix_2.png',
      link: 'https://github.com/johngualteros/angular_netflix_supabase',
      technologies: ['Angular', 'Supabase', 'Sass', 'Rxjs', 'TypeScript']
    },
    {
      id: 2,
      title: 'Front end Bug Tracker React',
      description: 'Front ent bug tracker made in react and redux this is a personal project for manage the bugs in my projects',
      image: '../../../assets/bugtracker-react.png',
      link: 'https://github.com/johngualteros/bug-tracker-react-redux-toolkit-query',
      technologies: ['React', 'Toast', 'Css', 'Redux', 'TypeScript', 'Darkmode']
    },
    {
      id: 3,
      title: 'Back end Bug Tracker Java - Spring',
      description: 'Back end bug tracker made in java and spring boot this is a personal project for manage the bugs in my projects it\'s a api rest',
      image: '../../../assets/bugtracker-spring.png',
      link: 'https://github.com/johngualteros/bug-tracker-ddd',
      technologies: ['Java', 'Springboot', 'Maven', 'Postgres', 'Jpa', 'Lombok', 'Jwt', 'Spring security', 'Junit']
    },
    {
      id: 4,
      title: 'Blog - Angular',
      description: 'Blog made in Angular and Firebase its a clone of midudev blog but with my code and in angular',
      image: '../../../assets/johndev.png',
      link: 'https://github.com/johngualteros/johndev',
      technologies: ['TypeScript', 'Angular', 'Firebase', 'Rxjs', 'Sass', 'Darkmode']
    }
  ]

}
