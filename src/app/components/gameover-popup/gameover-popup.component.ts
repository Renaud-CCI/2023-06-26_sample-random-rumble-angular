import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gameover-popup',
  templateUrl: './gameover-popup.component.html',
  styleUrls: ['./gameover-popup.component.scss']
})
export class GameoverPopupComponent {
  @Input() gameoverPopupDisplay?:boolean;

  reloadPage() {
    window.location.reload();
  }
}
