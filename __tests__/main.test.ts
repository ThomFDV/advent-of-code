import day1 from '../src/day1.js';
import day2 from '../src/day2.js';
import day6 from '../src/day6.js';

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

  it('should get 7', () => {
    const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
    expect(day6.getFirstMarker(input)).toBe(7);
  });

  it('should get 5', () => {
    const input = `bvwbjplbgvbhsrlpgdmjqwftvncz`;
    expect(day6.getFirstMarker(input)).toBe(5);
  });

  it('should get 19', () => {
    const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
    expect(day6.getFirstMsgMarker(input)).toBe(19);
  });

  it('should get 19', () => {
    const input = `bvwbjplbgvbhsrlpgdmjqwftvncz`;
    expect(day6.getFirstMsgMarker(input)).toBe(23);
  });
});
