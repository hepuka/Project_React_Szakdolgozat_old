import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.error("Error while calling add User API", error);
  }
};

export const getUsers = async () => {
  try {
    const a = await axios.get(`${URL}/all`);
    console.log(a);

    return a;
  } catch (error) {
    console.error("Error while calling getUsers API", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/add/${id}`);
  } catch (error) {
    console.error("Error while calling getUser API", error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.error("Error while calling editUser API", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.error("Error while calling delete API", error);
  }
};

export const addDrink = async (data) => {
  try {
    return await axios.post(`${URL}/adddrink`, data);
  } catch (error) {
    console.error("Error while calling add Drink API", error);
  }
};

export const addCoffee = async (data) => {
  try {
    return await axios.post(`${URL}/addcoffee`, data);
  } catch (error) {
    console.error("Error while calling add Coffee API", error);
  }
};

export const addCake = async (data) => {
  try {
    return await axios.post(`${URL}/addcake`, data);
  } catch (error) {
    console.error("Error while calling add Cake API", error);
  }
};

export const getDrinks = async () => {
  try {
    let b = await axios.get(`${URL}/allproducts`);
    console.log(b);
    return b;
  } catch (error) {
    console.error("Error while calling getDrinks API", error);
  }
};

export const getCoffees = async () => {
  try {
    let b = await axios.get(`${URL}/allproducts`);
    console.log(b);
    return b;
  } catch (error) {
    console.error("Error while calling getCoffees API", error);
  }
};

export const getCakes = async () => {
  try {
    let b = await axios.get(`${URL}/allproducts`);
    console.log(b);
    return b;
  } catch (error) {
    console.error("Error while calling getCakes API", error);
  }
};

export const getOrders = async () => {
  try {
    const a = await axios.get(`${URL}/orders`);
    console.log(a);

    return a;
  } catch (error) {
    console.error("Error while calling getOrders API", error);
  }
};
