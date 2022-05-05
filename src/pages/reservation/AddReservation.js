import { React, useState } from "react";
import Header from "../../components/Header";

import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


import { createReservation } from "../../services/ReservationService";

function AddReservation() {

    const yesterday = moment().subtract(1, 'day');
const disablePastDt = current => {
  return current.isAfter(yesterday);
}

    const [reservationID, setReservationID] = useState();
    const [customerName , setCustomerName ] = useState("");
    const [contactNumber , setContactNumber ] = useState("");
    const [nic , setnic ] = useState("");
    const [address , setAddress ] = useState("");
    const [email, setEmail ] = useState("");
    const [eventType, setEventType ] = useState("");
    const [vehicleType, setVehicleType ] = useState("");
    const [from, setFrom] = useState();
    const [to , setTo] = useState("");
    const [numberOfVehivles, setNumberOfVehivles ] = useState("");
    const [remarks, setRemarks ] = useState("");
    const [deposit , setDeposit ] = useState("");
    const [advancedPayment , setAdvancedPayment ] = useState("");
    const [totalReservation , setTotalReservation ] = useState("");
    
    
    
    
    

    function sendData(e){
        e.preventDefault()
        const newReservation = {
            
            reservationID,
            customerName,
            contactNumber,
            nic,
            address,
            email,
            eventType,
            vehicleType,
            from,
            to,
            numberOfVehivles,
            remarks,
            deposit,
            advancedPayment,
            totalReservation,
            
        }
        createReservation(newReservation).then((res)=>{
            if(res.ok){
                alert("Reservation Added Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
        <>
        <Header/>
        <div className="body-reservation">
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">

                        <div className="row">
                          <h3 className="header-reservation">New Reservation</h3>
                        </div>


                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h6 className="text-left mt-4 mb-25" id="sub-heading">Customer Details</h6>
                                    <hr></hr>
                                </div>
                                <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            <div class="form-row">

                                <div class="form-group-input-long">
                                    <label for="inputReservationID">Customer ID</label>
                                    <input type="text" class="form-control" id="inputReservationID" placeholder="Cus001" required
                                    onChange={(e) => {setReservationID(e.target.value)}}/>
                                </div>
                                <div class="form-group-input-long">
                                    <label for="inputFullName">Full Name</label>
                                    <input type="text" class="form-control" id="inputFullName" placeholder="Kasun Perera" required
                                    onChange={(e) => {setCustomerName(e.target.value)}}/>
                                </div>
                                <div class="form-group-input-long">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="No 35A, Temple Road, Maharagama"
                                    onChange={(e) => {setAddress(e.target.value)}}/>
                                </div>

                                <div class="form-group-input-long">
                                    <label for="inputEmailAddress">Email</label>
                                    <input type="text" class="form-control" id="inputEmailAddress" placeholder="kasun1232@gmail.com"  title="Enter Email in Proper format"
                                    onChange={(e) => {setEmail(e.target.value)}}/>
                                </div>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputTelephoneNumber4">Telephone Number</label>
                                        <input type="telephoneNumber" class="form-control" id="inputTelephoneNumber4" required placeholder="0711936210" pattern="[0-9]{10}" title="must be a 10 digit number"
                                        onChange={(e) => {setContactNumber(e.target.value)}}/>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="inputIdentityNumber4">NIC Number</label>
                                        <input type="identityNumber" class="form-control" id="inputIdentityNumber4" placeholder="9355581176V"
                                        onChange={(e) => {setnic(e.target.value)}}/>
                                    </div>
                                </div>


                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                 <h6 className="text-left mt-4 mb-4" id="sub-heading">Reservation Details</h6>
                                 <hr></hr>
                                </div>
                        
                                    {/* <div class="form-group-input">
                                        <label for="inputFrom4">From</label>
                                        <input type="date" class="form-control" id="inputFrom4" placeholder="2020-01-01"
                                        onChange={(e) => {setFrom(e.target.value)}}/>
                                    </div> */}
                                    <div class="form-group-input">
                                        <label for="inputFrom4">From</label>
            
                                        <DatePicker type="date" class="form-control" id="inputFrom4" dateFormat="DD-MM-YYYY"
                                                timeFormat={false} isValidDate={disablePastDt} placeholder="2020-01-01"
                                        onChange={(e) => {setFrom(e)}}/>
                                    </div>
                                    {/* <div class="form-group-input">
                                        <label for="inputTo4">To</label>
                                        <input type="date" class="form-control" id="inputTo4" placeholder=""
                                        onChange={(e) => {setTo(e.target.value)}}/>
                                    </div> */}
                                    <div class="form-group-input">
                                        <label for="inputTo4">To</label>
                                        <DatePicker type="date" class="form-control" id="inputFrom4" dateFormat="DD-MM-YYYY"
                                                timeFormat={false} isValidDate={disablePastDt} placeholder="2020-01-01"
                                        onChange={(e) => {setTo(e)}}/>
                                        
                                    </div>
                                </div>


                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputVehicleType">Vehicle Type</label>
                                        <select id="inputVehicleType" class="form-control" onChange={(e) => {setVehicleType(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Car</option>
                                            <option>Bus</option>
                                            <option>Van</option>
                                            <option>Car + Van</option>
                                            <option>Jeep</option>
                                        </select>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="numberOfVehivles">Number Of Vehivles</label>
                                        <select id="numberOfVehivles" class="form-control" onChange={(e) => {setNumberOfVehivles(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                            <option>06</option>
                                            <option>07</option>
                                            <option>08</option>
                                            <option>09</option>
                                            <option>10</option>
                                            
                                        </select>
                                    </div>

                                    <div class="form-group-input-long">
                                        <label for="eventType">Event Type</label>
                                        <input type="eventType" class="form-control" id="eventType" placeholder="Wedding"
                                        onChange={(e) => {setEventType(e.target.value)}}/>
                                    </div>

                                    <div class="form-group-input-long">
                                        <label for="remarks">Remarks</label>
                                        <input type="text" class="form-control" id="remarks" placeholder="Special details about Reservation"
                                        onChange={(e) => {setRemarks(e.target.value)}}/>
                                    </div>

                                </div>

                                


                            



                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h6 className="text-left mt-4 mb-4" id="sub-heading">Payment Details</h6>
                                    <hr></hr>
                                </div>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputDepositAmount4">Deposit Amount</label>
                                        <input type="text" class="form-control" id="inputDepositAmount4" placeholder="Rs.10000" required pattern="[0-9]{1,20}" title="Amount must be a number" 
                                        onChange={(e) => {setDeposit(e.target.value)}}/>
                                    </div>

                                    <div class="form-group-input">
                                        <label for="inputAdvancedPaymentAmount4">Advanced Payment Amount</label>
                                        <input type="text" class="form-control" id="inputAdvancedPaymentAmount4" placeholder="Rs.10000" required pattern="[0-9]{1,20}" title="Amount must be a number" 
                                        onChange={(e) => {setAdvancedPayment(e.target.value)}}/>
                                    </div>

                                    <div class="form-group-input">
                                        <label for="inputReservationPaymentAmount4">Total Reservation Amount</label>
                                        <input type="text" class="form-control" id="inputReservationPaymentAmount4" placeholder="Rs.10000" required pattern="[0-9]{1,20}" title="Amount must be a number" 
                                        onChange={(e) => {setTotalReservation(e.target.value)}}/>
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
        </>

    )
}

export default AddReservation;
