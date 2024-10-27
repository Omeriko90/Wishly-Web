import { Redirect, Route, Switch } from "react-router-dom";
import Home from "src/components/Home";
import Login from "src/components/Login";
import Signup from "src/components/SignUp";
import Admin from "src/routes/Admin";
import Public from "src/routes/Public";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/public/*" exact component={Public} />
      <Route path="/admin/*" exact component={Admin} />
      <Route path="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default AppRoutes;
