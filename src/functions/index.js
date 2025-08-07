import products from "../data/products.json";

export const paginatedProducts = (page) => {
    const {productos} = products;
    const PRODUCTS_PER_PAGE = 6;
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const currentProducts = productos.slice(startIndex, endIndex);
    return currentProducts;
};