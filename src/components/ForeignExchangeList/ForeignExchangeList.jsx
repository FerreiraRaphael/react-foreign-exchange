import React from 'react';
import PropTypes from 'prop-types';
import { List, Segment, Dimmer, Loader } from 'semantic-ui-react';

import ForeignExchangeItem, {
  ForeignExchangeItemPropTypes
} from '../ForeignExchangeItem';
import FakeParagraph from '../FakeParagraph';
import Constants from '../../constants';

const FakeWireFrame = () => (
  <div>
    <FakeParagraph />
    <FakeParagraph />
  </div>
);

const ForeignExchangeList = ({ items, fetching, base }) => (
  <Dimmer.Dimmable
    as={Segment}
    blurring
    dimmed={fetching}
    style={{ minHeight: 170 }}
  >
    <Dimmer active={fetching}>
      <Loader>Loading</Loader>
    </Dimmer>
    {fetching ? (
      <FakeWireFrame />
    ) : (
      <List divided relaxed style={{ margin: 0 }}>
        {items.map(item => (
          <ForeignExchangeItem {...item} key={item.country} base={base} />
        ))}
      </List>
    )}
  </Dimmer.Dimmable>
);

ForeignExchangeList.defaultProps = {
  fetching: false,
  base: 'BRL'
};

ForeignExchangeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ForeignExchangeItemPropTypes))
    .isRequired,
  fetching: PropTypes.bool,
  base: PropTypes.oneOf(Constants.coins)
};

export default ForeignExchangeList;
