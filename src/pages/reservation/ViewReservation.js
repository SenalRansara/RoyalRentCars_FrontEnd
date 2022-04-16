import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { getAllReservation } from "../../services/ReservationService";
import Header from "../../components/Header";

//import AddReservation from "../modals/addReservationModal";
//import UpdateReservation from "../modals/updateReservationModal";
//import Header from "../Header";


export default function ReservationView() {


const [reservation, setReservation] = useState([]);
const [addReservationModal, setReservationModal] = useState(false);
const [updateReservationModal, setUpdateReservationModal] = useState(false);
//const [updateData, setUpdateData] = useState();



 // method for display data
useEffect(() => {
    getAllReservation().then((res)=>{
        if(res.ok){
            console.log("res data",res.data);
            setReservation(res.data);
        }
        else{
            setReservation([]);
        }
    })
}, []);


// //creating function for add a Reservation
// const addReservation = () =>{
//     setReservationModal(true);
// }


  //adding components to the page body
    return (
    /* side navigtaion bar components*/
    <>
        <Header/>
    <div className="container" id="height">

        {/* implementing the meterial table for display data */}

        <div className="AllReservationTable">
        <div style={{ textAlign: "right"}}>
        <button className="btn btn-success"
            style={{ marginTop:"50px", marginBottom: "10px" }}>
            <a
            href="/AddReservation"
            style={{ textDecoration: "none", color: "white"}}
            >
            {" "}
            Add a new Reservation
            </a>
        </button>
        </div>
        <MaterialTable style={{background:"#E3ECFF"}}
        title="All Reservation"
        actions={[
            {
            icon: () => (
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setUpdateReservationModal(true);
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
            { title: "ID", field: "reservationID", type: "string" },
            { title: "Customer", field: "customerName", type: "string" },
            { title: "Telephone", field: "contactNumber", type: "numeric" },
            { title: "Event Type", field: "eventType", type: "string"},
            { title: "Vehicle Type", field: "vehicleType", type: "string" },
            { title: "Vehicle Count", field: "numberOfVehivles", type: "numeric" },
            { title: "From", field: "from", type: "date" },
            { title: "To", field: "to", type: "date" },
            

        ]}
        data={reservation}
        options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
        }}
        
        />
    </div>
    <div>
    <Modal show={addReservationModal} onHide={()=>{
        setReservationModal(false)
    }}>
    </Modal> 

    <Modal show={updateReservationModal} onHide={()=>{
        setUpdateReservationModal(false)
    }}>
    </Modal> 

    </div>
    
    </div>
    </>
    );
}

