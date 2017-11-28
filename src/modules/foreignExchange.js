import { coins } from '../constants';

/**
 * Actions
 */
const FETCH_EXCHANGE = 'foreignExchange/FETCH_EXCHANGE';
const FETCH_EXCHANGE_SUCCESS = 'foreignExchange/FETCH_EXCHANGE_SUCCESS';

const initialState = {
  fetching: false,
  base: 'BRL',
  date: '',
  rates: {}
};

/**
 * Reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE:
      return {
        ...state,
        fetching: true
      };
    case FETCH_EXCHANGE_SUCCESS:
      return {
        ...state,
        fetching: false,
        ...action.result
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */

const fetchingExchange = () => ({
  type: FETCH_EXCHANGE
});

const fetchingExchangeSuccess = result => ({
  type: FETCH_EXCHANGE_SUCCESS,
  result
});

export const fetchExchange = base => (dispatch, getState) =>
  new Promise(async resolve => {
    dispatch(fetchingExchange());
    const exchangeBase = base || getState().foreignExchange.base;
    const symbols = coins.filter(coin => coin !== exchangeBase).join();
    const response = await fetch(
      `https://api.fixer.io/latest?base=${exchangeBase}&symbols=${symbols}`
    );
    const result = await response.json();
    dispatch(fetchingExchangeSuccess(result));
    resolve(response);
  });
