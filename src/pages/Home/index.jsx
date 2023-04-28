import React from "react";
import Header from "../../layouts/Header";
import Popup from "./Popup";
import Sidebar from "./Sidebar";
import Grid from "./Grid";

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
    </div>
  );
};

export default Home;
