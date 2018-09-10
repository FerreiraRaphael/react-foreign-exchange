import Constants from '../constants';

const { coins } = Constants;
/**
 * Actions
 */
const FETCH_EXCHANGE = 'foreignExchange/FETCH_EXCHANGE';
const FETCH_EXCHANGE_FINISH = 'foreignExchange/FETCH_EXCHANGE_FINISH';
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
        fetching: true,
        rates: initialState.rates
      };
    case FETCH_EXCHANGE_FINISH:
      return {
        ...state,
        fetching: false
      };
    case FETCH_EXCHANGE_SUCCESS:
      return {
        ...state,
        base: action.result.base,
        rates: {
          ...state.rates,
          ...action.result.rates
        }
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

const fetchingExchangeFinish = () => ({
  type: FETCH_EXCHANGE_FINISH
});

const fetchingExchangeSuccess = result => ({
  type: FETCH_EXCHANGE_SUCCESS,
  result
});

export const fetchExchange = base => async dispatch => {
  dispatch(fetchingExchange());
  const filtredCoins = coins.filter(coin => coin !== base);
  filtredCoins.forEach(async (coin, index) => {
    const response = await fetch(
      `https://data.fixer.io/latest?base=${coin}&symbols=${base}`
    );
    const result = await response.json();
    dispatch(
      fetchingExchangeSuccess({
        base,
        date: result.date,
        rates: { [coin]: result.rates[base] }
      })
    );

    if (index + 1 === filtredCoins.length) {
      dispatch(fetchingExchangeFinish());
    }
  });
};
