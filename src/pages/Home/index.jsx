import React from "react";
import Header from "../../layouts/Header";
import Popup from "./Popup";
import Sidebar from "./Sidebar";
import { getProducts } from "../../lib";

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(true);

  const res = getProducts("list", "priceASC", "sort").then(res=>console.log(res))
  const res2 = getProducts("coleccion", 100).then(res=>console.log("COL", res))
  return (
    <div>
      <Header />
      {anchorEl ? (
        <Popup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      ) : null}
      <Sidebar />
    </div>
  );
};

export default Home;
