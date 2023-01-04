import { Action, TrumpMark, TrumpNum, TrumpType } from '../types/types';

const history = `PokerStars Zoom Hand #238966161785:  Hold'em No Limit ($0.01/$0.02) - 2022/10/01 5:16:16 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: nebular77 ($2.16 in chips)
Seat 2: 3 Titzen 3 ($1.09 in chips)
Seat 3: Mokujin2 ($2 in chips)
Seat 4: ilidum9 ($9.89 in chips)
Seat 5: ilhan100 ($1.90 in chips)
Seat 6: ray147741 ($0.83 in chips)
3 Titzen 3: posts small blind $0.01
Mokujin2: posts big blind $0.02
*** HOLE CARDS ***
Dealt to nebular77 [2h 9d]
ilidum9: folds
ilidum9 is disconnected
ilhan100: raises $0.02 to $0.04
ray147741: folds
nebular77: folds
nebular77 is disconnected
3 Titzen 3: calls $0.03
Mokujin2: raises $0.16 to $0.20
ilhan100: calls $0.16
3 Titzen 3: folds
*** FLOP *** [8s 9s Qs]
3 Titzen 3 is disconnected
Mokujin2: checks
ilhan100: checks
*** TURN *** [8s 9s Qs] [6s]
Mokujin2: checks
ilhan100: checks
*** RIVER *** [8s 9s Qs 6s] [Ac]
Mokujin2: bets $0.28
ilhan100: folds
Uncalled bet ($0.28) returned to Mokujin2
Mokujin2 collected $0.42 from pot
Mokujin2: doesn't show hand
ilhan100 is disconnected
*** SUMMARY ***
Total pot $0.44 | Rake $0.02
Board [8s 9s Qs 6s Ac]
Seat 1: nebular77 (button) folded before Flop (didn't bet)
Seat 2: 3 Titzen 3 (small blind) folded before Flop
Seat 3: Mokujin2 (big blind) collected ($0.42)
Seat 4: ilidum9 folded before Flop (didn't bet)
Seat 5: ilhan100 folded on the River
Seat 6: ray147741 folded before Flop (didn't bet)
`;

