import axios from "axios";

const HOST = "http://localhost:8000/api";


//calling the backend of API Methods as services

export const createReservation = async (Payload) => {
    try {
        console.log("Payload",Payload)
    await axios.post(`${HOST}/addReservation`, Payload);

    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};
//calling read operation
export const getAllReservation = async () => {
    try {
    const response = await axios.get(`${HOST}/displayReservation`);
    console.log("Done",response);
    return {
        ok: true,
        data: response.data
    };
    } catch (error) {
    return {
        ok: false,
    };
    }
};

//calling update operation
export const updateReservation= async (id,Payload) => {
    try {
    await axios.put(`${HOST}/updateReservation/${id}`,Payload);
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
export const deleteReservation= async (id) => {
    try {
        await axios.post(`${HOST}/deleteReservation/${id}`);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};