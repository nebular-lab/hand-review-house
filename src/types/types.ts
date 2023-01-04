export type TrumpNum =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'T'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'
  | 'w';
export type TrumpMark = 's' | 'c' | 'h' | 'd' | 'w';

export type Position = 'BTN' | 'CO' | 'HJ' | 'UTG' | 'SB' | 'BB';
export interface TrumpType {
  num: TrumpNum;
  mark: TrumpMark;
}

export interface Action {
  pos: number;
  move: string;
  size: number;
  street: number;
  order: number;
}

export interface HandReview {
  content: string;
  action: Action[][];
  card:TrumpType[];
  pot: number[];
  bb: number;
  sb: number;
  es: number;
}
