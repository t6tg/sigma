import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Indexs, Error, Login } from "./sections/index";
function App() {
  return (
    <div>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/task" exact={true} component={Indexs} />
            <Route component={Error} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
