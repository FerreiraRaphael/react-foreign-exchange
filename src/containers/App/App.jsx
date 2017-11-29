import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from '../../components/Navbar';
import Home from '../../screens/Home';
import About from '../../screens/About';

const App = ({ base }) => (
  <Container>
    <Navbar base={base} />

    <main>
      <Route exact path="/" render={() => <Redirect to="/coin/BRL" />} />
      <Route path="/coin/:base" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </Container>
);

App.propTypes = {
  base: PropTypes.string.isRequired
};

export default App;
