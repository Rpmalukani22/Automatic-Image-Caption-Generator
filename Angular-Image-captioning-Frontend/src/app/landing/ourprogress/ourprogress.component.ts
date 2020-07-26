import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ScrollService} from "../../scroll.service";

@Component({
  selector: 'app-ourprogress',
  templateUrl: './ourprogress.component.html',
  styleUrls: ['./ourprogress.component.css']
})
export class OurprogressComponent implements OnInit {
    public window;
  constructor(private scroller:ScrollService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.window=window;
    this.scroller.scroll("havealookbtn","getstarted")
  }

}
