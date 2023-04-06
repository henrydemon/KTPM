const getStateData = (state) => state.account;

export const getListUser = (state) => getStateData(state).accountList;
export const getMessageLogin = (state) => getStateData(state).messageLogin;
export const getToken = (state) => getStateData(state).token;
export const getTotalPages = (state) => getStateData(state).totalPages;
export const getCurrentPage = (state) => getStateData(state).currentPage;
export const getCurrentAccount = (state) => getStateData(state).currentAccount;
