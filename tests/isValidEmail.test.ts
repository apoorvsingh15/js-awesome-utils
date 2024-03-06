import { describe, expect, test } from '@jest/globals';
import { isValidEmail } from '../src';

describe('valid email test', () => {
  test('expects example@example.com to be true', () => {
    expect(isValidEmail('example@example.com')).toBe(true);
  });

  test('expects example.com to be false', () => {
    expect(isValidEmail('example.com')).toBe(false);
  });

  test('expects james.carter@gmail.com to be true', () => {
    expect(isValidEmail('james.carter@gmail.com')).toBe(true);
  });

  test('expects @gmail.com to be false', () => {
    expect(isValidEmail('@gmail.com')).toBe(false);
  });
});
