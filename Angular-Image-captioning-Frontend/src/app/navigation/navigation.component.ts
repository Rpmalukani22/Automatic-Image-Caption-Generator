import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ScrollService} from "../scroll.service";
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private  scroller:ScrollService, private router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.scroller.scroll('gotointro','intro');
    this.scroller.scroll('gotooverview','overview');
    this.scroller.scroll('gotogetstarted','getstarted');
    this.scroller.scroll('gotoprogram','program');
    this.scroller.scroll('gotospeakers','speakers');
    this.scroller.scroll('gotovenue','venue');
    this.scroller.scroll('gotosponsors','sponsors');
    this.scroller.scroll('gotocontact','contact');
    
    $("#clickmetoclose,ul li").click(function(event) {

    if($('#closeme').is(':hidden'))
      {$('#closeme').show().toggleClass('in');
      }
    else
      $('#closeme').hide().toggleClass('in');
  });
  }
go(){
this.router.navigate(['/']);
}
}
