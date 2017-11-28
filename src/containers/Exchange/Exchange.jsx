import React from 'react';
import PropTypes from 'prop-types';

class ExchangeContainer extends React.Component {
  async componentDidMount() {
    await this.props.fetchExchange();
  }
  render() {
    return <div>Home Container loaded</div>;
  }
}

ExchangeContainer.defaultProps = {};

ExchangeContainer.propTypes = {
  fetchExchange: PropTypes.func.isRequired
};

export default ExchangeContainer;
