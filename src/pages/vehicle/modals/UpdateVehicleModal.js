//modal popup for update vehicle
import React,{useState,useEffect}from "react";
import { Modal } from "react-bootstrap";

import {updateVehicle} from "../../../services/VehicleService";

function UpdateVehicle(props) {

    useEffect(()=>{
        setVehicleBrand(props.data.VehicleBrand);
        setVehicleModel(props.data.VehicleModel);
        setVehicleType(props.data.VehicleType);
        setVehicleRegNo(props.data.VehicleRegNo);
        setMileage(props.data.Mileage);
        setInsType(props.data.InsType);
        setInsComName(props.data.InsComName);
        setTransmission(props.data.Transmission);
        setAirC(props.data.AirC);
        setNoOfSeats(props.data.NoOfSeats);
        setRatePDay(props.data.RatePDay);
        setYearsRent(props.data.YearsRent);
    },[])

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

    function sendData(e){
        e.preventDefault()
        const Vehicles = {

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

        //calling update service
        updateVehicle(props.data.VId,Vehicles).then((res)=>{
            if(res.ok){
                alert("Vehicle Updated Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
    <div>
        <Modal.Header closeButton>
            <Modal.Title>Update Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputVehicleBrand">Vehicle Brand</label>
                                    <input type="text" class="form-control" id="inputVehicleBrand" placeholder="eg:Toyota,Nisan" value={VehicleBrand}
                                    onChange={(e) => {setVehicleBrand(e.target.value)}}/>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="inputVehicleModel">Vehicle Model</label>
                                    <input type="text" class="form-control" id="inputVehicleModel" placeholder="eg:KDH,Axio" value={VehicleModel}
                                    onChange={(e) => {setVehicleModel(e.target.value)}}/>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="inputVehicleType">Vehicle Type</label>
                                <select id="inputVehicleType" class="form-control" value={VehicleType}
                                    onChange={(e) => {setVehicleType(e.target.value)}}>
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
                                <input type="text" class="form-control" id="inputVehicleRegNo" placeholder="ABC-XXXX" value={VehicleRegNo}
                                    onChange={(e) => {setVehicleRegNo(e.target.value)}}/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputVehicleMileage">Current Mileage(Km)</label>
                                <input type="text" class="form-control" id="inputVehicleMileage" placeholder="Mileage" value={Mileage}
                                    onChange={(e) => {setMileage(e.target.value)}}/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12">
                                    <label for="inputVehicleInsType">Insurance Type</label>
                                    <select id="inputVehicleInsType" class="form-control" value={InsType} 
                                        onChange={(e) => {setInsType(e.target.value)}}>
                                            <option selected>Choose...</option>
                                            <option>Full-Insurance</option>
                                            <option>Third-Party Insurance</option>
                                    </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputVehicleInsComName">Insurance Company</label>
                                <input type="text" class="form-control" id="inputVehicleInsComName" placeholder="Insurance Company Name" value={InsComName}
                                    onChange={(e) => {setInsComName(e.target.value)}}/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputVehicleTransmission">Transmission</label>
                                <select id="inputVehicleTransmission" class="form-control" value={Transmission} onChange={(e) => {setTransmission(e.target.value)}}>
                                    <option selected>Choose...</option>
                                    <option>Auto</option>
                                    <option>Manual</option>
                                </select>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="inputVehicleAirC">Air Condition</label>
                                <select id="inputVehicleAirC" class="form-control" value={AirC} onChange={(e) => {setAirC(e.target.value)}}>
                                    <option selected>Choose...</option>
                                    <option>Full-AC</option>
                                    <option>Non-AC</option>
                                </select>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="inputVehicleNoOfSeat">Number of seats</label>
                                    <input type="text" class="form-control" id="inputVehicleNoOfSeat" placeholder="Number of seats" value={NoOfSeats}
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
                                <input type="text" class="form-control" id="inputVehiclRatePDate" placeholder="Rs." value={RatePDay}
                                    onChange={(e) => {setRatePDay(e.target.value)}}/>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="inputVehicleYearsRent">Year of Rental</label>
                                <input type="number" class="form-control" id="inputVehicleYearsRent" value={YearsRent}
                                    onChange={(e) => {setYearsRent(e.target.value)}}/>
                            </div>
                        </div>


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
        </Modal.Body>
    </div>
    )
}

export default UpdateVehicle;
