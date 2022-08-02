// Coloque aqui suas actions
export const LOGIN_INPUT = 'LOGIN_INPUT';
export const WALLET_INPUT = 'WALLET_INPUT';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';

export const loginAction = (email) => ({
  type: LOGIN_INPUT,
  email,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = Object.keys(data).filter((key) => key !== 'USDT');
  dispatch({ type: WALLET_INPUT, currencies });
};

export const actionSaveExpense = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch({ type: WALLET_EXPENSES, expense, data });
};
