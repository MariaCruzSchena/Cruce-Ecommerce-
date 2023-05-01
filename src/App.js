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
  getList,
  getListFiltered,
} from "./utils";
import { setProducts } from "./state/products";
import { setFavorite } from "./state/favorite";
import { setMostSearched } from "./state/mostSearched";
import { setNew } from "./state/new";
import { setRecommended } from "./state/recommended";
import { setList } from "./state/list";
import { setArray } from "./state/filters";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    getAllProducts().then((res) => dispatch(setProducts(res)));
    getFavorite().then((res) => dispatch(setFavorite(res[0])));
    getMostSearched().then((res) => dispatch(setMostSearched(res)));
    getNew().then((res) => dispatch(setNew(res)));
    getRecommended().then((res) => dispatch(setRecommended(res)));
    getList().then((res) => dispatch(setList(res.data.items)));
  }, [dispatch]);

  useEffect(() => {
    !filters.query && !filters.filter
      ? getList().then((res) => dispatch(setArray(res.data.items)))
      : getListFiltered(filters.query, filters.filter).then((res) =>
          dispatch(setArray(res.data.items))
        );
  }, [filters.query, filters.filter, dispatch]);
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
