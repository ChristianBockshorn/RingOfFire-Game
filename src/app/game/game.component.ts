import { CommonModule } from '@angular/common';
import { Game } from './../../models/game';
import { PlayerComponent } from './player/player.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor() {
    this.game = new Game();
    console.log(this.game)
  }



  takeCard() {
    if (!this.pickCardAnimation && this.game.stack.length > 0) {
      // Überprüfen, ob das Array nicht leer ist, bevor du pop() aufrufst
      let poppedCard = this.game.stack.pop();
  
      if (poppedCard !== undefined) {
        this.currentCard = poppedCard;
        console.log(this.currentCard);
        this.pickCardAnimation = true;
  
        setTimeout(() => {
          this.game.playerdCard.push(this.currentCard);
          this.pickCardAnimation = false;
        }, 1000);
      }
    }
  }
  
  
}
