// Coloque aqui suas actions
export const LOGIN_INPUT = 'LOGIN_INPUT';
export const WALLET_INPUT = 'WALLET_INPUT';

export const loginAction = (email) => ({
  type: LOGIN_INPUT,
  email,
});

// REQUISIÇÃO
export const getCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((data) => dispatch({
    type: WALLET_INPUT,
    currencies: Object.keys(data).filter((key) => key !== 'USDT') }));
