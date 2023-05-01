import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss"
import wa from "../../assets/images/ui/wa.svg"
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
      <Link><img src={wa} alt="whatsapp" className={style.homeWA}/></Link>
      <Sidebar />
      <Grid />
      <Carrousels />
      <TodaysToy />
      <MostSearched />
      <NewProducts />
      <Backpacks />
      <Countdown />
      <Recommended />
      <HalfCircleBtn id="#up" />
      <Footer />
    </div>
  );
};

export default Home;
