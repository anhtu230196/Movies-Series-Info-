import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/home/Landing";
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Movie from "./components/home/Movie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={Movie} />
      </Router>
    </Provider>
  );
}

export default App;
