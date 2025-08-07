const PRODUCTS_PER_PAGE = 6;

export const paginatedProducts = (page, products) => {
    const {productos} = products;
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const currentProducts = productos.slice(startIndex, endIndex);
    return currentProducts;
};

export const breakArray = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i += 6) {
    newArray.push(arr.slice(i, i + 6));
  };
  console.log(newArray);
  
  return newArray;
}

export const serializeProducts = (data) => data.slice(0, PRODUCTS_PER_PAGE);