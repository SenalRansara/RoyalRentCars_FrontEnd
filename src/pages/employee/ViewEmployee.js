import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import moment from 'moment';

// import Header from "../../components/Header";

import { getAllEmployeesService, searchEmployeesService } from "../../services/EmployeeService";

import ViewEmpModal from "./modals/ViewEmployee";
// import DeleteEmployeeModal from "./modals/deleteEmployee"
// import UpdateEmployeeModal from "./modals/updateEmployee";

export default function EmpList() {
    const [empList, setEmp] = useState([]);
    const [search, setSearch] = useState("");

    const [isFetching, setIsFetching] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    useEffect(() => {


        if (document.getElementById('submit').clicked) {
            searchEmployees();
        }

        getAllEmployeesService().then((data) => {

            if (data.ok && !isFetching) {

                setIsFetching(true);
                setModalLoading(false);
                setEmp(data.data.reverse());

            } else {
                setModalLoading(true);
            }

        }
        )

    }, []);

    useEffect(() => {

    }, [modalDataDelete]);

    //for search employees
    const searchEmployees = (e) => {

        e.preventDefault();

        searchEmployeesService(search).then((data) => {

            if (data.ok) {

                // setIsFetching(true);
                // setModalLoading(false);
                setEmp(data.data.reverse());

            } else {
                setModalLoading(true);
            }

        })


    }



    const openModalView = (emp) => {

        setData(emp);
        handleViewOnClick();

    }

    const handleViewOnClick = () => {

        setModalShow(true);

    }

    const openModalDelete = (data) => {

        setModalDataDelete(data);
        setModalDeleteConfirm(true);

    }

    const openModalUpdate = (data) => {

        setModalDataUpdate(data);
        setModalUpdate(true);

    }


    return (
        <div className="page-component-body " >

            {/* <Header></Header> */}

            <div className="table-emp">
                <div class="row table-head  mt-3">
                    <div class="col">
                        <h3 className="float-left">List of Employees</h3>
                    </div>
                    <a href="/addEmployee" className="float-right">
                        <button class="btn btn-ok white">
                            Add Employee
                        </button>
                    </a>
                    {/* <a href="/pastEmpList" class="float-right ml-4">
                        <button class="btn btn-ok white">
                            Past Employees
                        </button>
                    </a> */}
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>
                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form onSubmit={searchEmployees}>
                                    <input class="search_input" type="text" name="" placeholder="Search..." value={search} onChange={(event) => { setSearch(event.target.value) }} required />
                                    <button class="btn search_icon" type="submit" id="submit" name="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>NIC</th>
                            <th>e-mail</th>
                            <th>Date of Birth</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empList.map((employee) => {
                            return (

                                <tr>
                                    <td onClick={() => openModalView(employee)} data-toggle="tooltip" data-placement="right" title="Click to view details" className="view-td">
                                        {employee.fName + " " + employee.lName}
                                    </td>
                                    <td>{employee.nic}</td>
                                    <td>{employee.email}</td>
                                    <td>{moment(employee.DOB).format('YYYY-MMMM-D')}</td>
                                    <td>0{employee.mobileNo}</td>
                                    <td>
                                        <button
                                            class="btn btn-light btn-sm"
                                            onClick={() => openModalUpdate(employee)}
                                        >
                                            update
                                        </button>
                                        <button
                                            id="btnDelete"
                                            class="btn btn-danger btn-sm"
                                            onClick={() => openModalDelete(employee)}
                                        >
                                            remove
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* modal for view details of selected employee */}
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ViewEmpModal
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>

            {/* modal for delete employee record*/}
            {/* <Modal show={modalDeleteConfirm} onHide={() => setModalDeleteConfirm(false)} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this item ?</p>

                </Modal.Body>
                <Modal.Footer>
                    <div className="row">
                        <div className="col -6">
                            <button type="submit" className="btn btn-delete" onClick={() => { setModalDelete(true); setModalDeleteConfirm(false); }}>
                                Confirm
                            </button>
                        </div>
                        <div className=" col-6 text-right" onClick={() => setModalDeleteConfirm(false)}>
                            <button type="reset" className="btn btn-reset">
                                cancel
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal> */}

            {/* open delete form */}
            {/* <Modal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <DeleteEmployeeModal
                    data={modalDataDelete}
                    onHide={() => setModalDelete(false)}
                />
            </Modal> */}

            {/* modal for display while loading or on error */}
            <Modal show={modalLoading} size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <div class="d-flex justify-content-center mt-2">
                        <div class="spinner-grow text-danger" role="status">
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                        </div><div class="spinner-grow text-danger" role="status">
                        </div>

                        <span class="sr-only">something went wrong...</span>
                    </div>
                    <div class="d-flex justify-content-center mt-4 h5"> something went wrong</div>

                </Modal.Body>
                <Modal.Footer>

                    <div className="col py-3 text-center">
                        <button type="submit" className="btn btn-delete" onClick={() => { window.location.reload() }}>
                            Try again
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* modal for update the data of employee */}
            {/* <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <UpdateEmployeeModal
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal> */}
        </div >
    );
}




// import React, { useState, useEffect } from "react";
// import MaterialTable from "material-table";
// import { Modal } from "react-bootstrap";
// import { getAllEmployees } from "../../services/EmployeeService";

// export default function ViewEmployee() {

// const [emp, setEmp] = useState([]);
// const [addEmpModal, setEmpModal] = useState(false);
// const [updateEmpModal, setUpdateEmpModal] = useState(false);

// //creting a method for retrieve data
// useEffect(() => {
//     getAllEmployees().then((res)=>{
//         if(res.ok){
//             setEmp(res.data);
//         }
//         else{
//             setEmp([]);
//         }
//     })
// }, []);

//     //adding components to the page body
//     return (
//         /* side navigtaion bar components*/
//         <div className="container" id="height">
    
//             {/* implementing the meterial table for display data */}
    
//             <div className="AllEmployeeTable">
//             <div style={{ textAlign: "right"}}>
//             <button className="btn btn-success"
//                 style={{ marginTop:"50px", marginBottom: "10px" }}>
//                 <a
//                 href="/AddEmployee"
//                 style={{ textDecoration: "none", color: "white"}}
//                 >
//                 {" "}
//                 Add New Employee
//                 </a>
//             </button>
//             </div>
//             <MaterialTable style={{background:"#E3ECFF"}}
//             title="Employee Details"
//             actions={[
//                 {
//                 icon: () => (
//                     <button className="btn btn-sm btn-warning">Edit</button>
//                 ),
//                 onClick: (event, rowData) => {
//                     setUpdateEmpModal(true);
//                     // setUpdateData(rowData);
//                 },
//                 },
//                 {
//                     icon: () => <button className="btn btn-sm btn-danger">Delete</button>,
//                     onClick: (event, rowData) => {
//                         //onDelete(rowData);
//                     },
//                     },
//             ]}
//             columns={[
//                 { title: "Name", field: "employeeName", type: "string" },
//                 { title: "NIC", field: "nic", type: "string" },
//                 { title: "Email", field: "email", type: "string" },
//                 { title: "Designation", field: "designation", type: "string" },
//                 { title: "DOB", field: "dob", type: "string" },
//                 { title: "Gender", field: "gender", type: "string" },
//                 { title: "MobileNo", field: "mobileNo", type: "string" },
    
    
//             ]}
//             data={emp}
//             options={{
//                 sorting: true,
//                 actionsColumnIndex: -1,
//                 exportButton: true,
//             }}
            
//             />
//         </div>
//         <div>
//         <Modal show={addEmpModal} onHide={()=>{
//             setEmpModal(false)
//         }}>
//         </Modal> 
    
//         <Modal show={updateEmpModal} onHide={()=>{
//             setUpdateEmpModal(false)
//         }}>
//         </Modal> 
    
//         </div>
        
//         </div>
        
//         );
//     }