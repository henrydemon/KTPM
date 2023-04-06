const getStateData = (state) => state.cart;

export const getListCart = (state) => getStateData(state).cartList;
export const getTotalAmount = (state) => getStateData(state).totalAmount;
export const getAccountCart = (state) => getStateData(state).account;
