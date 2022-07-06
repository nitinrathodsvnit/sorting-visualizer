import React, { Component } from "react";
import NavBar from "./components/navbar";
import SortingVisualisation from "./components/sortingvisualizer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <SortingVisualisation></SortingVisualisation>
        </main>
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
