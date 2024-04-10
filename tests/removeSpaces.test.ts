import { describe, expect, test } from '@jest/globals';
import { removeSpaces } from '../src';

describe('remove spaces test', () => {
  test('this is test tobe thisistest', () => {
    expect(removeSpaces('this is test')).toBe('thisistest');
  });

  test('this is test 1 tobe thisistest1', () => {
    expect(removeSpaces('this is test 1')).toBe('thisistest1');
  });

});