import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Header, Image } from 'semantic-ui-react';
import logo from '../../logo.svg';

const styles = {
  logo: {
    margin: '10px auto'
  },
  header: {
    margin: '25px',
    textAlign: 'center'
  },
  link: {
    margin: '10px',
    padding: '5px',
    color: 'black',
    transition: 'border .25s ease'
  },
  linkAcvtive: {
    borderTop: '2px solid black',
    borderBottom: '2px solid black'
  },
  headerLink: {
    color: 'black',
    textDecoration: 'underline'
  }
};

const Navbar = ({ base }) => (
  <header style={styles.header}>
    <Header as="h1">React Foreign Exchange</Header>
    <Header as="h3">
      A Foreign Exchange web app using React and the{' '}
      <a
        style={styles.headerLink}
        href="http://fixer.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fixer.io API
      </a>
    </Header>
    <Image src={logo} style={styles.logo} size="small" />
    <NavLink
      to={`/coin/${base}`}
      style={styles.link}
      activeStyle={styles.linkAcvtive}
      isActive={(match, location) => location.pathname !== '/about'}
    >
      Home
    </NavLink>
    <NavLink to="/about" style={styles.link} activeStyle={styles.linkAcvtive}>
      About
    </NavLink>
  </header>
);

Navbar.propTypes = {
  base: PropTypes.string.isRequired
};

export default Navbar;
