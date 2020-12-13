import React from "react";
import GlobalStyles from "./components/GlobalStyled";
import { Nav } from "./components/Nav";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
