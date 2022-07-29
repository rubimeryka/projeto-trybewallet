// Coloque aqui suas actions
export const LOGIN_INPUT = 'LOGIN_INPUT';
export const WALLET_INPUT = 'WALLET_INPUT';

export const loginAction = (email) => ({
  type: LOGIN_INPUT,
  email,
});

export const walletAction = (info) => ({
  type: WALLET_INPUT,
  info,
});
