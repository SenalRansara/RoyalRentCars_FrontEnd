import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { getAllVehicle } from "../../services/VehicleService";
import Header from "../../components/Header";

//import AddRental from "../modals/addRentalModal";
//import UpdateRental from "../modals/updateRentalModal";
//import Header from "../Header";


export default function VehicleView() {


const [vehicle, setVehicle] = useState([]);
const [addVehicleModal, setVehicleModal] = useState(false);
const [updateVehicleModal, setUpdateVehicleModal] = useState(false);
//const [updateData, setUpdateData] = useState();



  //creting a method for retrieve data
useEffect(() => {
    getAllVehicle().then((res)=>{
        if(res.ok){
            setVehicle(res.data);
        }
        else{
            setVehicle([]);
        }
    })
}, []);


// //creating function for add a Rental
// const addRental = () =>{
//     setRentalModal(true);
// }


  //adding components to the page body
    return (
    /* side navigtaion bar components*/
    <>
        <Header/>
    <div className="container" id="height">

        {/* implementing the meterial table for display data */}

        <div className="AllVehicleTable">
        <div style={{ textAlign: "right"}}>
        <button className="btn btn-success"
            style={{ marginTop:"50px", marginBottom: "10px" }}>
            <a
            href="/AddVehicle"
            style={{ textDecoration: "none", color: "white"}}
            >
            {" "}
            Add New Vehicle
            </a>
        </button>
        </div>
        <MaterialTable style={{background:"#E3ECFF"}}
        title="All Vehicles"
        actions={[
            {
            icon: () => (
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setUpdateVehicleModal(true);
                // setUpdateData(rowData);
            },
            },
            {
                icon: () => <button className="btn btn-sm btn-danger">Delete</button>,
                onClick: (event, rowData) => {
                    //onDelete(rowData);
                },
                },
        ]}
        columns={[
            { title: "Vehicle Reg No", field: "VehicleRegNo", type: "string" },
            { title: "Brand", field: "VehicleBrand", type: "string" },
            { title: "Model", field: "VehicleModel", type: "string" },
            { title: "Type", field: "VehicleType", type: "string" },
            { title: "Rate.(Rs.)", field: "RatePDay", type: "number" },
            { title: "Year Of Rent", field: "YearsRent", type: "string" }

        ]}
        data={vehicle}
        options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
        }}
        
        />
    </div>
    <div>
    <Modal show={addVehicleModal} onHide={()=>{
        setVehicleModal(false)
    }}>
    </Modal> 

    <Modal show={updateVehicleModal} onHide={()=>{
        setUpdateVehicleModal(false)
    }}>
    </Modal> 

    </div>
    
    </div>
    </>
    );
}

