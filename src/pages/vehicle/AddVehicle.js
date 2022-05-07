import { React, useState } from "react";
import {useHistory} from "react-router-dom";
import Swal from 'sweetalert2';
import Header from "../../components/Header";
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
    const [nic , setNic ] = useState("");
    const [VehiclePic , setVehiclePic ] = useState("");
    const [AgPic , setAgPic ] = useState("");
    const [NICErr, setNICErr] = useState("");
    
    const history = useHistory();

    function sendData(e){
        e.preventDefault()

        const NICValid = NICValidation();

        if (NICValid == true){

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
            nic,
            VehiclePic,
            AgPic,

        };
        
        createVehicle(newVehicle).then((res) => {
            const message = res.ok
                ? "Vehicle added Successful!"
                : res.err;

            if (res.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: `${message}`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                }
                ).then(() => {
                    window.location.reload();
                })

            }
            else {
                Swal.fire({
                    title: 'Oops!',
                    text: `${message}`,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                }
                )
            }
        });
    }
    }
    //validate function
    const NICValidation = () => {

        const NICErr = {}; //State
        let NICValid = true; //setting flag


        if (nic.trim().length > 12) {

            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        } else if (nic.trim().length < 10) {
            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        }


        setNICErr(NICErr);//update error objects
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
        <>
        <Header/>
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

                                <div class="row">
                                    <div class="form-group col-md-12">
                                    <label className="form-label" for="NIC">NIC:</label>
                                            <input
                                                required
                                                id="nic"
                                                type="text"
                                                className="form-control "
                                                placeholder="NIC"
                                            onChange={(e) => {
                                                setNic(e.target.value);
                                                validateNIC(e);
                                                }}
                                            />
                                    <div className={`message ${isNICValid ? 'success' : 'error'}`}>
                                        {NICmessage}
                                    </div>

                                    {Object.keys(NICErr).map((key) => {
                                            })}
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

                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <div className="form-group">
                                            <label className="form-label-emp pb-3" for="VehiclePic">Vehicle Photo:</label>
                                            <input
                                                // required
                                                id="VehiclePic"
                                                type="file"
                                                className="form-control-file"
                                                onChange={(e) => {
                                                    setVehiclePic(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div className="form-group">
                                            <label className="form-label-emp pb-3" for="AgPic">Agreement</label>
                                            <input
                                                // required
                                                id="AgPic"
                                                type="file"
                                                className="form-control-file fliepond"
                                                onChange={(e) => {
                                                    setAgPic(e.target.value);
                                                }}
                                            />
                                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default AddVehicle;
