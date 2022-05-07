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


    function checkUser(e) {//This function checks the availbilty of the Admin users within the system
        e.preventDefault();
        //Pass the username and password and if exact user exsits will be directed to dashbord else it will display error for unavailable user
        axios.get(`http://localhost:8000/login/get/${username}/${password}`).then((response) => {
            setLogin(response.data.login);
            if (response.data.login === null) {
                Swal.fire({
                    title: 'Oops!',
                    text: 'No Such User Available!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                })

            } else {
                Swal.fire({
                    title: 'Sucess!',
                    text: 'Welcome Back Admin!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                if (response.data.status=='User fetched') {
                    history.push("/Dashboard");
                }
            }
        }).catch((err) => {
            alert(err.response.data.error)

        })
    }

    return (
        <>
        <div className="loginbg">
            <div className="page-body">
            <div className="header-basic loginbg">
                <header>
                <div className="row">
                    <div className="header-col">
                        <img className="headerLogo" src={Logo} width="400px" height="150px" alt="logo" />
                    </div>
                </div>
            </header>
            </div>
            </div>

            <div className="page-component-body loginbg1 pt-0 mt-9">

                <div className="row no-gutter">
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">

                            <div className="container login-container">
                                <div className="row">
                                    <div className="col text-center">
                                        <h1>Welcome !</h1>
                                        <form onSubmit={checkUser}>
                                            <div className="form-group mb-3">
                                                <input id="loginInput" type="input" placeholder="Username" required autofocus="" className="login-form-input px-4"
                                                    onChange={(event) => { setUserName(event.target.value); }} />
                                            </div>
                                            <div className="form-group mb-5">
                                                <input id="loginPassword" type="password" placeholder="Password" required="" className="login-form-input px-4 text-primary"
                                                    onChange={(event) => { setPassword(event.target.value); }} />
                                            </div>
                                            <div className="text-right">
                                                <p><a href="/Signup" className="text-danger">New User? </a></p>
                                                <br></br><br></br>
                                            </div>
                                            <div>
                                                <center>
                                                    <button type="submit" class="btn btn-block text-uppercase text-light btn-login">Login</button>
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
        </div>    
        </>

    )
}

export default Login;