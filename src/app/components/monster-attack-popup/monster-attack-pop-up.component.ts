import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monster-attack-pop-up',
  templateUrl: './monster-attack-pop-up.component.html',
  styleUrls: ['./monster-attack-pop-up.component.scss']
})

export class MonsterAttackPopUpComponent {

  @Input() popUpDisplay?:boolean;
  
  constructor() {
    console.log("displayPopup", this.popUpDisplay);
  }
  
  // test(value:boolean){
  //   if(this.popUpDisplay){
  //   }
  //   console.log('avant redefinition', this.popUpDisplay)
  //   this.popUpDisplay = value;
  //   console.log('apres redefinition', this.popUpDisplay)
  // }

}
