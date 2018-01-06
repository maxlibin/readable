import {categoriesConst} from "../constants/categoriesConst";
import {getCategories} from "../utils/api";

export const getCategoriesAction = () => (dispatch) => {
  getCategories().then((res) => {
    dispatch({
      type: categoriesConst.GET_CATEGORIES,
      categories: res,
    });
  });
};
