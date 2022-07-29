import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
    };
  }

  // valida login
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const minLength = 6;
      const { email, password } = this.state;

      if (password.length >= minLength
      && regex.test(email)) {
        this.setState({
          isBtnDisabled: false,
        });
      } else {
        this.setState({
          isBtnDisabled: true,
        });
      }
    });
  };

  // entra em 'carteira' ao enviar login e senha
  handleButton = () => {
    const { email } = this.state;
    const { history, userEmail } = this.props;
    userEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isBtnDisabled } = this.state;
    return (
      <section className="login-section">
        <h2>Trybewallet</h2>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={ email }
            name="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            value={ password }
            name="password"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ isBtnDisabled }
          onClick={ this.handleButton }
        >
          Entrar
        </button>
      </section>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
