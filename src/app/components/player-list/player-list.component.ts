import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players:any = [

    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
  ]
  constructor() {
  }
  ngOnInit() {
  }
}
