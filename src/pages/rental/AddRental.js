import { React, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header";

//import moment from 'moment';

import { createRental } from "../../services/RentalService";

function AddRental() {

    //setting all data into state 
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
    const history = useHistory();
    //const [createdAt , setCreatedAt ] = useState("");


    function sendData(e){
        e.preventDefault()
        const newRental = {
            //creating the structured data object
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

        //calling the add rental service 
        createRental(newRental).then((res)=>{
            if(res.ok){
                alert("Rental Added Successfully");
                history.push("/AllRental");//redirected to the view page after success data entry
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }
//implementing a method to validate NIC number
    const NICValidation = () => {

        const nicErr = {};
        let NICValid = true;


        if (customerNIC.trim().length > 12) {
            nicErr.InValidNIC = " Invalid NIC Number"; 
            NICValid = false;
        } else if (customerNIC.trim().length < 10) {
            nicErr.InValidNIC = " Invalid NIC Number";
            NICValid = false;
        }
        setNicErr(nicErr);
        return NICValid;
    }

    //flitering the nic number as 9 digit with V or else 12 digits
    const [isNICValid, setNICIsValid] = useState(false);
    const [NICmessage, setNICMessage] = useState('');

    const nicType01 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V.v]$/;//nic type 1 which including the letter v
    const nicType02 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateNIC = (event) => {
        const NIC = event.target.value;
        if (nicType01.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Matching the required Type!');
        } else if (nicType02.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Matching the required Type!');
        } else {
            setNICIsValid(false);
            setNICMessage('Please enter a valid NIC Number *');
        }
    };

    return (
        <>
        <Header/>
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
                                {/*form to get data*/}
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputFrom4">From :</label>
                                        <input type="date" class="form-control" id="inputFrom4" 
                                        onChange={(e) => {setFrom(e.target.value)}}/>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="inputTo4">To :</label>
                                        <input type="date" class="form-control" id="inputTo4" 
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
                                        <input type="text" class="form-control" id="inputIdentityNumber4" placeholder="680681343V/196806813430"
                                        onChange={(e) => {
                                            setCustomerNIC(e.target.value);
                                            validateNIC(e);}}/>
                                        <div className={`message ${isNICValid ? 'success' : 'error'}`} id="error-message">
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
        </>

    )
}

export default AddRental;
