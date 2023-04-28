import React from "react";
import styles from "./style.module.scss"
import Searchbar from "./Searchbar";
import Details from "./Details";

const Sidebar = () => {
  return (
    <div className={styles.sidebarMainContainer}>
      <Searchbar />
      <Details />
    </div>
  );
};

export default Sidebar;
