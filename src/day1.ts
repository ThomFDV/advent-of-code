import defaultInput1 from './inputs/day1_input.js';

const getHigherCaloriesCarryingElf = (input: string = defaultInput1) => {
  const elvesLines = input.split('\n\n').map((line) => line.split('\n'));
  const elvesTotalCal = elvesLines.map((elfLine) => elfLine.reduce((acc, curr) => acc + parseInt(curr), 0));
  return elvesTotalCal.reduce((acc, curr) => curr > acc ? curr : acc, 0);
};

const getTop3Cal = (input: string = defaultInput1) => {
  const elvesLines = input.split('\n\n').map((line) => line.split('\n'));
  const elvesTotalCal = elvesLines.map((elfLine) => elfLine.reduce((acc, curr) => acc + parseInt(curr), 0));
  const sortedElvesTotalCal = elvesTotalCal.sort((a, b) => b-a);
  return sortedElvesTotalCal.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
};

export default {getHigherCaloriesCarryingElf, getTop3Cal};
