import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../../screens/Home";
import About from "../../screens/About";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;