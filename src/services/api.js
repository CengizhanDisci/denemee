// services/api.js
import axios from 'axios';

const PRODUCTS_API_URL = 'https://dummyjson.com/products';
const LOGIN_API_URL = 'https://dummyjson.com/auth/login';
const CATEGORIES_API_URL = 'https://dummyjson.com/products/categories';

export const getProducts = async () => {
  try {
    const response = await axios.get(PRODUCTS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(CATEGORIES_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(LOGIN_API_URL, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error during login', error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${PRODUCTS_API_URL}/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${category}`, error);
    throw error;
  }
};
