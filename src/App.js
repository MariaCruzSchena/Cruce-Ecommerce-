import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import {
  getAllProducts,
  getFavorite,
  getMostSearched,
  getNew,
  getRecommended,
} from "./utils";
import { setProducts } from "./state/products";
import { setFavorite } from "./state/favorite";
import { setMostSearched } from "./state/mostSearched";
import { setNew } from "./state/new";
import { setRecommended } from "./state/recommended";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts().then((res) => dispatch(setProducts(res)));
    getFavorite().then((res) => dispatch(setFavorite(res[0])));
    getMostSearched().then((res) => dispatch(setMostSearched(res)));
    getNew().then((res) => dispatch(setNew(res)));
    getRecommended().then((res) => dispatch(setRecommended(res)));  
  }, [dispatch]);

  return (
    <>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
