import React, {Component} from "react";
import Sidebar from "./Sidebar";
import propTypes from "prop-types";
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
import "./Layout.css";

class Layout extends Component {
  componentDidMount() {
    this.props.getCategoriesAction();
  }

  render() {
    const {categories} = this.props;
    return (
      <div className="App">
        <Navbar light className="main-navbar">
          <NavbarBrand href="/">Readable</NavbarBrand>
        </Navbar>

        <div className="main-container">
          <Sidebar categories={categories} />

          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  categories: propTypes.array,
  getCategoriesAction: propTypes.func
};

Layout.defaultProps = {
  categories: [],
  getCategoriesAction: () => false,
};

export default Layout;