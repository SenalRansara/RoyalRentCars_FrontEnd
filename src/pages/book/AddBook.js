import { React, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header";

//import moment from 'moment';

import { createBook } from "../../services/BookService";

function AddBook() {

    //setting all data into state 
    const [title, setTitle] = useState();
    const [author , setAuthor] = useState("");
    const [cost, setCost ] = useState("");
    const history = useHistory();

    function sendData(e){
        e.preventDefault()
        const newBook = {
            title,
            author,
            cost
        }

        //calling the add Book service 
        createBook(newBook).then((res)=>{
            if(res.ok){
                alert("Book Added Successfully");
                history.push("/AllBook");//redirected to the view page after success data entry
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
        <>
        <Header/>
        <div className="body-rental">
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                        <h3 className="header-rental">New Book</h3>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h6 className="text-left mt-4 mb-4" id="sub-heading">Book Details</h6>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/*form to get data*/}
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputFrom4">Title</label>
                                        <input type="text" class="form-control" id="inputFrom4" 
                                        onChange={(e) => {setTitle(e.target.value)}}/>
                                    </div>
                                    <div class="form-group-input">
                                        <label for="inputTo4">Author </label>
                                        <input type="text" class="form-control" id="inputTo4" 
                                        onChange={(e) => {setAuthor(e.target.value)}}/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group-input">
                                        <label for="inputTo4">Cost</label>
                                        <input type="text" class="form-control" id="inputTo4" 
                                        onChange={(e) => {setCost(e.target.value)}}/>
                                    </div>
                                </div>
                                
                                <div className="row mb-3">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok btn-success">
                                                Save
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset btn-warning">
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>

    )
}

export default AddBook;
