import {Component, OnInit, AfterViewInit, OnDestroy, NgZone, Input} from '@angular/core';
import $ from 'jquery';
import {NarrationDetailsService} from '../../../narration-details.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent  {
  @Input() public txtbox;
  @Input() public myid;
  public text = '';
  // tslint:disable-next-line:variable-name
  private _subscription = null;
  constructor(private _narrate: NarrationDetailsService, private zone: NgZone) {
  this.text = _narrate.getSpeech();
  this._subscription = _narrate.speechChange.subscribe(() => {
    this.zone.run(() => {
      console.log('Subscription called ', _narrate.getSpeech());
      this.text = _narrate.getSpeech();
      console.log('Subscription text ', this.text);
      console.log(typeof(this.txtbox));
      if (this.txtbox==='true')
      $('#text').trigger('myevent');
    });

    });

  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  ngAfterViewInit() {
    const message = new SpeechSynthesisUtterance($('#text').val());
    let voices = speechSynthesis.getVoices();

    $('textarea').on('change', function() {
      console.log($(this).attr('id'), $(this).val());
      message[$(this).attr('id')] = $(this).val();
    });
    $('input').on('change', function() {
      console.log($(this).attr('id'), $(this).val());
      message[$(this).attr('id')] = $(this).val();
    });

    $('select').on('change', function() {
      message.voice = voices[$(this).val()];
    });

    $('#speaker').on('click', function() {
      speechSynthesis.speak(message);
    });

    $('#text').on('myevent', ()=>{
      message['text']=this.text;
      $('#speaker').click();
    });

// Hack around voices bug
    const interval = setInterval(function() {
      voices = speechSynthesis.getVoices();
      if (voices.length) { clearInterval(interval); } else { return; }

      for (let i = 0; i < voices.length; i++) {
        $('select').append('<option value="' + i + '">' + voices[i].name + '</option>');
      }
    }, 10);

  }

  ngOnInit(): void {
  }

}
