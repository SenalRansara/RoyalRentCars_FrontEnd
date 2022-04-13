import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RentalView from "../pages/rental/ViewRental";
import AddRental from "../pages/rental/AddRental";
import Footer from "../components/Footer";

function AppRoutes() {
    return (
      <Router>
      <Switch>
        <Route path="/" exact component={RentalView} />
        <Route path="/AddRental" exact component={AddRental} />
      </Switch>
      <Footer/>
      </Router>

    );
}

export default AppRoutes;