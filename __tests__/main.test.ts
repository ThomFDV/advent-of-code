import day1 from '../src/day1.js';
import day2 from '../src/day2.js';
import day5 from '../src/day5.js';

describe('day1 challenge tests', () => {
  it('should get 24000', () => {
    const input = `1000
      2000
      3000

      4000

      5000
      6000

      7000
      8000
      9000

      10000`;
    expect(day1.getHigherCaloriesCarryingElf(input)).toBe(24000);
  });

  it('should get 45000', () => {
    const input = `1000
      2000
      3000

      4000

      5000
      6000

      7000
      8000
      9000

      10000`;
    expect(day1.getTop3Cal(input)).toBe(45000);
  });

  it('should get 15', () => {
    const input = `A Y
    B X
    C Z`;
    expect(day2.getRockPaperScissorsScore(input)).toBe(15);
  });

  it('should get 12', () => {
    const input = `A Y
    B X
    C Z`;
    expect(day2.getRockPaperScissorsScore2(input)).toBe(12);
  });

  it('should get CMZ', () => {
    const input = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    expect(day5.getTopStacks(input)).toBe('CMZ');
  });

  it('should get MCD', () => {
    const input = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    expect(day5.getOrderedTopStacks(input)).toBe('MCD');
  });
});
