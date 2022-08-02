import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses.reduce((total, expense) => total
    + parseFloat(expense.value)
    * parseFloat(expense.exchangeRates[expense.currency].ask), 0).toFixed(2);
    console.log(totalExpenses);

    return (
      <header>
        <div>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ totalExpenses }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
