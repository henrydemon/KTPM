export const createDefaultAccount = () => ({
  accountList: [],
  messageLogin: "",
  token: "",
  totalPages: 0,
  currentPage: 0,
  currentAccount: {
    name: "",
    phone: "",
    role: 0,
    id: 0,
    lastName: "",
    email: "",
    authority: "",
  },
});

export const createDefaultTrademark = () => ({
  trademarkList: [],
  totalPages: 0,
  currentPage: 0,
  status: 0,
});

export const createDefaultCategory = () => ({
  categoryList: [],
  totalPages: 0,
  currentPage: 0,
  status: 0,
});

export const createDefaultOrder = () => ({
  orderList: [],
  totalPages: 0,
  currentPage: 0,
  detailOrder: {
    email: "",
    name: "",
    address: "",
    totalAmount: 0,
    listDetailOrder: [],
  },
});

export const createDefaultGoods = () => ({
  goodsList: [],
  totalPages: 0,
  currentPage: 0,
  detailGoods: {
    nameStaff: "",
    dateGoods: "",
    totalAmount: 0,
    listDetailGoods: [],
  },
  arrayStoreGoods: [],
});

export const createDefaultProduct = () => ({
  productList: [],
  totalPages: 0,
  currentPage: 0,
});

export const createDefaultCart = () => ({
  cartList: [],
  account: "",
  totalAmount: 0,
});
