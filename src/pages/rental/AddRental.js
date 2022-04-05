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
            <h1>New Rental</h1>
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-4 mb-4">Rental Details</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="from">From</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="to">To</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h3 className="text-left mt-4 mb-4">Vehicle Details</h3>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="vehicleType">Vehicle Type</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="vehicleModel">Vehicle Model</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="address">Address</label>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h3 className="text-left mt-4 mb-4">Payment Details</h3>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="address">Payment Amount</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="address">Payment Method</label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        <h3 className="text-left mt-4 mb-4">Customer Details</h3>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="address">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="address">Address</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="address">Telephone</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 ">
                                            <label className="form-label" for="address">Identity No</label>
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
