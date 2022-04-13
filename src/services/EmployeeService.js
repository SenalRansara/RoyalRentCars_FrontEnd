import axios from "axios";

const HOST = "http://localhost:8000/api";


//for add an employee
export const addEmployeeService = async (employeePayload) => {
  try {
    await axios.post(`${HOST}/api/employee`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false, err: error.response.data.status
    };
  }
};

// //for update an employee
// export const updateEmployeeService = async (empId, employeePayload) => {
//   try {
//     await axios.put(`${HOST}/api/updateEmployee/${empId}`, employeePayload);
//     return {
//       ok: true,
//     };
//   } catch (error) {
//     return {
//       ok: false, err: error.response.data.status
//     };
//   }
// };

// //for retrive the all employee records
// export const getAllEmployeesService = async () => {
//   try {
//     const response = await axios.get(`${HOST}/api/employee`);
//     return {
//       ok: true,
//       data: response.data.data,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//     };
//   }
// };

// //for delete an employee and add him/her to past employee collection
// export const deleteEmployeeService = async (data, reason) => {

//   try {
//     await axios.post(`${HOST}/api/resignation`, { reason, ...data });
//     const response = await axios.post(`${HOST}/api/removeEmployee`, data);
//     if (response) {
//       return {
//         ok: true,
//       };
//     }
//   } catch (error) {
//     return {
//       ok: false, err: error.response.data.status
//     };
//   }

// };

// //for make an inquiry
// export const addInquiry = async (data) => {
//   try {
//     await axios.post("https://getform.io/f/d5448fa8-dff5-4ce0-a927-7ec55756f5a4", data);
//     return {
//       ok: true,
//     };
//   } catch (error) {
//     return {
//       ok: false, err: error.response.data.status
//     };
//   }
// };

// //for get all the past employee records
// export const getAllPastEmployeesService = async () => {
//   try {
//     const response = await axios.get(`${HOST}/api/pastEmployees`);
//     return {
//       ok: true,
//       data: response.data.data,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//     };
//   }
// };

// //for search on resigned employees
// export const searchEmployeesService = async (input) => {
//   try {
//     const response = await axios.get(`${HOST}/api/searchEmployees/${input}`);
//     return {
//       ok: true,
//       data: response.data.data,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//     };
//   }
// };

// //for search on resigned employees
// export const searchPastEmployeesService = async (input) => {
//   try {
//     const response = await axios.get(`${HOST}/api/searchEmployees/${input}`, { params: { type: "pastEmp" } });
//     return {
//       ok: true,
//       data: response.data.data,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//     };
//   }
// };

// // for generate report on employee
// export const searchForReport = async (payload) => {
//   try {
//     const response = await axios.get(`${HOST}/api/employeeReport/${payload.designation}/${payload.ageFrom}/${payload.ageTo}/${payload.gender}`);
//     if (!response.data.ok) {
//       return {
//         ok: false,
//       };
//     }
//     return {
//       ok: true,
//       data: response.data.data,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//     };
//   }
// };