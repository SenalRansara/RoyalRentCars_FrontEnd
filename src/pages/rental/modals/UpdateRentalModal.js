//modal popup for update recipe
import React,{useState,useEffect}from "react";
import { Modal } from "react-bootstrap";

import{updateRental} from "../../../services/RentalService";

function UpdateRental(props) {

    console.log("yoy ",props);
    useEffect(()=>{
        setFrom(props.data.from);
        setTo(props.data.to);
        setVehicleType(props.data.vehicleType);
        setVehicleModel(props.data.vehicleModel);
        setPickAddress(props.data.pickAddress);
        setPaymentAmount(props.data.paymentAmount);
        setPaymentMethod(props.data.paymentMethod);
        setCustomerName(props.data.customerName);
        setCustomerAddress(props.data.customerAddress);
        setCustomerNIC(props.data.customerNIC);
        setContactNo(props.data.contactNo);
    },[])

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

    function sendData(e){
        e.preventDefault()
        const Rentals = {
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

        //calling update service
        updateRental(props.data.id,Rentals).then((res)=>{
            if(res.ok){
                alert("Rental Updated Successfully");
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
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Update aarental</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/*form to get data*/}
                <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                    <div class="form-row">
                        <div class="form-group-input">
                            <label for="inputFrom4">From :</label>
                            <input type="date" class="form-control" id="inputFrom4" value={from}
                            onChange={(e) => {setFrom(e.target.value)}}/>
                        </div>
                        <div class="form-group-input">
                            <label for="inputTo4">To :</label>
                            <input type="date" class="form-control" id="inputTo4" value={to} 
                            onChange={(e) => {setTo(e.target.value)}}/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group-input">
                            <label for="inputVehicleType">Vehicle Type :</label>
                            <select id="inputVehicleType" class="form-control" value={vehicleType} onChange={(e) => {setVehicleType(e.target.value)}}>
                                <option selected>Choose...</option>
                                <option>Car</option>
                                <option>Bus</option>
                                <option>Van</option>
                            </select>
                        </div>
                        <div class="form-group-input">
                            <label for="inputVehicleModel">Vehicle Model :</label>
                            <select id="inputVehicleModel" class="form-control" value={vehicleModel} onChange={(e) => {setVehicleModel(e.target.value)}}>
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
                        value={pickAddress} onChange={(e) => {setPickAddress(e.target.value)}}/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h6 className="text-left mt-4 mb-4" id="sub-heading">Payment Details</h6>
                        <hr></hr>
                    </div>
                    <div class="form-row">
                        <div class="form-group-input">
                            <label for="inputPaymentAmount4">Payment Amount :</label>
                            <input type="text" class="form-control" id="inputPaymentAmount4" placeholder="Rs.10000" required pattern="[0-9]{1,20}" title="Amount must be a number" 
                            value={paymentAmount} onChange={(e) => {setPaymentAmount(e.target.value)}}/>
                        </div>
                        <div class="form-group-input">
                            <label for="inputPaymentMethod">Payment Method :</label>
                            <select id="inputPaymentMethod" class="form-control" value={paymentMethod} onChange={(e) => {setPaymentMethod(e.target.value)}}>
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
                        value={customerName} onChange={(e) => {setCustomerName(e.target.value)}}/>
                    </div>
                    <div class="form-group-input-long">
                        <label for="inputAddress">Address :</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="No.123,Pittugala,Malabe"
                        value={customerAddress} onChange={(e) => {setCustomerAddress(e.target.value)}}/>
                    </div>
                    <div class="form-row">
                        <div class="form-group-input">
                            <label for="inputTelephoneNumber4">Telephone Number :</label>
                            <input type="number" class="form-control" id="inputTelephoneNumber4" placeholder="0771212112" pattern="[0-9]{10}" title="must be a 10 digit number"
                            value={contactNo} onChange={(e) => {setContactNo(e.target.value)}}/>
                        </div>
                        <div class="form-group-input">
                            <label for="inputIdentityNumber4">Identity Number :</label>
                            <input type="text" class="form-control" id="inputIdentityNumber4" placeholder="680681343V/196806813430"
                            value={customerNIC} onChange={(e) => {
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
            </Modal.Body>
            
        </div>
    )
}

export default UpdateRental;
