import axios from "axios";

const HOST = "http://localhost:8080/api";

//calling the backend of API Methods as services

export const createBook = async (Payload) => {
    try {
    await axios.post(`${HOST}/book/save`, Payload);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, 
        err: error.response.data.status
    };
    }
};
//calling read operation
export const getAllBook = async () => {
    try {
    const response = await axios.get(`${HOST}/book/get`);
    //console.log("awaaa",response);
    return {
        ok: true,
        data: response.data.data
    };
    } catch (error) {
    return {
        ok: false,
    };
    }
};

//calling update operation
export const updateBook= async (id,Payload) => {
    try {
    await axios.put(`${HOST}/book/update/${id}`,Payload);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};

//calling delete operation
export const deleteBook= async (id) => {
    try {
        await axios.post(`${HOST}/book/delete/${id}`);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};
