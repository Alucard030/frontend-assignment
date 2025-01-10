import { describe, it, expect } from 'vitest';
import { getDataForPage } from './tableUtils';

describe('getDataForPage', () => {
  it('returns a full page of data when available', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    const result = getDataForPage(data, 1, 2);
    expect(result).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });

  it('fills the page with filler rows when data is insufficient', () => {
    const data = [{ id: 1, name: 'Alice' }];
    const result = getDataForPage(data, 1, 3);
    expect(result).toEqual([
      { id: 1, name: 'Alice' },
      { id: '', name: '', isFiller: true },
      { id: '', name: '', isFiller: true },
    ]);
  });

  it('returns an empty array when data is empty', () => {
    const data = [];
    const result = getDataForPage(data, 1, 3);
    expect(result).toEqual([]);
  });

  it('returns an empty array for invalid page number or page size', () => {
    const data = [{ id: 1, name: 'Alice' }];
    expect(getDataForPage(data, 0, 3)).toEqual([]);
    expect(getDataForPage(data, 1, 0)).toEqual([]);
  });

  it('handles scenarios where the last page has a partial page of data', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    const result = getDataForPage(data, 2, 2);
    expect(result).toEqual([
      { id: 3, name: 'Charlie' },
      { id: '', name: '', isFiller: true },
    ]);
  });
});
