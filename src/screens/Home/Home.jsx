import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ExchangeContainer from '../../containers/Exchange';
import { transformToCoin } from '../../lib/helpers';

const Home = ({ match }) => (
  <div>
    <h3>
      Foreign Exchange rates in {transformToCoin(match.params.base)}
    </h3>
    <ExchangeContainer base={match.params.base || 'BRL'} />
  </div>
);

Home.propTypes = {
  match: PropTypes.object.isRequired // eslint-disable-line
};

export default withRouter(Home);
