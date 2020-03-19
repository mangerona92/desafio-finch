const initialState = {
  products: [],
  filteredProducts: [],
};

// Action Types
export const Types = {
  SET_PRODUCTS_LIST: 'product/setProductsList',
  SET_FILTERED_PRODUCTS_LIST: 'product/setFilteredProductsList',
};

// Action Creators
export function setProductsList(products) {
  console.log('camou products', products);
  return {
    type: Types.SET_PRODUCTS_LIST,
    payload: products,
  };
}

export function setFilteredProductsList(filteredProducts) {
  console.log('chamou filtered', filteredProducts);
  return {
    type: Types.SET_PRODUCTS_LIST,
    payload: filteredProducts,
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PRODUCTS_LIST:
      return { ...state, products: action.payload };
    case Types.SET_FILTERED_PRODUCTS_LIST:
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
}
