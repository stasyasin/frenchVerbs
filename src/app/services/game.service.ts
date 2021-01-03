import { Injectable } from '@angular/core';
import { VerbsService } from './verbs.service';
import { MODE, PRONOUN, TIME } from '../models/game.model';
import { IVerb } from '../models/verb.model';
import { max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  verbsToPlay: string[] = [];
  timesToPlay: string[] = [];
  correctAnswers = 0;
  totalAnswers = 0;
  playingVerbKey = '';
  playingVerb: IVerb;
  pronounPlaying: PRONOUN;
  modePlaying: MODE;
  timeKey: string;
  timePlaying: TIME;

  constructor(private verbsService: VerbsService) {
    this.verbsToPlay = Object.assign(this.verbsService.verbKeys);
  }

  public startGame(): void {
    this.correctAnswers = 0;
    this.totalAnswers = 0;
    this.playRound();
  }

  private playRound(): void {
    // tslint:disable-next-line:radix
    const verbIndex = parseInt(String(Math.random() * (this.verbsToPlay.length - 1)));
    this.playingVerbKey = this.verbsToPlay[verbIndex];
    this.playingVerb = this.verbsService.verbs.find((item) => Object.keys(item)[0] === this.playingVerbKey);

    console.log('asd verbIndex', verbIndex);
    console.log('asd randomVerb', this.playingVerbKey);
    console.log('asd playingVerb', this.playingVerb);

    // tslint:disable-next-line:radix
    const pronounIndex = parseInt(String(Math.random() * 5));
    this.pronounPlaying = Object.values(PRONOUN)[pronounIndex];

    console.log('asd pronounIndex', pronounIndex);
    console.log('asd pronounPlaying', this.pronounPlaying);

    // tslint:disable-next-line:radix
    const modeIndex = parseInt(String(Math.random() * 4));
    this.modePlaying = Object.values(MODE)[modeIndex];

    console.log('asd modeIndex', modeIndex);
    console.log('asd modePlaying', this.modePlaying);

    // tslint:disable-next-line:radix
    const timeIndex = parseInt(String(Math.random() * Object.keys(this.playingVerb[this.playingVerbKey][this.modePlaying]).length - 1));
    this.timeKey = Object.keys(this.playingVerb[this.playingVerbKey][this.modePlaying])[timeIndex];
    this.timePlaying = TIME[this.timeKey];


    console.log('asd timeIndex', timeIndex);
    console.log('asd timeKey', this.timeKey);
    console.log('asd timePlaying', this.timePlaying);
  }

  public checkRoundResult(selectedAnswer: string): void {
    const correctAnswer = this.playingVerb[this.playingVerbKey][this.modePlaying][this.timeKey][this.pronounPlaying];
    if (selectedAnswer === correctAnswer) {
      this.correctAnswers++;
      this.totalAnswers++;
    } else {
      this.totalAnswers++;
    }
    this.playRound();
  }
}
