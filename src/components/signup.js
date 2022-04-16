import { React, useState } from "react";
// import Header from "./Header";

import Logo from '../assets/Logo.png';
//import moment from 'moment';

//import { signup } from "../../services/signupService";

function Signup() {

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
        Signup(newSignUp).then((res)=>{
            if(res.ok){
                alert("User Added Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
        <>
        
                <div className="page-body">
            <div className="header-basic">
                <header>
                <div className="row">
                    <div className="header-col">
                        <img className="headerLogo" src={Logo} width="400px" height="150px" alt="logo" />
                    </div>
                </div>
            </header>
            </div>
            </div>
            <div className="page-component-body pt-5 mt-5">
                <div className="row no-gutter">
                    <div className="col-md-6 d-none d-md-flex bg-image-sign-up"></div>
                    <div className="col-md-6 bg-light">
                        <div className="signup d-flex align-items-center py-5">

                            <div className="container signup-container">
                                <div className="row">
                                    <div className="col text-center">
                                        <h1>Sign up</h1>
                                        <br></br>
                                        <br></br>
                                        <form onSubmit={sendData}>
                                        <div class="form-group col-md-12">
                                            <label for="inputFrom4" className="sign-up-label" >User Name</label>
                                            <input type="text" class="form-control" id="inputUN" placeholder="Ex:-Cus001"
                                            onChange={(e) => {setUserName(e.target.value)}}/>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputUN" className="sign-up-label">Password</label>
                                            <input type="password" class="form-control" id="inputUN" placeholder="Ex:-Cus001"
                                            onChange={(e) => {setPassword(e.target.value)}}/>
                                        </div>
                                        <div class="form-group col-md-12" >
                                            <label for="inputUN" className="sign-up-label">Email</label>
                                            <input type="text" class="form-control" id="inputUN" placeholder="Ex:-Cus001"
                                            onChange={(e) => {setEmail(e.target.value)}}/>
                                        </div>
                                            <div className="text-right">
                                                <p><a href="/" className="sign-up"> Login ! </a></p>
                                                <br></br><br></br>
                                            </div>
                                            <div className="row mb-4">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok btn-success">
                                                Submit
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
</>
    )
}

export default Signup;
