import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/models/player.model';

@Component({
  selector: 'app-actions-popup',
  templateUrl: './actions-popup.component.html',
  styleUrls: ['./actions-popup.component.scss']
})
export class ActionsPopupComponent implements OnInit {
  @Input() actionsPopupDisplay?:boolean;
  @Input() actionsPopupType?:string;
  @Input() actionsPlayer?:IPlayer;
  @Input() actionsDamage?:number;
  @Input() actionsCost?:number;
  @Input() actionsGain?:string;
  @Input() actionsLost?:string;
  @Input() attackDamage?:number;


  ngOnInit() {    
  }
}
