import React from 'react';
import { Icon } from 'semantic-ui-react';

const About = () => (
  <div>
    <h1>About</h1>
    <p>Hello I am a student of software engineering at UFG.</p>
    <p>
      This project was developed for college subject, Economical Engineering for
      Software.
    </p>
    <p>
      See this project on{' '}
      <a
        href="https://github.com/FerreiraRaphael/react-foreign-exchange"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </p>
    <p>
      Developed with <Icon name="heart" /> by{' '}
      <a
        href="https://github.com/FerreiraRaphael/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Raphael Ferreira
      </a>
    </p>
  </div>
);

export default About;
