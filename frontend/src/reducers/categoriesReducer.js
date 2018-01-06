import {categoriesConst} from "../constants/categoriesConst";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case categoriesConst.GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoriesReducer;

