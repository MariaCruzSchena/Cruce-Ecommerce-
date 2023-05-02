import { getProducts } from "../lib";

export const getAllProducts = async () => {
  const products = await getProducts("coleccion", "100");
  return products.data;
};

export const getFavorite = async () => {
  const favorite = await getProducts("coleccion", "101");
  return favorite.data;
};

export const getMostSearched = async () => {
  const mostSearched = await getProducts("coleccion", "102");
  return mostSearched.data;
};

export const getNew = async () => {
  const newProducts = await getProducts("coleccion", "103");
  return newProducts.data;
};

export const getRecommended = async () => {
  const recommended = await getProducts("coleccion", "104");
  return recommended.data;
};

export const getList = async () => {
  const list = await getProducts("list");
  return list;
};

export const getListFiltered = async (query, type) => {  
  const list = await getProducts("list", `${query}`, `${type}` );
  return list;
};