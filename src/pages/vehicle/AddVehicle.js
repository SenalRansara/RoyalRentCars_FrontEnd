import { React, useState } from "react";
import {useHistory} from "react-router-dom";
//import moment from 'moment';

import { createVehicle } from "../../services/VehicleService";


function AddVehicle() {

    const [VehicleBrand, setVehicleBrand] = useState("");
    const [VehicleModel, setVehicleModel] = useState("");
    const [VehicleType, setVehicleType ] = useState("");
    const [VehicleRegNo, setVehicleRegNo ] = useState("");
    const [Mileage, setMileage ] = useState("");
    const [InsType , setInsType ] = useState("");
    const [InsComName  , setInsComName ] = useState("");
    const [Transmission    , setTransmission] = useState("");
    const [AirC , setAirC ] = useState("");
    const [NoOfSeats , setNoOfSeats ] = useState("");
    const [RatePDay , setRatePDay ] = useState("");
    const [YearsRent , setYearsRent ] = useState("");

    const history = useHistory();

    function sendData(e){
        e.preventDefault()
        const newVehicle = {

            VehicleBrand,
            VehicleModel,
            VehicleType,
            VehicleRegNo,
            Mileage,
            InsType,
            InsComName,
            Transmission,
            AirC,
            NoOfSeats,
            RatePDay,
            YearsRent,

        }
        
        
        createVehicle(newVehicle).then((res)=>{
            if(res.ok){
                alert("Vehicle Added Successfully");
                history.push("/AllVehicle")
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return <div class="background-image">
    (
    
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                    
                        <div className="row">
                        <h3 className="text-left mt-3 mb-1">New Vehicle</h3>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h5 className="text-left mt-4 mb-4">Vehicle Details</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleBrand">Vehicle Brand</label>
                                        <input type="text" class="form-control" id="inputVehicleBrand" placeholder="eg:Toyota,Nisan"
                                        onChange={(e) => {setVehicleBrand(e.target.value)}}/>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleModel">Vehicle Model</label>
                                        <input type="text" class="form-control" id="inputVehicleModel" placeholder="eg:KDH,Axio"
                                        onChange={(e) => {setVehicleModel(e.target.value)}}/>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleType">Vehicle Type</label>
                                        <select id="inputVehicleType" class="form-control" onChange={(e) => {setVehicleType(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Car</option>
                                            <option>Bus</option>
                                            <option>Van</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputVehicleRegNo">Vehicle Reg No</label>
                                        <input type="text" class="form-control" id="inputVehicleRegNo" placeholder="ABC-XXXX"
                                        onChange={(e) => {setVehicleRegNo(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputVehicleMileage">Current Mileage(Km)</label>
                                        <input type="text" class="form-control" id="inputVehicleMileage" placeholder="Mileage"
                                        onChange={(e) => {setMileage(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                            <label for="inputVehicleInsType">Insurance Type</label>
                                            <select id="inputVehicleInsType" class="form-control" onChange={(e) => {setInsType(e.target.value)}}>
                                                <option selected>Choose...</option>
                                                <option>Full-Insurance</option>
                                                <option>Third-Party Insurance</option>
                                            </select>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputVehicleInsComName">Insurance Company</label>
                                        <input type="text" class="form-control" id="inputVehicleInsComName" placeholder="Insurance Company Name"
                                        onChange={(e) => {setInsComName(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleTransmission">Transmission</label>
                                        <select id="inputVehicleTransmission" class="form-control" onChange={(e) => {setTransmission(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Auto</option>
                                            <option>Manual</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleAirC">Air Condition</label>
                                        <select id="inputVehicleAirC" class="form-control" onChange={(e) => {setAirC(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Full-AC</option>
                                            <option>Non-AC</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputVehicleNoOfSeat">Number of seats</label>
                                        <input type="text" class="form-control" id="inputVehicleNoOfSeat" placeholder="Number of seats"
                                        onChange={(e) => {setNoOfSeats(e.target.value)}}/>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left">
                                        <h3 className="topic-V text-left mt-2 mb-4">Payment & Agreement Details</h3>
                                    </div>
                                </div>

                                <div class="form-row">

                                    <div class="form-group col-md-6">
                                        <label for="inputVehiclRatePDate">Rate Per Day(Rs.)</label>
                                        <input type="text" class="form-control" id="inputVehiclRatePDate" placeholder="Rs."
                                        onChange={(e) => {setRatePDay(e.target.value)}}/>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="inputVehicleYearsRent">Year of Rental</label>
                                        <input type="number" class="form-control" id="inputVehicleYearsRent"
                                        onChange={(e) => {setYearsRent(e.target.value)}}/>
                                    </div>

                                </div>

                                {/* <div className="row">
                                    <div class="form-group col-md-6">
                                        <label for="exampleFormControlFile1">Photos of Vehicle</label>
                                        <input type="file" class="form-control-file pt-3" id="Photos"

                                            onChange={(e) => {
                                            //setVehiPic(e.target.files[0]);
                                            }}

                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="exampleFormControlFile1">Copy of Agreement</label>
                                        <input type="file" class="form-control-file pt-3" id="Agreement"
                                            onChange={(e) => {
                                            //setVehDoc(e.target.value);
                                            }}


                                        />
                                    </div>
                                </div> */}
                                <div className="row mb-3">
                                    <div className="col py-3 text-center">
                                        <button type="submit" class="btn btn-ok btn-success">
                                            Save
                                        </button>
                                    </div>
                                    <div className="col py-3 text-center">
                                        <button type="reset" class="btn btn-reset btn-warning">
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
    
    )</div>
}

export default AddVehicle;
