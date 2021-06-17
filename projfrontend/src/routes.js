import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
// import AdminRoute from "./auth/helper/AdminRoutes";
// import PrivateRoute from "./helper/PrivateRoutes";
// import Demo from "./helper/Demo";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Footer from "./Components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        {/* <PrivateRoute path="/user" exact component={Demo} /> */}
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
