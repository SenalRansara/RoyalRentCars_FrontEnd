import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//Senal
import BookView from "../pages/book/ViewBook";
import AddBook from "../pages/book/AddBook";
import Dashboard from "../pages/Dashboard";
import Login from "../components/Login";
import Signup from "../components/signup";


function AppRoutes() {
    return (
      <Router>
        {/* <Header/> */}
      <Switch>
        {/* Senal */}
        <Route path="/" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Dashboard" exact component={Dashboard}/>
        <Route path="/AllBook" exact component={BookView} />
        <Route path="/AddBook" exact component={AddBook} />

      
      </Switch>
        <Footer/>
      </Router>

    );
}

export default AppRoutes;