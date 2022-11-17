//modal popup for update recipe
import React,{useState,useEffect}from "react";
import { Modal } from "react-bootstrap";
import{updateBook} from "../../../services/BookService";

function UpdateBook(props) {

    console.log("yoy ",props);
    useEffect(()=>{
        setTitle(props.data.title);
        setAuthor(props.data.author);
        setCost(props.data.cost);
        
    },[])

    const [title, setTitle] = useState();
    const [author , setAuthor] = useState("");
    const [cost, setCost ] = useState("");
    

    function sendData(e){
        e.preventDefault()
        const Books = {
            title,
            author,
            cost,
        }

        //calling update service
        updateBook(props.data.id,Books).then((res)=>{
            if(res.ok){
                alert("Book Updated Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/*form to get data*/}
                <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                    <div class="form-row">
                        <div class="form-group-input">
                            <label for="inputFrom4">Title :</label>
                            <input type="text" class="form-control" id="inputFrom4" value={title}
                            onChange={(e) => {setTitle(e.target.value)}}/>
                        </div>
                        <div class="form-group-input">
                            <label for="inputTo4">Author:</label>
                            <input type="text" class="form-control" id="inputTo4" value={author} 
                            onChange={(e) => {setAuthor(e.target.value)}}/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group-input">
                            <label for="inputTo4">Cost:</label>
                            <input type="text" class="form-control" id="inputTo4" value={cost} 
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
            </Modal.Body>
            
        </div>
    )
}

export default UpdateBook;
