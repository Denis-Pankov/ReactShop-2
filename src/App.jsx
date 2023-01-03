import React from "react";
import { Header } from "./layout/Header";
import { Shop } from "./layout/Shop";
import { Footer } from "./layout/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Shop />
        <Footer />
      </>
    );
  }
}

export default App;
