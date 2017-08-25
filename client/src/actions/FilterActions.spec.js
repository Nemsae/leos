import expect from 'expect';

import { set, setFilteredTodos, setFilter } from './FilterActions';
import * as types from '../constants';

describe('ACTIONS: FilterActions', () => {
  it('set action creator should return correct action object', () => {
    const filter = types.SHOW_ALL;
    const expected = {
      type: types.SET_VISIBILITY_FILTER,
      filter,
    };
    const actual = set(filter);

    expect(actual).toEqual(expected);
  });
  it('setFilter action creator should return correct action object', () => {
    const filter = types.SHOW_ALL;
    const expected = {
      type: types.SET_VISIBILITY_FILTER,
      filter,
    };
    const actual = setFilter(filter);

    expect(actual).toEqual(expected);
  });

  describe('setFilteredTodos()', () => {
    it('should return correct list for SHOW_ALL', () => {
      const todos = [
        {
          id: 0,
          text: 'testing0',
          isCompleted: false,
        },
        {
          id: 1,
          text: 'testing1',
          isCompleted: true,
        },
      ];
      const expected = todos;
      const actual = setFilteredTodos(types.SHOW_ALL, todos);
      expect(actual).toBe(expected);
    });
    it('should return correct list for SHOW_ACTIVE', () => {
      const todos = [
        {
          id: 0,
          text: 'testing0',
          isCompleted: false,
        },
        {
          id: 1,
          text: 'testing1',
          isCompleted: true,
        },
      ];
      const expected = [
        {
          id: 0,
          text: 'testing0',
          isCompleted: false,
        },
      ];
      const actual = setFilteredTodos(types.SHOW_ACTIVE, todos);

      expect(actual).toEqual(expected);
    });
    it('should return correct list for SHOW_COMPLETED', () => {
      const todos = [
        {
          id: 0,
          text: 'testing0',
          isCompleted: false,
        },
        {
          id: 1,
          text: 'testing1',
          isCompleted: true,
        },
      ];
      const expected = [
        {
          id: 1,
          text: 'testing1',
          isCompleted: true,
        },
      ];
      const actual = setFilteredTodos(types.SHOW_COMPLETED, todos);

      expect(actual).toEqual(expected);
    });
  });
});
