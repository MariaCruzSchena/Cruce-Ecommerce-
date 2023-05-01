import React, { useState } from "react";
import arrowBottom from "../../../assets/images/arrows/arrowBottom.svg";
import arrowTop2 from "../../../assets/images/arrows/arrowTop2.svg";
import style from "./style.module.scss";
const Filter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const options = ["Precio asc", "Precio desc", "Nombre asc", "Nombre desc"];
  return (
    <div className={style.filterContainer}>
      
      <button className={style.filterBtn} onClick={handleDropdownToggle}>
        {selectedOption || "Ordenar por"}
      </button>
      <img className={style.filterIcon} src={!isDropdownOpen ? arrowBottom : arrowTop2} alt="arrow" />

      {isDropdownOpen && (
        <ul className={style.filterMenu}>
          {options.map((option) => (
            <li
              className={style.filterOption}
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
