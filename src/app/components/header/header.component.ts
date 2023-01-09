import { Component, OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  isDarkMode: any = this.modeService.isDarkMode$.subscribe((value) => {
    this.isDarkMode = value;
  });

  language: string = localStorage.getItem('language') || 'en';

  changeLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
    localStorage.setItem('language', language);
  }

  constructor(
    private modeService: ModeService,
    public translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.language);
  }

  ngOnInit(): void {}

  toggleDarkMode(isDark: boolean) {
    this.modeService.toggleDarkMode(isDark);
  }
}
