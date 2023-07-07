import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monster-dead-popup',
  templateUrl: './monster-dead-popup.component.html',
  styleUrls: ['./monster-dead-popup.component.scss']
})
export class MonsterDeadPopupComponent {
  @Input() deadPopUpDisplay?:boolean;

  reloadPage() {
    window.location.reload();
  }

}
