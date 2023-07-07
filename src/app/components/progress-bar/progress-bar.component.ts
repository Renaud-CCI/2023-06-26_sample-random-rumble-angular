import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() pv?: number;
  @Input() pvMax?: number;
  @Input() bgType?: string;
  @Input() icon?: string;
  @Input() barName?: string;

  constructor() { }

}
