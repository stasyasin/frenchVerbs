import { Injectable } from '@angular/core';
import { verbsA } from '../system/db/verbsA';
import { verbsB } from '../system/db/verbsB';
import { verbsF } from '../system/db/verbsF';
import { verbsC } from '../system/db/verbsC';
import { verbsD } from '../system/db/verbsD';
import { verbsE } from '../system/db/verbsE';
import { verbsG } from '../system/db/verbsG';
import { verbsH } from '../system/db/verbsH';
import { verbsI } from '../system/db/verbsI';
import { verbsJ } from '../system/db/verbsJ';
import { verbsK } from '../system/db/verbsK';
import { verbsL } from '../system/db/verbsL';
import { verbsM } from '../system/db/verbsM';
import { verbsN } from '../system/db/verbsN';
import { verbsO } from '../system/db/verbsO';
import { verbsP } from '../system/db/verbsP';
import { verbsQ } from '../system/db/verbsQ';
import { verbsR } from '../system/db/verbsR';
import { verbsS } from '../system/db/verbsS';
import { verbsT } from '../system/db/verbsT';
import { verbsU } from '../system/db/verbsU';
import { verbsV } from '../system/db/verbsV';
import { verbsW } from '../system/db/verbsW';
import { verbsX } from '../system/db/verbsX';
import { verbsY } from '../system/db/verbsY';
import { verbsZ } from '../system/db/verbsZ';

@Injectable({
  providedIn: 'root'
})
export class VerbsService {

  verbs = [];
  verbKeys = [];
  currentVerbKey = '';
  currentVerb = {}; // todo add type here

  constructor() {
    this.verbs = [
      ...verbsA,
      ...verbsB,
      ...verbsC,
      ...verbsD,
      ...verbsE,
      ...verbsF,
      ...verbsG,
      ...verbsH,
      ...verbsI,
      ...verbsJ,
      ...verbsK,
      ...verbsL,
      ...verbsM,
      ...verbsN,
      ...verbsO,
      ...verbsP,
      ...verbsQ,
      ...verbsR,
      ...verbsS,
      ...verbsT,
      ...verbsU,
      ...verbsV,
      ...verbsW,
      ...verbsX,
      ...verbsY,
      ...verbsZ,
    ];
    this.verbKeys = this.verbs.map((verb) => Object.keys(verb)[0]);
    this.updateCurrentVerb('avoir');
  }

  public updateCurrentVerb(key: string): void {
    this.currentVerbKey = key;
    this.currentVerb = this.verbs.find((verb) => Object.keys(verb)[0] === key);
  }

}
