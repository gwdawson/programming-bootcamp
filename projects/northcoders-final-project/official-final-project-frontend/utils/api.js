import axios from 'axios';

const ppApi = axios.create({
  baseURL: 'http://192.168.0.8:9090/api/',
});

export const postPrescription = async (newPrescription) => {
  const { data } = await ppApi.post(`/prescriptions`, newPrescription);
  return data.prescription;
};

export const getPrescriptionList = async (userId) => {
  const { data } = await ppApi.get(`/prescriptions/user/${userId}`);
  return data.prescriptions;
};

export const getUserPrescriptions = async (user) => {
  const { data } = await ppApi.get(`/prescriptions/user/${user._id}`);
  return data.prescriptions;
};

export const getUserByEmail = async (Email) => {
  const { data } = await ppApi.get(`/users/${Email}`);
  return data;
};

export const postUser = async (FirstName, LastName, Email, Password) => {
  const { data } = await ppApi.post(`/users`, {
    firstName: FirstName,
    lastName: LastName,
    email: Email,
    password: Password,
  });
  return data;
};
