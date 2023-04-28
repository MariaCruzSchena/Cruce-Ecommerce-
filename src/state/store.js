import { configureStore } from "@reduxjs/toolkit";

import allProductsReducer from "./products";
import favoriteProductReducer from "./products";
import mostSearchedProductReducer from "./products";
import newProductsReducer from "./products";
import recommendedProductsReducer from "./products";

const store = configureStore({
  reducer: {
    products: allProductsReducer,
    favorite: favoriteProductReducer,
    mostSearched: mostSearchedProductReducer,
    new: newProductsReducer,
    recommended: recommendedProductsReducer
    
  },
});

export default store;