import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "./components/Info";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/about/:id" component={Info} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
