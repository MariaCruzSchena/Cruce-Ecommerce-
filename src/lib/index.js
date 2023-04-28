import axios from "axios";

const getProducts = async (route, query, type = null) => {
  try { 
    const url = !type? `https://desafio.e-cruce.com/api/v1/${route}?id=${query}` : `https://desafio.e-cruce.com/api/v1/${route}?${type}By=${query}`
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
      },
    };
    const products = await axios(url, options);
    if (!products) return "Couldn't find products";
    return products;
  } catch (error) {
    console.log(`Couldn't fetch products. Error: ${error}`);
  }
};



export { getProducts };
