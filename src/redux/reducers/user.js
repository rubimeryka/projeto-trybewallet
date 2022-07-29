// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_INPUT } from '../actions';

const INITIAL_STATE = {
  email: '',
}; // definir estado inicial de usuário - input de email e password

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_INPUT:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
