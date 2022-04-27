import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { getAllRental } from "../../services/RentalService";
import Header from "../../components/Header";

//import AddRental from "../modals/addRentalModal";
//import UpdateRental from "../modals/updateRentalModal";
//import Header from "../Header";


export default function RentalView() {


const [rental, setRental] = useState([]);
const [addRentalModal, setRentalModal] = useState(false);
const [updateRentalModal, setUpdateRentalModal] = useState(false);
//const [updateData, setUpdateData] = useState();



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

  //Delete method implementation
function onDelete(data) {
    const id = data.id;
    let text = "Are you sure want to delete the Rental?";
        if (window.confirm(text) == true) {
            deleteRecipe(id).then((res)=>{
                if(res.ok){
                    alert("Rental Deleted Successfully");
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

        <div className="AllRentalTable">
        <div style={{ textAlign: "right"}}>
        <button className="btn btn-success"
            style={{ marginTop:"50px", marginBottom: "10px" }}>
            <a
            href="/AddRental"
            style={{ textDecoration: "none", color: "white"}}
            >
            {" "}
            Add a new Rental
            </a>
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
                // setUpdateData(rowData);
            },
            },
            {
                icon: () => <button className="btn btn-sm btn-danger">Delete</button>,
                onClick: (event, rowData) => {
                    onDelete(rowData);
                },
                },
        ]}
        columns={[
            { title: "Customer", field: "customerName", type: "string" },
            { title: "NIC", field: "customerNIC", type: "string" },
            { title: "Vehicle Type", field: "vehicleType", type: "string" },
            { title: "From", field: "from", type: "string" },
            { title: "To", field: "to", type: "string" },
            { title: "Total Amount(LKR)", field: "paymentAmount", type: "string" },


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
    </>
    );
}

