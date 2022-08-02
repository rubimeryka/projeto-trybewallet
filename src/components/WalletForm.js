import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies, actionSaveExpense } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currencyInput: 'USD',
      method: 'Dinheiro',
      tag: 'Alomentação',
    };
  }

  componentDidMount() {
    const { getArrayCurrencies } = this.props;
    getArrayCurrencies();
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = () => {
    const { saveExpense } = this.props;
    saveExpense(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { value, description, currencyInput, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            data-testid="value-input"
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencyInput">
          Moeda
          <select
            data-testid="currency-input"
            id="currencyInput"
            name="currencyInput"
            value={ currencyInput }
            onChange={ this.handleChange }
          >
            {
              currencies.map((currency) => (
                <option value={ currency } key={ currency }>{currency}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            data-testid="method-input"
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          id="add-expense"
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getArrayCurrencies: () => dispatch(getCurrencies()),
  saveExpense: (expense) => dispatch(actionSaveExpense(expense)),
});

WalletForm.propTypes = {
  getArrayCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
