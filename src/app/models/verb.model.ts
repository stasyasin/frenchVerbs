export interface IWord {
  je?: string;
  tu?: string;
  il?: string;
  nous?: string;
  vous?: string;
  ils?: string;
}

export interface IIndicatif {
  present: IWord;
  passeCompose: IWord;
  imparfait: IWord;
  plusQueParfait: IWord;
  passeSimple: IWord;
  passeAnterieur: IWord;
  futurSimple: IWord;
  futurAnterieur: IWord;
}

export interface IGenericTime {
  present: IWord;
  passe: IWord;
}

export interface ISubjonctif extends IGenericTime {
  present: IWord;
  passe: IWord;
  imparfait: IWord;
  plusQueParfait: IWord;
}

export interface IVerb {
  indicatif: IIndicatif;
  conditionnel: IGenericTime;
  subjonctif: ISubjonctif;
  imperatif: IGenericTime;
  infinitif: IGenericTime;
  participe: IGenericTime;
  gerondif: IGenericTime;
}
