import {Injectable} from '@angular/core';
import $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {
  }

  scroll(curid,tarid) {
    $(document).ready(() => {
      $('#'+curid).click(() => {
        // $('#uploader')[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
        // console.log('hello')
        $('html, body').animate({
          scrollTop: $("#"+tarid).offset().top
        }, 1000);
      });
    });
  }
}
