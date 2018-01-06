import React, {Component} from "react";
import {Collapse, Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import propTypes from "prop-types";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
       collapse: true
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const {categories} = this.props;
    return (
      <nav className="sidebar">
        <Nav vertical>
          <NavItem>
            <NavLink
              className="nav-link home"
              activeClassName="active"
              exact
              to="/"
            >
              Home
            </NavLink>
          </NavItem>
        </Nav>

        <h4>
          <strong onClick={this.toggle}>
            Categories <span className="triangle-down" />
          </strong>
        </h4>
        <Collapse isOpen={this.state.collapse}>
          <Nav vertical>
            {categories && categories.map((category) => (
              <NavItem key={category.name}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={`/${category.path}`}
                >
                  {category.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </nav>
    )
  }
}

Sidebar.propTypes = {
  categories: propTypes.array,
  getCategoriesAction: propTypes.func
};

Sidebar.defaultProps = {
  categories: [],
  getCategoriesAction: () => false,
};


export default Sidebar;
