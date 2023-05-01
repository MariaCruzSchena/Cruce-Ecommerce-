import React, { useState } from "react";
import filter from "../../../assets/images/ui/filter.svg";
import arrowRight from "../../../assets/images/arrows/arrowRight.svg";
import arrowBottom from "../../../assets/images/arrows/arrowBottom.svg";
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

  const options = ["All", "Sale"];
  return (
    <div className={style.filterContainer}>
      <img className={style.filterIcon} src={filter} alt="filter" />
      <button className={style.filterBtn} onClick={handleDropdownToggle}>
        {selectedOption || "Filtrar por"}
      </button>
      <img className={style.filterIconDiff} src={!isDropdownOpen ? arrowRight : arrowBottom } alt="arrow" />

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
