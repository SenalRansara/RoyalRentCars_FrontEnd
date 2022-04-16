import React, { useState } from 'react'
import "../styles/styles.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import Logo from '../assets/Logo.png';


function Login() {

    let history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState([]);


    function checkUser(e) {//function checks the availbilty of the admin within the system
        e.preventDefault();
            if (username == "" || password == "") {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Please fill all the required fields!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                }
                )

            } else {
                Swal.fire({
                    title: 'Sucess!',
                    text: 'Welcome back admin',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                }
                )

                    history.push("/Dashboard");
                
            }
        
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

                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image"></div>
                    <div class="col-md-6 bg-light">
                        <div class="login d-flex align-items-center py-5">

                            <div class="container login-container">
                                <div class="row">
                                    <div class="col text-center">
                                        <h1>Welcome back!</h1>
                                        <form onSubmit={checkUser}>
                                            <div class="form-group mb-3">
                                                <input id="loginInput" type="input" placeholder="Username" required autofocus="" class="login-form-input px-4"
                                                    onChange={(event) => { setUserName(event.target.value); }} />
                                            </div>
                                            <div class="form-group mb-5">
                                                <input id="loginPassword" type="password" placeholder="Password" required="" class="login-form-input px-4 text-primary"
                                                    onChange={(event) => { setPassword(event.target.value); }} />
                                            </div>
                                            <div className="text-right">
                                                <p><a href="/makeInquiry" className="text-danger">Forget Password? </a></p>
                                                <br></br><br></br>
                                            </div>
                                            <div>
                                                <center>
                                                    <button type="submit" class="btn btn-block text-uppercase text-light btn-login">Sign in</button>
                                                </center>
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

export default Login;