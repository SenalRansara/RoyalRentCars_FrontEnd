import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//Senal
import RentalView from "../pages/rental/ViewRental";
import AddRental from "../pages/rental/AddRental";

// Chamoth
import ViewEmployee from "../pages/employee/ViewEmployee";
import AddEmployee from "../pages/employee/AddEmployee";


//Ravindu
import ReservationView from "../pages/reservation/ViewReservation";
import AddReservation from "../pages/reservation/AddReservation";


// Kaveen

import AddVehicle from "../pages/vehicle/AddVehicle";
import VehicleView from "../pages/vehicle/ViewVehicle";

function AppRoutes() {
    return (
      <Router>
        <Header/>
      <Switch>
        {/* Senal */}
        <Route path="/AllRental" exact component={RentalView} />
        <Route path="/AddRental" exact component={AddRental} />

        {/* Chamoth */}
        <Route path="/AllEmployee" exact component={ViewEmployee} />
        <Route path="/AddEmployee" exact component={AddEmployee} />


        {/* Ravindu */}
        <Route path="/AllReservation" exact component={ReservationView} />
        <Route path="/AddReservation" exact component={AddReservation} />



        {/* Kaveen */}
      
        <Route path="/AllVehicle" exact component={VehicleView} />
        <Route path="/AddVehicle" exact component={AddVehicle} />
      
      </Switch>
        <Footer/>
      </Router>

    );
}

export default AppRoutes;