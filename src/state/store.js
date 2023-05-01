import { configureStore } from "@reduxjs/toolkit";

import allProductsReducer from "./products";
import favoriteProductReducer from "./favorite";
import mostSearchedProductReducer from "./mostSearched";
import newProductsReducer from "./new";
import recommendedProductsReducer from "./recommended";
import listReducer from "./list"

const store = configureStore({
  reducer: {
    products: allProductsReducer,
    favorite: favoriteProductReducer,
    mostSearched: mostSearchedProductReducer,
    new: newProductsReducer,
    recommended: recommendedProductsReducer,
    list: listReducer
    
  },
});

export default store;