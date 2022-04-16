import { React, useState } from "react";

//import moment from 'moment';

import { createRental } from "../../services/RentalService";

function AddRental() {

    const [from, setFrom] = useState();
    const [to , setTo] = useState("");
    const [vehicleType, setVehicleType ] = useState("");
    const [vehicleModel , setVehicleModel ] = useState("");
    const [pickAddress , setPickAddress ] = useState("");
    const [paymentAmount , setPaymentAmount ] = useState("");
    const [paymentMethod , setPaymentMethod ] = useState("");
    const [customerName , setCustomerName ] = useState("");
    const [customerAddress , setCustomerAddress ] = useState("");
    const [customerNIC , setCustomerNIC ] = useState("");
    const [nicErr , setNicErr ] = useState("")
    const [contactNo , setContactNo ] = useState("");
    //const [createdAt , setCreatedAt ] = useState("");


    function sendData(e){
        e.preventDefault()
        const newRental = {
            //recName:recipeName,
            from,
            to,
            vehicleType,
            vehicleModel,
            pickAddress,
            paymentAmount,
            paymentMethod,
            customerName,
            customerAddress,
            customerNIC,
            contactNo

        }
        createRental(newRental).then((res)=>{
            if(res.ok){
                alert("Rental Added Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    const NICValidation = () => {

        const nicErr = {}; //State
        let NICValid = true; //setting flag


        if (customerNIC.trim().length > 12) {
            nicErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        } else if (customerNIC.trim().length < 10) {
            nicErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        }
        setNicErr(nicErr);//update error objects
        return NICValid;
    }

    const [isNICValid, setNICIsValid] = useState(false);
    const [NICmessage, setNICMessage] = useState('');

    const NICRegex1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V.v]$/;
    const NICRegex2 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateNIC = (event) => {
        const NIC = event.target.value;
        if (NICRegex1.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!');
        } else if (NICRegex2.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!');
        } else {
            setNICIsValid(false);
            setNICMessage('Please enter a valid NIC Number!');
        }
    };

    return (
        <div className="body-rental">
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                        <h3 className="header-rental">New Rental</h3>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h6 className="text-left mt-4 mb-4" id="sub-heading">Rental Details</h6>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputFrom4">From :</label>
                                        <input type="date" class="form-control" id="inputFrom4" placeholder="2020-01-01"
                                        onChange={(e) => {setFrom(e.target.value)}}/>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="inputTo4">To :</label>
                                        <input type="date" class="form-control" id="inputTo4" placeholder=""
                                        onChange={(e) => {setTo(e.target.value)}}/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputVehicleType">Vehicle Type :</label>
                                        <select id="inputVehicleType" class="form-control" onChange={(e) => {setVehicleType(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Car</option>
                                            <option>Bus</option>
                                            <option>Van</option>
                                        </select>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="inputVehicleModel">Vehicle Model :</label>
                                        <select id="inputVehicleModel" class="form-control" onChange={(e) => {setVehicleModel(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Toyota</option>
                                            <option>Honda</option>
                                            <option>Mitsubishi</option>
                                            <option>Rosa</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group-input-long">
                                    <label for="inputAddress">Pick Up Address :</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="No.123,Kandy Road,Kaduwela"
                                    onChange={(e) => {setPickAddress(e.target.value)}}/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h6 className="text-left mt-4 mb-4" id="sub-heading">Payment Details</h6>
                                    <hr></hr>
                                </div>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputPaymentAmount4">Payment Amount :</label>
                                        <input type="text" class="form-control" id="inputPaymentAmount4" placeholder="Rs.10000" required pattern="[0-9]{1,20}" title="Amount must be a number" 
                                        onChange={(e) => {setPaymentAmount(e.target.value)}}/>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="inputPaymentMethod">Payment Method :</label>
                                        <select id="inputPaymentMethod" class="form-control" onChange={(e) => {setPaymentMethod(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Cash payment</option>
                                            <option>Card payment</option>
                                        </select>
                                    </div>
                                </div><div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h6 className="text-left mt-4 mb-25" id="sub-heading">Customer Details</h6>
                                    <hr></hr>
                                </div>
                                <div class="form-group-input-long">
                                    <label for="inputFullName">Full Name :</label>
                                    <input type="text" class="form-control" id="inputFullName" placeholder="Ex:-John Snow"
                                    onChange={(e) => {setCustomerName(e.target.value)}}/>
                                </div>
                                <div class="form-group-input-long">
                                    <label for="inputAddress">Address :</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="No.123,Pittugala,Malabe"
                                    onChange={(e) => {setCustomerAddress(e.target.value)}}/>
                                </div>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputTelephoneNumber4">Telephone Number :</label>
                                        <input type="number" class="form-control" id="inputTelephoneNumber4" placeholder="0771212112" pattern="[0-9]{10}" title="must be a 10 digit number"
                                        onChange={(e) => {setContactNo(e.target.value)}}/>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="inputIdentityNumber4">Identity Number :</label>
                                        <input type="text" class="form-control" id="inputIdentityNumber4" placeholder="7355481176V"
                                        onChange={(e) => {
                                            setCustomerNIC(e.target.value);
                                            validateNIC(e);}}/>
                                        <div className={`message ${isNICValid ? 'success' : 'error'}`}>
                                            {NICmessage}
                                        </div>   
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

export default AddRental;
