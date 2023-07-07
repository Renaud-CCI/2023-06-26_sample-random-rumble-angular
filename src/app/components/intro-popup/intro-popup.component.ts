import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPlayer } from 'src/app/models/player.model';

@Component({
  selector: 'app-intro-popup',
  templateUrl: './intro-popup.component.html',
  styleUrls: ['./intro-popup.component.scss']
})
export class IntroPopupComponent implements OnInit {
  @Input() introPopupDisplay?:boolean;
  @Input() introPlayers?:IPlayer[];
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

ngOnInit() {
  console.log(this);
}

  setIntroPopupFalse(){
    const eventData = {
      introPopupDisplay : false
    };
    this.buttonClicked.emit(eventData);
  }
}

