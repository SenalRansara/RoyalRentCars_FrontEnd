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
    const [contactNo , setContactNo ] = useState("");
    const [createdAt , setCreatedAt ] = useState("");

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

    return (
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                        <h3>New Rental</h3>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h6 className="text-left mt-4 mb-4">Rental Details</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputFrom4">From</label>
                                        <input type="from" class="form-control" id="inputFrom4" placeholder="2020-01-01"/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputTo4">To</label>
                                        <input type="to" class="form-control" id="inputTo4" placeholder="2020-01-15"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleType">Vehicle Type</label>
                                        <select id="inputVehicleType" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>Car</option>
                                            <option>Bus</option>
                                            <option>Van</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleModel">Vehicle Model</label>
                                        <select id="inputVehicleModel" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>Toyota</option>
                                            <option>Honda</option>
                                            <option>Mitsubishi</option>
                                            <option>Rosa</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-md-8">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="No.123,Kandy Road,Kaduwela"/>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputPaymentAmount4">Payment Amount</label>
                                        <input type="paymentAmount" class="form-control" id="inputPaymentAmount4" placeholder="10000"/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputPaymentMethod">Payment Method</label>
                                        <select id="inputPaymentMethod" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>Cash payment</option>
                                            <option>Card payment</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-md-8">
                                    <label for="inputFullName">Full Name</label>
                                    <input type="text" class="form-control" id="inputFullName" placeholder="Ex:-John Snow"/>
                                </div>
                                <div class="form-group col-md-8">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="No.123,Pittugala,Malabe"/>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputTelephoneNumber4">Telephone Number</label>
                                        <input type="telephoneNumber" class="form-control" id="inputTelephoneNumber4" placeholder="0771212112"/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputIdentityNumber4">Identity Number</label>
                                        <input type="identityNumber" class="form-control" id="inputIdentityNumber4" placeholder="7355481176V"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok">
                                                Save
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset">
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

    )
}

export default AddRental;
