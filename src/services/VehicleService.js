import axios from "axios";

const HOST = "http://localhost:8000/api";


//calling the backend of API Methods as services

//calling add operation
export const createVehicle = async (Payload) => {
    try {
    await axios.post(`${HOST}/addVehicle`, Payload);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};

//calling view operation
export const getAllVehicle = async () => {
    try {
    const response = await axios.get(`${HOST}/viewVehicle`);

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
export const updateVehicle= async (id,Payload) => {
    try {
    await axios.put(`${HOST}/updateVehicle/${id}`,Payload);
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
export const deleteVehicle= async (id) => {
    try {
        await axios.post(`${HOST}/deleteVehicle/${id}`);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};