const getStateData = (state) => state.category;

export const getListCategory = (state) => getStateData(state).categoryList;
export const getTotalPages = (state) => getStateData(state).totalPages;
export const getCurrentPage = (state) => getStateData(state).currentPage;
export const getCurrentNameCategory = (state) =>
  getStateData(state).currentNameCategory;
