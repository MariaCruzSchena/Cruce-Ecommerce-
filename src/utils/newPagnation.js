export const newPagination = (products, breakpoint, currentPage) => {
  const productsPerPage = breakpoint === "mobile" ? 2 : 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  return {
    currentProducts: currentProducts,
    totalPages: totalPages,
  };
};
