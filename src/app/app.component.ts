import { Component, OnInit } from '@angular/core';
import { ModeService } from './services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular_john';

  constructor(private modeService: ModeService) {}

  ngOnInit(): void {
    const isDark = localStorage.getItem('darkMode') === 'true';
    this.modeService.toggleDarkMode(isDark);
  }

  
}
