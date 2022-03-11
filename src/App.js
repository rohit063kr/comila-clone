import { Fragment } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = function () {
  return (
    <Fragment>
      <Header />
      <About />
      <Feature />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
