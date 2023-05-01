import axios from "axios";

const getProducts = async (route, query = null, type = null) => {
  try {
    let url = "";
    if (!query) {
      url = `https://desafio.e-cruce.com/api/v1/${route}`;
    } else {
      if (!type) {
        url = `https://desafio.e-cruce.com/api/v1/${route}?id=${query}`;
      } else {
        url = `https://desafio.e-cruce.com/api/v1/${route}?${type}By=${query}`;
      }
    }

    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
      },
    };
    
    const products = await axios(url, options);
    if (!products) return "Couldn't find products";
    return products;
  } catch (error) {
    console.log(`Couldn't fetch products. Error: ${error}`, error);
  }
};

export { getProducts };
