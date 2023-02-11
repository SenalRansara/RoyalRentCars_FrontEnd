import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { getAllBook,deleteBook } from "../../services/BookService";
import Header from "../../components/Header";
import UpdateBook from "./modals/UpdateBookModal";
//import Header from "../Header";


export default function BookView() {


const [book, setBook] = useState([]);
const [addBookModal, setBookModal] = useState(false);
const [updateBookModal, setUpdateBookModal] = useState(false);
const [updateData, setUpdateData] = useState();



  //creting a method for retrieve data
useEffect(() => {
    getAllBook().then((res)=>{
        if(res.ok){
            setBook(res.data);
        }
        else{
            setBook([]);
        }
    })
}, []);

  //Delete method implementation
function onDelete(data) {
    const id = data.id;
    let text = "Are you sure want to delete the Book?";
        if (window.confirm(text) == true) {
            deleteBook(id).then((res)=>{
                if(res.ok){
                    alert("Book Deleted Successfully");
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

        <div className="AllBookTable">
        <div style={{ textAlign: "right"}}>
        <button className="btn btn-success"
            style={{ marginTop:"50px", marginBottom: "10px" }}>
            <a
            href="/AddBook"
            style={{ textDecoration: "none", color: "white"}}
            >
            {" "}
            Add a new Book
            </a>
        </button>
        </div>
        <MaterialTable style={{background:"#E3ECFF"}}
        title="All Book"
        actions={[
            {
            icon: () => (
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setUpdateBookModal(true);
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
            { title: "Title", field: "title", type: "string" },
            { title: "Author", field: "author", type: "string" },
            { title: "Cost($)", field: "cost", type: "string" },
           


        ]}
        data={book}
        options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
        }}
        
        />
    </div>
    <div>
    <Modal show={updateBookModal} onHide={()=>{
        setUpdateBookModal(false) 
    }}
    >
        <UpdateBook data = {updateData} onHide={()=>{
        setUpdateBookModal(false)}} />
        
    </Modal> 

    </div>
    
    </div>
    </>
    );
}

