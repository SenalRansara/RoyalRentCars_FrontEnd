import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import {Link} from "react-router-dom";
import { getAllRental } from "../../services/RentalService";

//import AddRental from "../modals/addRentalModal";
//import UpdateRental from "../modals/updateRentalModal";
//import Header from "../Header";


export default function RentalView() {


const [rental, setRental] = useState([]);
const [addRentalModal, setRentalModal] = useState(false);
const [updateRentalModal, setUpdateRentalModal] = useState(false);
const [updateData, setUpdateData] = useState();



  //creting a method for retrieve data
useEffect(() => {
    getAllRental().then((res)=>{
        if(res.ok){
            setRental(res.data);
        }
        else{
            setRental([]);
        }
    })
}, []);


//creating function for add a Rental
const addRental = () =>{
    setRentalModal(true);
}


  //adding components to the page body
    return (
    /* side navigtaion bar components*/
    <div className="container" id="height">

        {/* implementing the meterial table for display data */}

        <div className="AllRentalTable">
        <div style={{ textAlign: "right"}}>
            <button className="btn btn-success" style={{ margin: "10px"}} onClick={() => addRental()}>
                Add a new Rental
            </button>
        </div>
        <MaterialTable style={{background:"#E3ECFF"}}
        title="All Rental"
        actions={[
            {
            icon: () => (
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setUpdateRentalModal(true);
                setUpdateData(rowData);
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
            { title: "Customer", field: "customerName", type: "string" },
            { title: "Vehicle", field: "vehicleType", type: "string" },
            { title: "From", field: "from", type: "string" },
            { title: "To", field: "to", type: "string" },
            { title: "Total Amount", field: "paymentAmount", type: "string" },
            { title: "Status", field: "recDes", type: "string" },


        ]}
        data={rental}
        options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
        }}
        
        />
    </div>
    <div>
    <Modal show={addRentalModal} onHide={()=>{
        setRentalModal(false)
    }}>
    </Modal> 

    <Modal show={updateRentalModal} onHide={()=>{
        setUpdateRentalModal(false)
    }}>
    </Modal> 

    </div>
    
    </div>
    
    );
}

