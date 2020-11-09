import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles/Login.css";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
