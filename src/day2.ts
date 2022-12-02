import defaultInput2 from './inputs/day2_input.js';

const choicesScores = {X: 1, Y: 2, Z: 3};
const [win, draw, loss] = [6, 3, 0];
const lineResult = {
  'A X': draw,
  'B Y': draw,
  'C Z': draw,
  'A Y': win,
  'B Z': win,
  'C X': win,
  'A Z': loss,
  'B X': loss,
  'C Y': loss
};

const lineResult2 = {
  'A X': loss + choicesScores.Z,
  'B Y': draw + choicesScores.Y,
  'C Z': win + choicesScores.X,
  'A Y': draw + choicesScores.X,
  'B Z': win + choicesScores.Z,
  'C X': loss + choicesScores.Y,
  'A Z': win + choicesScores.Y,
  'B X': loss + choicesScores.X,
  'C Y': draw + choicesScores.Z
};

const getLineScore = (line: string) => {
  return lineResult[line] + choicesScores[line[2]];
};

const getRockPaperScissorsScore = (input: string = defaultInput2) => {
  return input.split('\n').map((line) => getLineScore(line.trim())).reduce((acc, curr) => acc + curr, 0);
};

const getRockPaperScissorsScore2 = (input: string = defaultInput2) => {
  return input.split('\n').map((line) => lineResult2[line.trim()]).reduce((acc, curr) => acc + curr, 0);
};

export default {getRockPaperScissorsScore, getRockPaperScissorsScore2};
