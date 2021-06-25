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
import "./routes.css";
import AdminDashboard from "./Pages/AdminDashboard";
import PrivateRoutes from "./helper/PrivateRoutes";
import UserDashboard from "./Pages/UserDashboard";
import AdminRoutes from "./helper/AdminRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="bodyWrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <PrivateRoutes
            path="/user/dashboard"
            exact
            component={UserDashboard}
          />
          <AdminRoutes
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
