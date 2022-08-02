// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_INPUT, WALLET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseId: 0,
};// definir estado inicial da carteira

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INPUT:
    return {
      ...state,
      currencies: action.currencies,
    };
  case WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenseId,
        ...action.expense,
        exchangeRates: action.exchangeRates }],
      expenseId: state.expenseId + 1,
    };
  default:
    return state;
  }
};

export default walletReducer;
