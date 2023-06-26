import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MonsterComponent } from './components/monster/monster.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ButtonCapacityComponent } from './components/button-capacity/button-capacity.component';
@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    PlayerListComponent,
    PlayerCardComponent,
    ProgressBarComponent,
    ButtonCapacityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
