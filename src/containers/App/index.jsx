import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

const mapStateToProps = ({ foreignExchange: { base } }) => ({
  base
});

export default withRouter(connect(mapStateToProps)(App));
