import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { getAllVehicle,deleteVehicle } from "../../services/VehicleService";

import Header from "../../components/Header";
import UpdateVehicle from "./modals/UpdateVehicleModal";



export default function VehicleView() {


const [vehicle, setVehicle] = useState([]);
const [addVehicleModal, setVehicleModal] = useState(false);
const [updateVehicleModal, setUpdateVehicleModal] = useState(false);
const [updateData, setUpdateData] = useState();



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

//Delete method implementation

  function onDelete(data) {
    const id = data.id;
    let text = "Are you sure want to delete the vehicle?";
    // console.log("kaveen", data);
        if (window.confirm(text) == true) {
            deleteVehicle(id).then((res)=>{
                if(res.ok){
                    alert("Vehicle Deleted Successfully");
                    window.location.reload();
                }else{
                    alert("Something Went Wrong");
                }
            });
        } else {
            window.location.reload();
}
};

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
                setUpdateData(rowData);
            },
            },
            {
                icon: () => <button className="btn btn-sm btn-danger">Delete</button>,
                onClick: (event, rowData) => {
                    console.log("testing",rowData);
                    onDelete(rowData);
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
    <Modal show={updateVehicleModal} onHide={()=>{
        setUpdateVehicleModal(false)
    }}
    >
        <UpdateVehicle data = {updateData} onHide={()=>{
        setUpdateVehicleModal(false)}} />

    </Modal> 

    </div>
    
    </div>
    </>
    );
}

