import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NarrationDetailsService {
  private speech_text='Hello G H Patel College of Engineering and Technology';
  public speechChange: Subject<string> = new Subject<string>();

  constructor() {
    this.speechChange.next(this.speech_text);
  }
  setSpeech(newspeech){
    console.log(newspeech);
    this.speech_text = newspeech;
    this.speechChange.next(this.speech_text);
  }
  getSpeech(){
    return this.speech_text;
  }

}
