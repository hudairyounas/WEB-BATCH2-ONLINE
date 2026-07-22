import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Routing from "./routing/Routing";

const App = () => {
  return (
    <div>
      <Routing />

      {/* <Header /> */}
      {/* <h1 className=''>Hello i am a H1 Heading</h1> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
