import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { VerbsService } from '../../services/verbs.service';
import { IVerb } from '../../models/verb.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public gameService: GameService, public verbsService: VerbsService) {
  }

  ngOnInit(): void {
    this.gameService.startGame();
  }

  public getAnswerOptions(): string[] {
    return Object.values(this.gameService.playingVerb[this.gameService.playingVerbKey][this.gameService.modePlaying][this.gameService.timeKey]);
  }

}
