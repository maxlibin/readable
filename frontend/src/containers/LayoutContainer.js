import {connect} from "react-redux";
import Layout from "../components/Layout";
import {getCategoriesAction} from "../actions/categoriesAction";

const LayoutContainer = connect(({categories}) => ({
  categories,
}), {
  getCategoriesAction,
})(Layout);

export default LayoutContainer;