const history2 = `PokerStars Zoom Hand #239397098324:  Hold'em No Limit ($0.01/$0.02) - 2022/10/23 2:11:09 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: nebular77 ($2.06 in chips)
Seat 2: joohny188 ($2.21 in chips)
Seat 3: dima19852408 ($1.28 in chips)
Seat 4: UlkigerUlf ($2.13 in chips)
Seat 5: morin1221 ($2.08 in chips)
Seat 6: LuNa WL ($1.06 in chips)
joohny188: posts small blind $0.01
dima19852408: posts big blind $0.02
*** HOLE CARDS ***
Dealt to nebular77 [Ks 2s]
UlkigerUlf: folds
UlkigerUlf is disconnected
LuNa WL is disconnected
morin1221: folds
LuNa WL: folds
morin1221 is disconnected
nebular77: raises $0.03 to $0.05
joohny188: folds
dima19852408: calls $0.03
*** FLOP *** [3s 5s 3c]
dima19852408: checks
nebular77: bets $0.04
dima19852408: raises $0.06 to $0.10
nebular77: calls $0.06
*** TURN *** [3s 5s 3c] [4c]
dima19852408: bets $0.13
nebular77: calls $0.13
*** RIVER *** [3s 5s 3c 4c] [7s]
dima19852408: bets $0.27
nebular77: raises $1.36 to $1.63
dima19852408: calls $0.73 and is all-in
Uncalled bet ($0.63) returned to nebular77
*** SHOW DOWN ***
nebular77: shows [Ks 2s] (a flush, King high)
dima19852408: shows [6s 6h] (a straight, Three to Seven)
nebular77 collected $2.48 from pot
*** SUMMARY ***
Total pot $2.57 | Rake $0.09
Board [3s 5s 3c 4c 7s]
Seat 1: nebular77 (button) showed [Ks 2s] and won ($2.48) with a flush, King high
Seat 2: joohny188 (small blind) folded before Flop
Seat 3: dima19852408 (big blind) showed [6s 6h] and lost with a straight, Three to Seven
Seat 4: UlkigerUlf folded before Flop (didn't bet)
Seat 5: morin1221 folded before Flop (didn't bet)
Seat 6: LuNa WL folded before Flop (didn't bet)
`;
const history3 = `
PokerStars Zoom Hand #238965479000:  Hold'em No Limit ($0.01/$0.02) - 2022/10/01 3:52:31 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: HugeDwarf84 ($5.57 in chips)
Seat 2: Ramble604 ($5.66 in chips)
Seat 3: sourice_xx ($4.72 in chips)
Seat 4: Szymes KrK ($2.85 in chips)
Seat 5: Jbpokerino ($2.20 in chips)
Seat 6: nebular77 ($2.95 in chips)
Ramble604: posts small blind $0.01
sourice_xx: posts big blind $0.02
*** HOLE CARDS ***
Dealt to nebular77 [Ac Ad]
Jbpokerino is disconnected
Ramble604 is disconnected
Szymes KrK: folds
Jbpokerino: folds
Szymes KrK is disconnected
nebular77: raises $0.03 to $0.05
sourice_xx is disconnected
HugeDwarf84: raises $0.13 to $0.18
Ramble604: folds
sourice_xx: folds
nebular77: raises $0.32 to $0.50
HugeDwarf84: raises $5.07 to $5.57 and is all-in
nebular77: calls $2.45 and is all-in
Uncalled bet ($2.62) returned to HugeDwarf84
*** FLOP *** [2c Jh 4d]
*** TURN *** [2c Jh 4d] [Jc]
*** RIVER *** [2c Jh 4d Jc] [Ks]
*** SHOW DOWN ***
nebular77: shows [Ac Ad] (two pair, Aces and Jacks)
HugeDwarf84: shows [Th Tc] (two pair, Jacks and Tens)
nebular77 collected $5.72 from pot
*** SUMMARY ***
Total pot $5.93 | Rake $0.21
Board [2c Jh 4d Jc Ks]
Seat 1: HugeDwarf84 (button) showed [Th Tc] and lost with two pair, Jacks and Tens
Seat 2: Ramble604 (small blind) folded before Flop
Seat 3: sourice_xx (big blind) folded before Flop
Seat 4: Szymes KrK folded before Flop (didn't bet)
Seat 5: Jbpokerino folded before Flop (didn't bet)
Seat 6: nebular77 showed [Ac Ad] and won ($5.72) with two pair, Aces and Jacks
`;

