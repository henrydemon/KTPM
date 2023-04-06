const getStateData = (state) => state.goods;

export const getListGoods = (state) => getStateData(state).goodsList;
export const getTotalPages = (state) => getStateData(state).totalPages;
export const getCurrentPage = (state) => getStateData(state).currentPage;
export const getArrayGoods = (state) => getStateData(state).arrayStoreGoods;
export const getCurrentNameDetailGoods = (state) =>
  getStateData(state).detailGoods.nameStaff;
export const getCurrentDateDetailGoods = (state) =>
  getStateData(state).detailGoods.dateGoods;
export const getCurrentTotalAmountGoods = (state) =>
  getStateData(state).detailGoods.totalAmount;
export const getListDetailGoodsById = (state) =>
  getStateData(state).detailGoods.listDetailGoods;
