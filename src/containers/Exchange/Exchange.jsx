import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flag } from 'semantic-ui-react';

import Constants from '../../constants';
import { transformToFlag } from '../../lib/helpers';
import ForeignExchangeList from '../../components/ForeignExchangeList';
import { ForeignExchangeItemPropTypes } from '../../components/ForeignExchangeItem';

class ExchangeContainer extends React.Component {
  async componentDidMount() {
    await this.props.fetchExchange(this.props.base);
  }

  async componentWillReceiveProps({ base }) {
    if (this.props.base !== base) this.props.fetchExchange(base);
  }

  render() {
    const { items, fetching, base } = this.props;
    return (
      <div>
        <Button
          basic
          onClick={() => this.props.fetchExchange(this.props.base)}
          content="Update"
          color="black"
          icon="download"
          style={{ borderRadius: 0 }}
          label={{
            basic: true,
            color: "black",
            pointing: 'left',
            style: { borderRadius: 0 },
            content: <Flag name={transformToFlag(this.props.base)} />
          }}
          loading={fetching}
        />
        <ForeignExchangeList items={items} fetching={fetching} base={base} />
      </div>
    );
  }
}

ExchangeContainer.defaultProps = {
  fetching: false,
  base: 'BRL'
};

ExchangeContainer.propTypes = {
  fetchExchange: PropTypes.func.isRequired,
  fetching: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape(ForeignExchangeItemPropTypes))
    .isRequired,
  base: PropTypes.oneOf(Constants.coins)
};

export default ExchangeContainer;
