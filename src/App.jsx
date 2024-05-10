import React from "react";
import Home from "./app/screens/Home";
import Header from "./app/components/Header";
import Projects from "./app/components/Projects";
import Card from "./app/components/Card";
import Technologies from "./app/components/Technologies";
import Footer from "./app/components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Card />
      <Technologies />
      <Footer />
    </div>
  );
};

export default App;
