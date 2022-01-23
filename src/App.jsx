import { useEffect } from "react";
import Index from "./component/pages/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Tracking from "./component/pages/Tracking";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import CreateBooking from "./component/Dashboards/users/Create-Booking";
import Dashboard from "./component/Dashboards/users/Dashboard";
import Admin from "./component/Dashboards/Admin/Admin";
import Users from "./component/Dashboards/Admin/Users";
import Message from "./component/Dashboards/Admin/Message";
import Chat from "./component/Dashboards/users/Chat";
import EditBooking from "./component/Dashboards/Admin/EditBooking";

import ProtectedUsersRoutes from "./component/Auth/ProtectedUsersRoutes";
import ProtectedAdminRoutes from "./component/Auth/ProtectedAdminRoutes";
import Contact from "./component/pages/Contact";

function App() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <Router>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/tc" component={Index} />

            {/*user dashboard route */}
            <ProtectedUsersRoutes
              path="/user/dashboard/"
              exact
              component={Dashboard}
            />
            <ProtectedUsersRoutes
              path="/user/dashboard/create-booking"
              component={CreateBooking}
            />
            <ProtectedUsersRoutes
              path="/admin/dashboard/chat/:receiver"
              exact
              component={Chat}
            />

            {/*admin dashboard route */}
            <ProtectedAdminRoutes
              path="/admin/dashboard"
              exact
              component={Admin}
            />
            <ProtectedAdminRoutes
              path="/admin/dashboard/users"
              exact
              component={Users}
            />
            <ProtectedAdminRoutes
              path="/admin/dashboard/update-location/:tracking"
              exact
              component={EditBooking}
            />
            <ProtectedAdminRoutes
              path="/admin/dashboard/message/:receiver"
              exact
              component={Message}
            />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
