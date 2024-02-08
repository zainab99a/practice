// tasks.test.js

const {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
} = require('./tasks');

// Jest Tests
describe('Task 1', () => {
  test('Check voting eligibility', () => {
    expect(checkVotingEligibility(20)).toBe('You are eligible for voting');
    expect(checkVotingEligibility(15)).toBe('You are not eligible for voting');
  });
});

describe('Task 2', () => {
  test('Print numbers with while loop', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    printNumbersWithWhile();
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);
    expect(consoleSpy).toHaveBeenCalledWith(4);
    expect(consoleSpy).toHaveBeenCalledWith(5);
  });
});

describe('Task 3', () => {
  test('Print even numbers with for loop', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    printEvenNumbersWithFor();
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(4);
    expect(consoleSpy).toHaveBeenCalledWith(6);
    expect(consoleSpy).toHaveBeenCalledWith(8);
    expect(consoleSpy).toHaveBeenCalledWith(10);
  });
});

describe('Task 4', () => {
  test('Get day of the week', () => {
    expect(getDayOfWeek(1)).toBe('Sunday');
    expect(getDayOfWeek(2)).toBe('Monday');
    expect(getDayOfWeek(4)).toBe('Wednesday');
    expect(getDayOfWeek(7)).toBe('Saturday');
    expect(getDayOfWeek(9)).toBe('Invalid day');
  });
});

describe('Task 5', () => {
  test('Sum function', () => {
    expect(sum(5, 3)).toBe(8);
    expect(sum(-1, 7)).toBe(6);
  });
});

describe('Task 6', () => {
  test('Log each fruit to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    fruits.forEach((fruit) => {
      console.log(fruit);
    });
    fruits.forEach((fruit) => {
      expect(consoleSpy).toHaveBeenCalledWith(fruit);
    });
  });
});
