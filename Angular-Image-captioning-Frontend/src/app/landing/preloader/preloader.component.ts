import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div class="preloader">
      <div class="sk-rotating-plane"></div>
    </div>
  `
})
export class PreloaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
