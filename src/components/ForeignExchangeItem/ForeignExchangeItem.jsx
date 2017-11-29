import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, Flag } from 'semantic-ui-react';

import Constants from '../../constants';
import {
  transformToFlag,
  transformToCoin,
  transformToMoneySimbol
} from '../../lib/helpers';

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    textAlign: 'left'
  },
  headerLink: {
    textDecoration: 'underline'
  }
};

const ForeignExchangeItem = ({ country, value, base }) => (
  <List.Item style={styles.item}>
    <Flag name={transformToFlag(country)} />
    <List.Content style={styles.content}>
      <List.Header color="black" as={Link} to={`/coin/${country}`} style={styles.headerLink}>
        {transformToCoin(country)}
      </List.Header>
      <List.Description>
        {`${transformToMoneySimbol(base)} ${value}`}
      </List.Description>
    </List.Content>
  </List.Item>
);

export const ForeignExchangeItemPropTypes = {
  country: PropTypes.oneOf(Constants.coins).isRequired,
  value: PropTypes.number.isRequired
};

ForeignExchangeItem.propTypes = {
  ...ForeignExchangeItemPropTypes,
  base: PropTypes.oneOf(Constants.coins).isRequired
};

export default ForeignExchangeItem;
