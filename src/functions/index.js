import products from "../data/products.json";
const PRODUCTS_PER_PAGE = 6;

export const paginatedProducts = (page) => {
    const {productos} = products;
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const currentProducts = productos.slice(startIndex, endIndex);
    return currentProducts;
};

export const serializeProducts = (data) => data.slice(0, PRODUCTS_PER_PAGE);

export const getProducts = () => products;
// esta funcion deberia ser asincronica con un try/catch pero en este caso ya tengo el archivo con la data guardado. Solo la puse para simular una fc asincronica