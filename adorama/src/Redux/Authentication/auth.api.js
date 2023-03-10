import axios from 'axios';
import {
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../firebase';

export const getUsersAPI = async () => {
  let response = await axios.get('http://localhost:8080/admins');
  return response.data;
};

export const allowLogInAPI = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const handleLogout = async () => {
  return await signOut(auth);
};

export const allowSignUpAPI = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const updateProfileAPI = async (user, firstName, lastName) => {
  await updateProfile(user, {
    displayName: `${firstName} ${lastName}`
  });
};

export const addCurrentUserAPI = async (currentUser) => {
  return await axios.post(`http://localhost:8080/users`, currentUser);
};

export const deleteCurrentUserAPI = async (email) => {
  return await axios.delete(`http://localhost:8080/users/${email}`);
};