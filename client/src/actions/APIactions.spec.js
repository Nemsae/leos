import expect from 'expect';
import { fetchCurrentRate } from '../__mocks__/request';
import { requestRate, receiveRate } from './APIactions';

describe('fetchCurrentRate api call', () => {
  it('should return a message and rate', () => {
    const actual = fetchCurrentRate('EOSETH')
    const expected = { message: 'Current exchange rate of EOSETH is 0.004057', lastPrice: 0.004057 };
    expect(actual).toEqual(expected);
  });
});

describe('APIactions', () => {
  it('requestRate should create an action to update rate of given symbol', () => {
    const symbol = 'EOSETH';
    const expectedAction = {
      type: 'REQUEST_RATE',
      payload: symbol,
    };
    const actual = requestRate(symbol);
    expect(actual).toEqual(expectedAction);
  });

  it('receiveRate should create an action to update rate of given symbol', () => {
    const data = { message: 'Current exchange rate of EOSETH is 0.004057', lastPrice: 0.004057 };
    const expectedAction = {
      type: 'RECEIVE_RATE',
      payload: data.lastPrice,
    };
    const actual = receiveRate(data);
    expect(actual).toEqual(expectedAction);
  });
});
