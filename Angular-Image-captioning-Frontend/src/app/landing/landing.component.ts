import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public imgname="cover1.jpg";
  public h3txt="Deep Learning Based";
  public h1txt="Automatic Image Caption Generator";

  constructor() { }

  ngOnInit(): void {
  }

}
