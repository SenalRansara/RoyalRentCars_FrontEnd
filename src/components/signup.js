import { React, useState } from "react";

//import moment from 'moment';

import { signup } from "../../services/signupService";

function AddReservation() {

    const [userName, setUserName] = useState();
    const [password , setPassword ] = useState("");
    const [email, setEmail ] = useState("");
    
    
    //const [createdAt , setCreatedAt ] = useState("");

    function sendData(e){
        e.preventDefault()
        const newSignUp = {
            
            userName,
            password,
            email,
            
        }
        signup(newSignUp).then((res)=>{
            if(res.ok){
                alert("User Added Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
        <div className="body-reservation">
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">

                        <div className="row">
                          <h3 className="header-reservation">Sign Up</h3>
                        </div>

                                <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            <div class="form-row">
                            <div class="form-group-input-long">
                                    <label for="inputUN">User Name</label>
                                    <input type="text" class="form-control" id="inputUN" placeholder="Ex:-Cus001"
                                    onChange={(e) => {setUserName(e.target.value)}}/>
                                </div>
                                <div class="form-group-input-long">
                                    <label for="inputFullName">Password</label>
                                    <input type="text" class="form-control" id="inputFullName" placeholder="Ex:-Kasun Perera"
                                    onChange={(e) => {setCustomerName(e.target.value)}}/>
                                </div>
                                <div class="form-group-input-long">
                                    <label for="email">Email</label>
                                    <input type="text" class="form-control" id="email" placeholder="user123@gmail.com"
                                    onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>
                              
                                </div>

                                <div className="row mb-3">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok btn-success">
                                                Save
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset btn-warning">
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default signup;
