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
        updateVehicle(props.data.id,Vehicles).then((res)=>{
            if(res.ok){
                alert("Vehicle Updated Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    // //implementing a method to validate NIC number
    // const NICValidation = () => {

    //     const nicErr = {};
    //     let NICValid = true;


    //     if (customerNIC.trim().length > 12) {
    //         nicErr.InValidNIC = " Invalid NIC Number"; 
    //         NICValid = false;
    //     } else if (customerNIC.trim().length < 10) {
    //         nicErr.InValidNIC = " Invalid NIC Number";
    //         NICValid = false;
    //     }
    //     setNicErr(nicErr);
    //     return NICValid;
    // }

    //flitering the nic number as 9 digit with V or else 12 digits
    // const [isNICValid, setNICIsValid] = useState(false);
    // const [NICmessage, setNICMessage] = useState('');

    // const nicType01 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V.v]$/;//nic type 1 which including the letter v
    // const nicType02 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    // const validateNIC = (event) => {
    //     const NIC = event.target.value;
    //     if (nicType01.test(NIC)) {
    //         setNICIsValid(true);
    //         setNICMessage('Matching the required Type!');
    //     } else if (nicType02.test(NIC)) {
    //         setNICIsValid(true);
    //         setNICMessage('Matching the required Type!');
    //     } else {
    //         setNICIsValid(false);
    //         setNICMessage('Please enter a valid NIC Number *');
    //     }
    // };

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Update Vehicle</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">

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
            </Modal.Body>
        </div>
    )
}

export default UpdateVehicle;