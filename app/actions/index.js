export const PING = 'PING';
export const PONG = 'PONG';
export const GET_USERS = 'GET_USERS';
export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS = 'SET_USERS';
export const STORE_USERS = 'STORE_USERS';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const ERROR_FETCH_API_USER = 'ERROR_FETCH_API_USER';

export const ping = () => ({ type: PING });
export const pong = () => ({ type: PONG });
export const getUsers = () => ({ type: GET_USERS });
export const setUsers = () => ({  type: SET_USERS });
export const fetchUsers = () => ({  type: FETCH_USERS });
export const setUserToStore = payload => ({  type: STORE_USERS,payload });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
export const errorFetchApiUsers = payload => ({  type: ERROR_FETCH_API_USER,payload });
