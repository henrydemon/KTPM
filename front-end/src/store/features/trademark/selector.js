const getStateData = (state) => state.trademark;

export const getListTrademark = (state) => getStateData(state).trademarkList;
export const getTotalPages = (state) => getStateData(state).totalPages;
export const getCurrentPage = (state) => getStateData(state).currentPage;
export const getCurrentNameTrademark = (state) =>
  getStateData(state).currentNameTrademark;
