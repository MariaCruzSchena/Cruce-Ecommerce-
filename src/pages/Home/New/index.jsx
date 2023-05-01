import React, { useState } from "react";
import { useSelector } from "react-redux";
import SmallGrid from "../../../components/Grid/SmallGrid";

const NewProducts = () => {
  const products = useSelector((state) => state.new);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <SmallGrid
      products={products}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      title="Novedades"
    />
  );
};

export default NewProducts;
