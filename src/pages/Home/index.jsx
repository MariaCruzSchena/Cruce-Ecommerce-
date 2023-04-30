import React from "react";
import Header from "../../layouts/Header";
import Popup from "./Popup";
import Sidebar from "./Sidebar";
import Grid from "./Grid";
import Carrousels from "./Carrousels";
import TodaysToy from "./TodaysToy";
import MostSearched from "./MostSearched";
import NewProducts from "./New";
import Recommended from "./Recommended";
import Backpacks from "./Backpacks";
const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(true);
  return (
    <div>
      <Header />
      {anchorEl ? (
        <Popup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      ) : null}
      <Sidebar />
      <Grid />
      <Carrousels />
      <TodaysToy />
      <MostSearched />
      <NewProducts />
      <Backpacks />
      <Recommended />
    </div>
  );
};

export default Home;
