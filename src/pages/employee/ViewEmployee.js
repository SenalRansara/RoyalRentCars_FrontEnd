import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { deleteEmployee, getAllEmployeesService } from "../../services/EmployeeService";
import Header from "../../components/Header";

import UpdateEmployee from "./modals/UpdateEmployeeModal";


export default function ViewEmployee() {

const [emp, setEmp] = useState([]);
const [addEmpModal, setEmpModal] = useState(false);
const [updateEmployeeModal, setUpdateEmployeeModal] = useState(false);
const [updateData, setUpdateData] = useState();

//creting a method for retrieve data
useEffect(() => {
    getAllEmployeesService().then((res)=>{
        console.log("response", res);
        if(res.ok){
            setEmp(res.data);
        }
        else{
            setEmp([]);
        }
    })
}, []);


//Delete method implementation
function onDelete(data) {
    const empId = data.empId;
    let text = "Are you sure want to delete the Employee?";
        if (window.confirm(text) == true) {
            deleteEmployee(empId).then((res)=>{
                if(res.ok){
                    alert("Employee Deleted Successfully");
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
                    <button className="btn btn-sm btn-warning">Update</button>
                ),
                onClick: (event, rowData) => {
                    setUpdateEmployeeModal(true);
                    setUpdateData(rowData);
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
                { title: "Name", field: "employeeName", render: (emp) => emp.fName + " " + emp.lName, type: "string" },
                { title: "NIC", field: "nic", type: "string" },
                { title: "Email", field: "email", type: "string" },
                { title: "Designation", field: "designation", type: "string" },
                { title: "DOB", field: "DOB", type: "date"},
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
        <Modal show={updateEmployeeModal} onHide={()=>{
            setUpdateEmployeeModal(false)
        }}>
        
        <UpdateEmployee data={updateData} onHide={()=>{
            setUpdateEmployeeModal(false)
        }}/>
        </Modal> 
    
        </div>
        
        </div>
        </>
        
        );
    }
    