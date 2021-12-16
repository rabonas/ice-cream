import React from "react";
import {
   BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home'
import AddIceCream from './pages/AddIceCream';
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
      <div>
      <Header />
        <Switch>

          <Route path="/addIceCream">
            <AddIceCream />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>
      </Router>)

}

export default App;
