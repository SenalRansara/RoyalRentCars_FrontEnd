import axios from "axios";

const HOST = "http://localhost:8000/api";


//calling the backend of API Methods as services

// export const createReservation = async (Payload) => {
//     try {
//     await axios.post(`${HOST}/addReservation`, Payload);
//     return {
//         ok: true,
//     };
//     } catch (error) {
//     return {
//         ok: false, err: error.response.data.status
//     };
//     }
// };
//calling read operation
export const getAllReservation = async () => {
    try {
    const response = await axios.get(`${HOST}/displayReservation`);
    console.log("done",response);
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