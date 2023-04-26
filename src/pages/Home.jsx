import React from "react";
import Header from "../layouts/Header";
import Popup from "../components/Popup";

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(true);

  return (
    <div>
      <Header />
      {anchorEl ? (
        <Popup anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      ) : null}
    </div>
  );
};

export default Home;
