import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterComponent } from './components/monster/monster.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ButtonCapacityComponent } from './components/button-capacity/button-capacity.component';
import { StoreModule } from '@ngrx/store'; 
import { EffectsModule } from '@ngrx/effects'; 
import { gameReducer } from './reducers/game.reducer';
import { MonsterAttackPopUpComponent } from './components/monster-attack-popup/monster-attack-pop-up.component';
import { MonsterDeadPopupComponent } from './components/monster-dead-popup/monster-dead-popup.component';
import { GameoverPopupComponent } from './components/gameover-popup/gameover-popup.component';
import { ActionsPopupComponent } from './components/actions-popup/actions-popup.component';
import { IntroPopupComponent } from './components/intro-popup/intro-popup.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    PlayerListComponent,
    PlayerCardComponent,
    ProgressBarComponent,
    ButtonCapacityComponent,
    MonsterAttackPopUpComponent,
    MonsterDeadPopupComponent,
    GameoverPopupComponent,
    ActionsPopupComponent,
    IntroPopupComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ game: gameReducer }), 
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
