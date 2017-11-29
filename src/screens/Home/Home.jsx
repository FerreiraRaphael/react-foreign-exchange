import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import ExchangeContainer from '../../containers/Exchange';
import { transformToCoin } from '../../lib/helpers';

const Home = ({ match }) => (
  <div>
    <Header as="h3">
      Foreign Exchange rates in {transformToCoin(match.params.base)}
    </Header>
    <ExchangeContainer base={match.params.base || 'BRL'} />
  </div>
);

Home.propTypes = {
  match: PropTypes.object.isRequired // eslint-disable-line
};

export default withRouter(Home);
