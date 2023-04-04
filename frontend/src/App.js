import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route exact path="/about" component={ About }/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
