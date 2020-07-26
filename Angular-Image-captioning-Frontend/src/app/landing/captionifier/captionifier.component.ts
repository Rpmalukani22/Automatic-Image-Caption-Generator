import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-captionifier',
  templateUrl: './captionifier.component.html',
  styleUrls: ['./captionifier.component.css']
})
export class CaptionifierComponent implements OnInit {
  public window;
  constructor(private router: Router) { }

  ngOnInit(): void {
     this.window=window;
  }
on(num) {
    document.getElementsByClassName('overlay')[num]['style'].display = 'block';
  }

   off(num) {
    document.getElementsByClassName('overlay')[num]['style'].display = 'none';
  }

}
