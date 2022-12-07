import day5_input from './inputs/day5_input.js';

const create2DimArray = (inputLines, xAxisIndex) => {
  const xAxis = inputLines[xAxisIndex].split('  ');
  const coord = [];
  for (let i = 0; i < xAxis.length; i++) {
    coord.push([]);
  }
  for (let i = 1; i < xAxis.length+1; i++) {
    const col = i + (i-1) * 3;
    for (let j = 0; j < xAxisIndex; j++) {
      coord[i-1].push(inputLines[j][col]);
    }
  }
  return coord;
}

const applyInstructions = (coord, instructions, ordered = false) => {
  for (const instruction of instructions) {
    const splittedInstruction = instruction.split(' ');
    const size = +splittedInstruction[1];
    const fromCol = +splittedInstruction[3];
    const toCol = +splittedInstruction[5];
    const tempPush = [];
    for (let i = 0; i < size; i++) {
      coord[toCol-1] = coord[toCol-1].filter((el) => el !== ' ');
      coord[fromCol-1] = coord[fromCol-1].filter((el) => el !== ' ');
      if (!ordered) {
        coord[toCol-1].unshift(coord[fromCol-1][0]);
        coord[fromCol-1][0] = ' ';
      } else {
        tempPush.push(coord[fromCol-1][0]);
        coord[fromCol-1][0] = ' ';
      }
    }
    coord[toCol-1].unshift(...tempPush);
  }
  let res = '';
  for (let i = 0; i < coord.length; i++) {
    coord[i] = coord[i].filter((el) => el !== ' ');
    res += coord[i][0];
  }
  return res;
}

const getTopStacks = (input: string = day5_input) => {
  const inputLines = input.split('\n');
  const xAxisIndex = inputLines.findIndex((line) => line.includes('1'));
  const coord = create2DimArray(inputLines, xAxisIndex);
  const instructions = inputLines.splice(xAxisIndex+2, inputLines.length);
  return applyInstructions(coord, instructions);
};

const getOrderedTopStacks = (input: string = day5_input) => {
  const inputLines = input.split('\n');
  const xAxisIndex = inputLines.findIndex((line) => line.includes('1'));
  const coord = create2DimArray(inputLines, xAxisIndex);
  const instructions = inputLines.splice(xAxisIndex+2, inputLines.length);
  return applyInstructions(coord, instructions, true);
};

export default {getTopStacks, getOrderedTopStacks};
