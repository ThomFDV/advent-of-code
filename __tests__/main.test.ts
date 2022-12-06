import day1 from '../src/day1.js';
import day2 from '../src/day2.js';
import day4 from '../src/day4.js';

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

  it('should get 2', () => {
    const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
    expect(day4.getAssigmentPairsCount(input)).toBe(2);
  });

  it('should get 4', () => {
    const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
    expect(day4.getAssigmentPairsCount2(input)).toBe(4);
  });
});
