
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import RentalView from "../pages/rental/ViewRental";
import AddRental from "../pages/rental/AddRental";

function AppRoutes() {
    return (
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<RentalView />} />
      <Route path="/AddRental" element={<AddRental />} />
      </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;