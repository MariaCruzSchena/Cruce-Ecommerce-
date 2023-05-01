import { configureStore } from "@reduxjs/toolkit";

import allProductsReducer from "./products";
import favoriteProductReducer from "./favorite";
import mostSearchedProductReducer from "./mostSearched";
import newProductsReducer from "./new";
import recommendedProductsReducer from "./recommended";
import listReducer from "./list"
import filtersReducer from "./filters"

const store = configureStore({
  reducer: {
    products: allProductsReducer,
    favorite: favoriteProductReducer,
    mostSearched: mostSearchedProductReducer,
    new: newProductsReducer,
    recommended: recommendedProductsReducer,
    list: listReducer,
    filters: filtersReducer
    
  },
});

export default store;