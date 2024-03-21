import { describe, expect, test } from '@jest/globals';
import { isStrongPassword } from '../src';

describe('expect a strong password', () => {
  test('expects isStrongPassw0rD to be false', () => {
    expect(isStrongPassword('isStrongPassw0rD')).toBe(false);
  });

  test('expects StrongP@ssw0rd to be true', () => {
    expect(isStrongPassword('StrongP@ssw0rd')).toBe(true);
  });
});