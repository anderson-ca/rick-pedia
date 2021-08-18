import "./App.css";
import React from "react";
import About from "./components/About";
import Rickedex from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/dashboard">
          <Rickedex />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
