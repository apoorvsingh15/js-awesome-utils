import { describe, expect, test } from '@jest/globals';
import { removeDuplicates } from '../src';

describe('remove duplicates test', () => {
  test('[{a: 1, b: 2}, {a: 1, b: 2}] to be [{a:1,b:2}]', () => {
    expect(removeDuplicates([{ a: 1, b: 2 }, { a: 1, b: 2 }])).toStrictEqual([{ a: 1, b: 2 }]);
  });

  test('[1,1,1,1,2] to be [1,2]', () => {
    expect(removeDuplicates([1, 1, 1, 1, 2])).toStrictEqual([1, 2]);
  });

  test('[1,1,1,1,2, {a:1}, {a:1}, abc, abc] to be [1,2, {a:1}, abc]', () => {
    expect(removeDuplicates([1, 1, 1, 1, 2, { a: 1 }, { a: 1 }, 'abc', 'abc'])).toStrictEqual([1, 2, { a: 1 }, 'abc']);
  });

});
