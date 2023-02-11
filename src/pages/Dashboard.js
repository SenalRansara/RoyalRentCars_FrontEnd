import React from "react";
import Header from "../components/Header";


function Dashboard(props) {
return (
    <>
        <Header/>
    <div>
        <div className="component-body">
        <div className="dashboard">
            
            <div className="col-sm">
                <a href="/AllBook">
                    <button type="button" className="dbutton" id="btn-dash">
                    <i className="fa fa-book" id="fa fa-2x"></i>
                    <span className="lead align-top">Book Management</span>
                    </button>
                </a>
            </div>
            
            
        </div>
        </div>

    </div>
</>
);
}

export default Dashboard;