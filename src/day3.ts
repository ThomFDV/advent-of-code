import day3_input from './inputs/day3_input.js';
import defaultInput3 from './inputs/day3_input.js';

const getItemPriority = (item: string) => {
  if (item === item?.toLowerCase()) {
    return item.charCodeAt(0) - 96;
  }
  return item.charCodeAt(0) - 38;
}

const getItemPrioritiesSum = (input: string = day3_input) => {
  const matching = [];
  const inputLines = input.split('\n').map((line) => [
    line.slice(0, (line.length)/2),
    line.slice((line.length)/2)
  ]);
  for (const rucksack of inputLines) {
    console.log(rucksack);
    for (let i = 0; i < rucksack[0].length; i++) {
      const tempMatches = [];
      for (let j = 0; j < rucksack[0].length; j++) {
        if (rucksack[0][i] === rucksack[1][j]) {
          tempMatches.push(rucksack[0][i]);
          break;
        }
      }
      if (tempMatches.length > 0) {
        matching.push(tempMatches[0]);
        break;
      }
    }
  }
  console.log(matching);
  return matching.reduce((acc, curr) => {
    return acc + getItemPriority(curr);
  }, 0);
};

const getElvesBadge = (rucksack) => {
  let matchCount = 0;
  let match = '';
  for (let i = 0; i < rucksack[0].length; i++) {
    for (let j = 0; j < rucksack.length; j++) {
      if (rucksack[j].includes(rucksack[0][i])) matchCount++;
    }
    if (matchCount === rucksack.length) {
      match = rucksack[0][i];
      break;
    }
    matchCount = 0;
  }
  return match;
};

const getItemPrioritiesSum2 = (input: string = defaultInput3) => {
  const formatted = input.split('\n').filter((line) => line !== '');
  const elvesGroups = [];
  for (let i = 0; i < formatted.length; i+=3) {
    elvesGroups.push(formatted.slice(i, i+3).filter((line) => line !== ''));
  }

  return elvesGroups.reduce((acc, curr) => acc + (getItemPriority(getElvesBadge(curr)) || 0), 0);
}

export default {getItemPrioritiesSum, getItemPrioritiesSum2};
