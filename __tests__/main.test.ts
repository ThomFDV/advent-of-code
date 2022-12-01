import day1 from '../src/day1.js';

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
});