export const editHistory = (history: string) => {
  const splitedhistory = history.split('\n');
  const pots = [0, 0, 0, 0];

  let playerCount = 0;
  let sb = 0;
  let bb = 0;
  const cards: TrumpType[] = [];
  const actions: Action[][] = [[], [], [], []];
  let nowStreet = -1;
  const players: { pos: number; name: string; pot: number[] }[] = [];
  let index = 0;
  splitedhistory.forEach((line) => {
    if (line.includes('in chips)')) {
      playerCount++;
      // TODO プレイヤー名に空白があった時
      players.push({
        pos: index,
        name: line.split(' ').slice(2, -3).join(' '),
        pot: [0, 0, 0, 0],
      });
      index++;
    }
  });

  splitedhistory.forEach((line) => {
    if (line.includes('posts small blind')) {
      sb = Number(line.split(' ').slice(-1)[0].replace('$', ''));
      const name = line.split(' ').slice(0, -4).join(' ').slice(0, -1);
      console.log(name);
      players.forEach((player) => {
        if (player.name == name) {
          player.pot[0] = sb;
        }
      });
    }
    if (line.includes('posts big blind')) {
      bb = Number(line.split(' ').slice(-1)[0].replace('$', ''));
      const name = line.split(' ').slice(0, -4).join(' ').slice(0, -1);
      players.forEach((player) => {
        if (player.name == name) {
          player.pot[0] = bb;
        }
      });
    }

    if (line.includes('Board [')) {
      const board = line.replace('Board [', '').replace(']', '').split(' ');
      board.forEach((card) => {
        cards.push({ mark: card[1] as TrumpMark, num: card[0] as TrumpNum });
      });
    }

    if (line.includes('*** HOLE CARDS ***')) {
      nowStreet = 0;
      pots[0] = sb + bb;
    }
    if (line.includes('*** FLOP ***')) {
      nowStreet = 1;
      players.forEach((player) => {
        pots[1] += player.pot[0];
      });
    }
    if (line.includes('*** TURN ***')) {
      nowStreet = 2;
      pots[2] += pots[1];
      players.forEach((player) => {
        pots[2] += player.pot[1];
      });
    }
    if (line.includes('*** RIVER ***')) {
      nowStreet = 3;
      pots[3] += pots[2];
      players.forEach((player) => {
        pots[3] += player.pot[2];
      });
    }
    if (line.includes(': folds')) {
      const name = line.split(' ').slice(0, -1).join(' ').slice(0, -1);
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'fold',
            size: 0,
            street: nowStreet,
            order: actions[nowStreet].length,
          });
        }
      });
    }
    if (line.includes(': checks')) {
      const name = line.split(' ').slice(0, -1).join(' ').slice(0, -1);
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'check',
            size: 0,
            street: nowStreet,
            order: actions[nowStreet].length,
          });
        }
      });
    }

    if (line.includes(': calls') && !line.includes('and is all-in')) {
      const size = Number(line.split(' ').slice(-1)[0].replace('$', ''));
      const name = line.split(' ').slice(0, -2).join(' ').slice(0, -1);
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'call',
            size: size,
            street: nowStreet,
            order: actions[nowStreet].length,
          });
          player.pot[nowStreet] += size;
        }
      });
    }
    if (line.includes(': bets') && !line.includes('and is all-in')) {
      const size = Number(line.split(' ').slice(-1)[0].replace('$', ''));
      const name = line.split(' ').slice(0, -2).join(' ').slice(0, -1);
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'bet',
            size: size,
            street: nowStreet,
            order: actions[nowStreet].length,
          });
          player.pot[nowStreet] += size;
        }
      });
    }
    if (line.includes(': raises') && !line.includes('and is all-in')) {
      const size = Number(line.split(' ').slice(-1)[0].replace('$', ''));
      const name = line.split(' ').slice(0, -4).join(' ').slice(0, -1);
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'raise',
            size: size,
            street: nowStreet,
            order: actions[nowStreet].length,
          });
          player.pot[nowStreet] = size;
        }
      });
    }
    if (line.includes('and is all-in')) {
      const size = Number(
        line.replace(' and is all-in', '').split(' ').slice(-1)[0].replace('$', ''),
      );
      let name = '';
      if (line.includes(': raises')) {
        name = line.split(' ').slice(0, -7).join(' ').slice(0, -1);
      } else {
        name = line.split(' ').slice(0, -5).join(' ').slice(0, -1);
      }
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'allin',
            size: size,
            street: nowStreet,
            order: actions[nowStreet].length,
          });
          player.pot[nowStreet] = size;
        }
      });
    }
  });
  for (let i = 0; i < 5 - cards.length; i++) {
    cards.push({ mark: 'w', num: 'w' });
  }
  let xPot = 1;
  let flopPlayers: number[] = [0, 1, 2, 3, 4, 5];
  actions[0].forEach((action) => {
    if (action.move == 'raise') {
      xPot++;
    }
    if (action.move == 'fold') {
      flopPlayers = flopPlayers.filter((flopPlayer) => flopPlayer !== action.pos);
    }
  });

  return {
    action: actions,
    cards: cards,
    sb: sb,
    bb: bb,
    xPot: xPot,
    pots: pots,
    flopPlayers: flopPlayers,
  };
};
