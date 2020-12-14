import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyled";
import { Nav } from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import { Contacts } from "./pages/Contacts";
import { Videos } from "./pages/Videos";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/videos" component={Videos} />
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
