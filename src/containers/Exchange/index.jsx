import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExchange } from '../../modules/foreignExchange';
import ExchangeContainer from './Exchange';

const mapStateToProps = ({ foreignExchange: { rates, fetching } }) => {
  const items = Object.keys(rates).map(rate => ({
    country: rate,
    value: rates[rate]
  }));
  return { items, fetching };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchExchange
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeContainer);
