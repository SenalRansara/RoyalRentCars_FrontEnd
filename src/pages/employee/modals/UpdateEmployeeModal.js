import { React, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import { Modal } from "react-bootstrap";

import {updateEmployee} from "../../../services/EmployeeService";

function UpdateEmployee(emp) {

    // disable future dates
    const day = moment().subtract(18, 'years');
    const disableFutureDt = current => {
        return current.isBefore(day) && current.disableFutureDt
    }

    useEffect(() => {
        try {
            setEmpId(emp.data.empId);
            setfName(emp.data.fName);
            setlName(emp.data.lName);
            setGender(emp.data.gender);
            setDOB(moment(emp.data.DOB));
            setEmail(emp.data.email);
            setMaritalStatus(emp.data.maritalStat);
            setNIC(emp.data.nic);
            setDesignation(emp.data.designation);
            setCurrAdd(emp.data.currAdd);
            setMobileNo(emp.data.mobileNo);
            setHomeContact(emp.data.homeContact);
            setEmpPic(emp.data.empPic);
            setCV(emp.data.cv);

        } catch {
            window.alert("something went wrong");
        }
    }, [emp.data]);


    const [empId, setEmpId] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState(moment());
    const [email, setEmail] = useState("");
    const [maritalStat, setMaritalStatus] = useState("");
    const [nic, setNIC] = useState("");
    const [designation, setDesignation] = useState("");
    const [currAdd, setCurrAdd] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [homeContact, setHomeContact] = useState("");
    const [empPic, setEmpPic] = useState("");
    const [cv, setCV] = useState("");
    const [TeleErr, setTeleNoErr] = useState("");
    const [HomeTeleErr, setHomeTeleNoErr] = useState("");
    const [NICErr, setNICErr] = useState("");

    function sendData(e) {
        e.preventDefault();

        const teleValid = TeleValidation();
        const HometeleValid = HomeTeleValidation();
        const NICValid = NICValidation();

        if (teleValid && HometeleValid && NICValid) {

            const Employee = {
                fName,
                lName,
                gender,
                DOB,
                email,
                maritalStat,
                nic,
                designation,
                currAdd,
                mobileNo,
                homeContact,
                empPic,
                cv,
            };

            //calling update service
            updateEmployee(empId, Employee).then((response)=>{
                const message = response.ok
                    ? "Employee Update Successful!"
                    : response.err;

                if (response.ok) {
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
    const TeleValidation = () => {

        const TeleErr = {}; //State
        let teleValid = true; //setting flag


        console.log("res>>", typeof mobileNo)
        if (mobileNo.length > 10) {

            TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            teleValid = false;
        } else if (mobileNo.length < 10) {
            TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            teleValid = false;
        }


        setTeleNoErr(TeleErr);//update error objects
        return teleValid;


    }

    //validate function
    const HomeTeleValidation = () => {

        const HomeTeleErr = {}; //State
        let HometeleValid = true; //setting flag


        if (homeContact.length > 10) {

            HomeTeleErr.InValidTeleNo = " *Invalid  Emergency contact number:"; // error msg
            HometeleValid = false;
        } else if (homeContact.length < 10) {
            HomeTeleErr.InValidTeleNo = " *Invalid Emergency contact number:"; // error msg
            HometeleValid = false;
        }


        setHomeTeleNoErr(HomeTeleErr);//update error objects
        return HometeleValid;


    }

    //validate function
    const NICValidation = () => {

        const NICErr = {}; //State
        let NICValid = true; //setting flag


        if (nic.length > 12) {

            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        } else if (nic.length < 10) {
            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        }


        setNICErr(NICErr);//update error objects
        return NICValid;


    }

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };


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


    const [isMobileNoValid, setMobileNoValid] = useState(false);
    const [MobileNoMessage, setMobileMessage] = useState('');

    const MobileRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateMobile = (event) => {
        const MobileNo = event.target.value;
        if (MobileRegex.test(MobileNo)) {
            setMobileNoValid(true);
            setMobileMessage('Your Mobile Number looks good!');
        } else {
            setMobileNoValid(false);
            setMobileMessage('Please enter a valid Mobile Number!');
        }
    };

    const [isHomeNoNoValid, setHomeNoValid] = useState(false);
    const [HomeNoMessage, setHomeMessage] = useState('');

    const HomeRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateHomeMobile = (event) => {
        const MobileNo = event.target.value;
        if (HomeRegex.test(MobileNo)) {
            setHomeNoValid(true);
            setHomeMessage('Your Home Contact Number looks good!');
        } else {
            setHomeNoValid(false);
            setHomeMessage('Please enter a valid Home Contact Number!');
        }
    };

    return (

        <div>
            <Modal.Header closeButton>
                <Modal.Title>Update Employee : {emp.data.fName + " " + emp.data.lName}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            <div className="row">
                                <div className="form-group col-md-6 ">
                                    <label className="form-label" for="fName">First name:</label>
                                    <input
                                        required
                                        value={fName}
                                        id="fName"
                                        type="text"
                                        className="form-control "
                                        placeholder="First name"
                                        onChange={(e) => {
                                            setfName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="lName">Last name:</label>
                                    <input
                                        required
                                        id="lName"
                                        type="text"
                                        className="form-control "
                                        placeholder="Last name"
                                        value={lName}
                                        // disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label-emp " for="gender">Gender:</label>
                                    <input
                                        required
                                        id="gender"
                                        type="text"
                                        className="form-control "
                                        placeholder="gender"
                                        value={gender}
                                        disabled
                                    />

                                </div>
                                <div className="col-md-6">
                                    <label className="form-label-emp" for="dob">Date of Birth:</label>
                                    <DatePicker
                                        required
                                        id="dob"
                                        name="dob"
                                        onChange={(e) => {
                                            setDOB(e);
                                        }}
                                        value={DOB}
                                        disabled
                                        dateFormat={"YYYY-MM-DD"}
                                        timeFormat={false}
                                        isValidDate={disableFutureDt}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="email">e-mail:</label>
                                    <input
                                        value={email}
                                        required
                                        id="email"
                                        type="email"
                                        className="form-control "
                                        placeholder="email"
                                        onChange={(e) => { { setEmail(e.target.value); validateEmail(e); } }}
                                    />
                                    <div className={`message ${isValid ? 'success' : 'error'}`}>
                                        {message}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label-emp" for="maritalStatus">Marital Status:</label>

                                    <input
                                        required
                                        id="maritalStat"
                                        type="text"
                                        className="form-control "
                                        placeholder="marital status"
                                        value={maritalStat}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="NIC">NIC:</label>
                                    <input
                                        required
                                        id="nic"
                                        type="text"
                                        className="form-control "
                                        placeholder="NIC"
                                        onChange={(e) => {
                                            setNIC(e.target.value);
                                            validateNIC(e);
                                        }}
                                        value={nic}
                                        disabled
                                    />
                                    <div className={`message ${isNICValid ? 'success' : 'error'}`}>
                                        {NICmessage}
                                    </div>

                                    {Object.keys(NICErr).map((key) => {
                                        // return <div style={{ color: "red" }}>{NICErr[key]}</div>
                                    })}


                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label-emp" for="designation">Designation:</label>
                                    <select
                                        id="designation"
                                        className="form-control "
                                        onChange={(e) => {
                                            setDesignation(e.target.value);
                                        }}
                                        value={designation}
                                    >
                                        <option id="rental sales agent">Rental Sales Agent</option>
                                        <option id="driver">Driver</option>
                                        <option id="service agent">Service Agent</option>
                                        <option id="automotive technician">Automotive Technician</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label className="form-label" for="CurrAdd">Current address:</label>
                                    <input
                                        required
                                        id="currAdd"
                                        type="text"
                                        className="form-control "
                                        placeholder="Current address"
                                        value={currAdd}
                                        onChange={(e) => {
                                            setCurrAdd(e.target.value);
                                        }}
                                    />
                                </div>
                                {/* <div className="form-group col-md-6">
                                    <label className="form-label" for="PermAdd">Permanant address:</label>
                                    <input
                                        required
                                        id="permAdd"
                                        type="text"
                                        className="form-control "
                                        placeholder="Permanant address"
                                        value={permAdd}
                                        onChange={(e) => {
                                            setPermAdd(e.target.value);
                                        }}
                                    />
                                </div> */}
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="MobileNo">Mobile number:</label>
                                    <input
                                        required
                                        id="mobileNo"
                                        type="number"
                                        className="form-control "
                                        placeholder="Mobile number"
                                        value={mobileNo}
                                        onChange={(e) => {
                                            setMobileNo(e.target.value);
                                            validateMobile(e);
                                        }}
                                    />

                                    <div className={`message ${isMobileNoValid ? 'success' : 'error'}`}>
                                        {MobileNoMessage}
                                    </div>
                                    {Object.keys(TeleErr).map((key) => {
                                        // return <div style={{ color: "red" }}>{TeleErr[key]}</div>
                                    })}

                                </div>
                                <div className="form-group col-md-6">
                                    <label className="form-label" for="homeContact">Home contact number:</label>
                                    <input
                                        required
                                        id="homeContact"
                                        type="number"
                                        className="form-control "
                                        placeholder="Home contact number"
                                        value={homeContact}
                                        onChange={(e) => {
                                            setHomeContact(e.target.value);
                                            validateHomeMobile(e);
                                        }}
                                    />

                                    <div className={`message ${isHomeNoNoValid ? 'success' : 'error'}`}>
                                        {HomeNoMessage}
                                    </div>
                                    {Object.keys(HomeTeleErr).map((key) => {
                                        // return <div style={{ color: "red" }}>{EmgTeleErr[key]}</div>
                                    })}

                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <div className="form-group">
                                        <label className="form-label-emp pb-3" for="empPic">Photo of the employee:</label>
                                        <input
                                            // required
                                            id="empPic"
                                            type="file"
                                            className="form-control-file"
                                            onChange={(e) => {
                                                setEmpPic(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-group">
                                        <label className="form-label-emp pb-3" for="cv">CV:</label>
                                        <input
                                            // required
                                            id="cv"
                                            type="file"
                                            className="form-control-file fliepond"
                                            onChange={(e) => {
                                                setCV(e.target.value);
                                            }}
                                        />
                                        {/* <FilePond
                                                    files={cv}
                                                    onupdatefiles={setCV}
                                                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                                /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok btn-success">
                                        Update
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset btn-warning" onClick={emp.onHide}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div >
    )
}

export default UpdateEmployee;