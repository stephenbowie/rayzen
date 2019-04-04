import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import TransactionList from "../src/components/TransactionList";
import { Header } from "../src/components/custombootstrapcomponents/Header";
import { Footer } from "../src/components/custombootstrapcomponents/Footer";
import About from "./components/About";
import TransactionUpload from "./components/TransactionUpload";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </header>
        <Header />
        <Router>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/transactionlist" component={TransactionList} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/transactionupload"
              component={TransactionUpload}
            />
          </Container>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
