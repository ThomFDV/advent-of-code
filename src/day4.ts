import defaultInput4 from './inputs/day4_input.js';

const getAssigmentPairsCount = (input: string = defaultInput4) => {
  const lines = input.split('\n').map((line) => line.split(',').map((el) => el.split('-').map(Number)));
  return lines.reduce((acc, line) => {
    if ((line[0][0] >= line[1][0]) && (line[0][1] <= line[1][1])) return acc+=1;
    if ((line[0][0] <= line[1][0]) && (line[0][1] >= line[1][1])) return acc+=1;
    return acc;
  }, 0);
};

const getAssigmentPairsCount2 = (input: string = defaultInput4) => {
  const lines = input.split('\n').map((line) => line.split(',').map((el) => el.split('-').map(Number)));
  return lines.reduce((acc, line) => {
    if ((line[0][0] <= line[1][0]) && (line[0][1] >= line[1][0])) return acc+=1;
    if ((line[1][0] <= line[0][0]) && (line[1][1] >= line[0][0])) return acc+=1;
    return acc;
  }, 0);
};

export default {getAssigmentPairsCount, getAssigmentPairsCount2};
