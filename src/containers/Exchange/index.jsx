import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExchange } from '../../modules/foreignExchange';
import ExchangeContainer from './Exchange';

const mapStateToProps = ({ foreignExchange }) => ({
    ...foreignExchange
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchExchange
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeContainer);
