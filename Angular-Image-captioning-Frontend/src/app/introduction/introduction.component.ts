import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {ScrollService} from "../scroll.service";
// import $ from 'jquery';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  @Input() private backimg;
  @Input() public h3txt;
  @Input() public h1txt;
  @Input() public first;
  @Input() public second;
  public myurl = './assets/images/';
  constructor(private  scroller:ScrollService) {
    // console.log('back image name',this.backimg);
  }

  ngOnInit(): void {
    this.myurl = this.myurl + this.backimg;
    console.log(this.myurl);
  }
  // scrollToElement($element): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }
//   ngAfterViewInit(): void {
//
//     $(document).ready(()=>{
//     $('#uploadnow').click(()=> {
//        // $('#uploader')[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
//        // console.log('hello')
//       $('html, body').animate({
//     scrollTop: $("#uploader").offset().top
// }, 1000);
//     });
//   });
//
//   }
  ngAfterViewInit(){
    this.scroller.scroll('uploadnow', 'uploader');
    this.scroller.scroll('learnmorebtn', 'overview');
    this.scroller.scroll('getstartedbtn', 'program');
    this.scroller.scroll('ttsnow', 'speech');
  }

}
