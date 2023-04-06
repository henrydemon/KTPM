const getStateData = (state) => state.order;

export const getListOrder = (state) => getStateData(state).orderList;
export const getTotalPages = (state) => getStateData(state).totalPages;
export const getCurrentPage = (state) => getStateData(state).currentPage;
export const getCurrentNameDetailOrder = (state) =>
  getStateData(state).detailOrder.name;
export const getCurrentEmailDetailOrder = (state) =>
  getStateData(state).detailOrder.email;
export const getCurrentAddressDetailOrder = (state) =>
  getStateData(state).detailOrder.address;
export const getCurrentTotalAmountOrder = (state) =>
  getStateData(state).detailOrder.totalAmount;
export const getListDetailOrder = (state) =>
  getStateData(state).detailOrder.totalAmount;

export const getListDetailOrderById = (state) =>
  getStateData(state).detailOrder.listDetailOrder;
export const getCurrentNameOrder = (state) =>
  getStateData(state).currentNameOrder;
