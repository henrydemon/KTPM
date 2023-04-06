const getStateData = (state) => state.product;

export const getListProduct = (state) => getStateData(state).productList;
export const getTotalPages = (state) => getStateData(state).totalPages;
export const getCurrentPage = (state) => getStateData(state).currentPage;
export const getDetailProduct = (state) => getStateData(state).detailProduct;
