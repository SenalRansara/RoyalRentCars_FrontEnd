import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentalView from "../pages/rental/ViewRental";
import AddRental from "../pages/rental/AddRental";
import ReservationView from "../pages/reservation/ViewReservation";


function AppRoutes() {
    return (
      <Router>
        <Header/>
      <Switch>
        <Route path="/AllRental" exact component={RentalView} />
        <Route path="/AddRental" exact component={AddRental} />
        <Route path="/AllReservation" exact component={ReservationView} />
      </Switch>
        <Footer/>
      </Router>

    );
}

export default AppRoutes;