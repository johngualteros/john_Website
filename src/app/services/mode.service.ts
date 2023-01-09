import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  isDarkMode$ = new EventEmitter<boolean>();

  constructor() { }


  toggleDarkMode(isDark: boolean) {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    this.isDarkMode$.emit(isDark);
  }

}
