import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentalView from "../pages/rental/ViewRental";
import AddRental from "../pages/rental/AddRental";


function AppRoutes() {
    return (
      <Router>
        <Header/>
      <Switch>
        <Route path="/" exact component={RentalView} />
        <Route path="/AddRental" exact component={AddRental} />
      </Switch>
        <Footer/>
      </Router>

    );
}

export default AppRoutes;