import React, { useState } from "react";
import Navbar from "./componant/Navbar";
import Hero from "./componant/Hero";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div data-bs-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
    </div>
  );
};

export default App;
