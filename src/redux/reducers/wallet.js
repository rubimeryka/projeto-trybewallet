// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_INPUT } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};// definir estado inicial da carteira

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INPUT:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default walletReducer;
