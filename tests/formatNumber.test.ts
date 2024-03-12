import { describe, expect, test } from '@jest/globals';
import { formatNumber } from '../src';

describe('format number test', () => {
  test('expects 10000 to be 10,000', () => {
    expect(formatNumber(10000)).toBe('10,000');
  });

  test('expects 100000 to be 100,000', () => {
    expect(formatNumber(100000)).toBe('100,000');
  });
});