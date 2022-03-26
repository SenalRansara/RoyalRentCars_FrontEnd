
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import RentalView from "../pages/rental/ViewRental";

function AppRoutes() {
    return (
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<RentalView />} />
      </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;