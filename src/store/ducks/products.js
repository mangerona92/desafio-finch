import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  setProductsList: ["product"],
  prodcutsList: [],
  showAlertSuccess: ["isVisible"]
});

const INITIAL_STATE = [
  {
    showAlertProductSuccess: false
  }
];

const setProductsList = (state = INITIAL_STATE, action) => ({
  ...state,
  prodcutsList: action.characters
});

const setShowAlertSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    showAlertProductSuccess: action.isVisible
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_PRODUCTS_LIST]: setProductsList,
  [Types.SHOW_ALERT_SUCCESS]: setShowAlertSuccess
});
