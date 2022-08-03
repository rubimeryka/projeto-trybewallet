import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table id="table">
          <thead data-testid="table-title">
            <tr>
              <th data-testid="description">Descrição</th>
              <th data-testid="tag-field">Tag</th>
              <th data-testid="method-field">Método de pagamento</th>
              <th data-testid="value-field">Valor</th>
              <th data-testid="currency-field">Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense) => {
              const {
                id, description, tag, method, value, currency, exchangeRates,
              } = expense;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>
                    {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td><button type="button">Editar/Excluir</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
