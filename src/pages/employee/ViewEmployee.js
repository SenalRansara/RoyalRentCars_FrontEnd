import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { getAllEmployeesService } from "../../services/EmployeeService";

export default function ViewEmployee() {

const [emp, setEmp] = useState([]);
const [addEmpModal, setEmpModal] = useState(false);
const [updateEmpModal, setUpdateEmpModal] = useState(false);

//creting a method for retrieve data
useEffect(() => {
    getAllEmployeesService().then((res)=>{
        if(res.ok){
            setEmp(res.data);
        }
        else{
            setEmp([]);
        }
    })
}, []);

    //adding components to the page body
    return (
        /* side navigtaion bar components*/
        <div className="container" id="height">
    
            {/* implementing the meterial table for display data */}
    
            <div className="AllEmployeeTable">
            <div style={{ textAlign: "right"}}>
            <button className="btn btn-success"
                style={{ marginTop:"50px", marginBottom: "10px" }}>
                <a
                href="/AddEmployee"
                style={{ textDecoration: "none", color: "white"}}
                >
                {" "}
                Add New Employee
                </a>
            </button>
            </div>
            <MaterialTable style={{background:"#E3ECFF"}}
            title="Employee Details"
            actions={[
                {
                icon: () => (
                    <button className="btn btn-sm btn-warning">Edit</button>
                ),
                onClick: (event, rowData) => {
                    setUpdateEmpModal(true);
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
                { title: "Name", field: "employeeName", render: (emp) => emp.fName + " " + emp.lName, type: "string" },
                { title: "NIC", field: "nic", type: "string" },
                { title: "Email", field: "email", type: "string" },
                { title: "Designation", field: "designation", type: "string" },
                { title: "DOB", field: "dob", type: "string" },
                { title: "Gender", field: "gender", type: "string" },
                { title: "MobileNo", field: "mobileNo", type: "string" },
    
            ]}
            data={emp}
            options={{
                sorting: true,
                actionsColumnIndex: -1,
                exportButton: true,
            }}
            
            />
        </div>
        <div>
        <Modal show={addEmpModal} onHide={()=>{
            setEmpModal(false)
        }}>
        </Modal> 
    
        <Modal show={updateEmpModal} onHide={()=>{
            setUpdateEmpModal(false)
        }}>
        </Modal> 
    
        </div>
        
        </div>
        
        );
    }
    