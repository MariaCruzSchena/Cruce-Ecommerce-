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
import Countdown from "./Countdown";
import Backpacks from "./Backpacks";
import HalfCircleBtn from "../../components/UI/Buttons/HalfCircleBtn";
import Footer from "../../layouts/Footer";
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
      <Countdown />
      <Recommended />
      <HalfCircleBtn />
      <Footer />
    </div>
  );
};

export default Home;
