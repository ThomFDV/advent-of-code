import day5_input from './inputs/day5_input.js';

const getTopStacks = (input: string = day5_input) => {
  const inputLines = input.split('\n');
  console.log(inputLines);
  const xAxisIndex = inputLines.findIndex((line) => line.includes('1'));
  const xAxis = inputLines[xAxisIndex].split('  ');
  console.log(xAxis);
  const coord = {};
  /*
  - trouver les lettres en itérant sur les chars et en vérifiant que la char est comprise dans les codes ASCII des lettres maj
  - vérifier que l'index de ce char est un multiple de 3

  - compter les [
  - savoir la ligne des [
  - pour ça
  col 1 = charAt(1)
  col 2 = charAt(5) +3
  col 3 = charAt(9) +6
  col 4 = charAt(13) +9
  */
  for (let i = 1; i < xAxis.length + 1; i++) {
    coord[`${i}`] = [];
    // console.log(`col ${i}`);
    // const col = i + (i-1) * 3;
    // console.log(`charAt ${col}`);
    // console.log(inputLines[i-1][col]);
    for (let j = 1; j < xAxis.length + 1; j++) {
      coord[`${i}`].push(inputLines[i-1][j + (j-1) * 3]);
      console.log(inputLines[i-1][j + (j-1) * 3]);
    }
    // let cols = 0;
    // let position = inputLines[i-1].indexOf("[");
    //
    // if (position !== -1) {
    //   coord[`${i}`] = [];
    // } else {
    //
    // }
    // while (position !== -1) {
    //   cols++;
    //   position = inputLines[i-1].indexOf("[", position + 1);
    // }
    // console.log(cols);
  }
  console.log('coord: ', coord);
  const instructions = inputLines.splice(xAxisIndex+2, inputLines.length);
  for (const instruction of instructions) {
    const splittedInstruction = instruction.split(' ');
    console.log(splittedInstruction);
    const size = +splittedInstruction[1];
    const fromCol = +splittedInstruction[3];
    const toCol = +splittedInstruction[5];
    for (let i = 1; i < size+1; i++) {
      console.log(coord[i]);
      console.log(coord[i][fromCol-1]);
      console.log(coord[i][toCol-1]);
      coord[i][toCol-1] = coord[i][fromCol-1];
      coord[i][fromCol-1] = ' ';
    }
  }
  console.log(coord);
  return '';
};

export default {getTopStacks};
