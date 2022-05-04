import axios from "axios";

const HOST = "http://localhost:8000/api";


// for add an employee
export const addEmployeeService = async (employeePayload) => {
  try {
    await axios.post(`${HOST}/employee`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false, err: error.response.data.status
    };
  }
};


// for retrive the all employee records
export const getAllEmployeesService = async () => {
  try {
  const response = await axios.get(`${HOST}/employee`);
  console.log("Success",response);
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
export const updateEmployee = async (empId, employeePayload) => {
  try {
    await axios.put(`${HOST}/employee/update/${empId}`, employeePayload);
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
export const deleteEmployee = async (empId) => {
  try {
    await axios.post(`${HOST}/employee/delete/${empId}`);
    return {
      ok: true,
    };
  } catch (error) {
      return {
        ok: false, err: error.response.data.status
      };
  }
};

