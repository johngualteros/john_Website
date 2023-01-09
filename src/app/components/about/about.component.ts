import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  skills: Skill[] = [
    {
      name: 'HTML',
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
      color: '#e34c26'
    },
    {
      name: 'Css',
      icon: 'https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png',
      color: '#264de4'
    },
    {
      name: 'Sass',
      icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      color: '#cc6699'
    },
    {
      name: 'Bootstrap',
      icon: 'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg',
      color: '#563d7c'
    },
    {
      name: 'Tailwind',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
      color: '#000'
    },
    {
      name: 'Javascript',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png',
      color: '#f0db4f'
    },
    {
      name: 'Typescript',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png',
      color: '#007acc'
    },
    {
      name: 'Angular',
      icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
      color: '#dd0031'
    },
    {
      name: 'React',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png',
      color: '#61dafb'
    },
    {
      name: 'Mysql',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/mysql-3628940-3030165.png',
      color: '#00758f'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png',
      color: '#47a248'
    },
    {
      name: 'Nodejs',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
      color: '#339933'
    },
    {
      name: 'Postgresql',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png',
      color: '#336791'
    },
    {
      name: 'Git',
      icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      color: '#f05032'
    },
    {
      name: 'Java',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png',
      color: '#007396'
    },
    {
      name: 'Python',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png',
      color: '#3776ab'
    },
    {
      name: 'Spring',
      icon: 'https://images.ctfassets.net/gt6dp23g0g38/5DqlQtFKecFlkqQ8YGDT2p/aa945b648f44dd872e9a1b89f7d203ef/springboot.png',
      color: '#6db33f'
    },
    {
      name: 'Django',
      icon: 'https://automationpanda.files.wordpress.com/2017/09/django-logo-negative.png?w=640',
      color: '#092e20'
    },
    {
      name: 'Docker',
      icon: 'https://cdn.iconscout.com/icon/free/png-256/docker-3-226091.png',
      color: '#2496ed'
    },
    {
      name: 'Some more',
      icon: 'https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png',
      color: '#111222'
    }
  ];


  ngOnInit(): void {
  }


}
