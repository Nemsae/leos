import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import { requestRate, receiveRate, fetchCurrentRate } from './APIactions';
import * as types from '../constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('API async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates REQUEST_RATE and RECEIVE_RATE', () => {
    const symbol = 'EOSETH';
    nock('http://localhost:3001')
      .get(`/api/leos/exchangeRate?symbol=${symbol}`)
      .reply(200, { message: 'Current exchange rate of EOSETH is 0.004057', lastPrice: 0.004057 });

    const expectedActions = [
      {
        type: types.REQUEST_RATE,
        payload: symbol,
      },
      {
        type: types.RECEIVE_RATE,
        payload: 0.004057,
      },
    ];

    const store = mockStore({ symbol: '', rate: 0 });

    return store.dispatch(fetchCurrentRate('EOSETH'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('API actions', () => {
  it('requestRate should create an action to update rate of given symbol', () => {
    const symbol = 'EOSETH';
    const expectedAction = {
      type: 'REQUEST_RATE',
      payload: symbol,
    };
    const actual = requestRate(symbol);
    expect(actual).toEqual(expectedAction);
  });

  it('receiveRate should create an action to update the exchange rate', () => {
    const data = { message: 'Current exchange rate of EOSETH is 0.004057', lastPrice: 0.004057 };
    const expectedAction = {
      type: 'RECEIVE_RATE',
      payload: data.lastPrice,
    };
    const actual = receiveRate(data);
    expect(actual).toEqual(expectedAction);
  });
});
