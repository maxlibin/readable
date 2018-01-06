import React, {Component} from "react";
import propTypes from "prop-types";
import "./Posts.css";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      author: "",
      category: "",
    }
  }

  componentDidMount() {
    this.handleProps();
  }

  handleProps() {
    const {editPost, postDetail} = this.props;
    this.setState((state) => (editPost ? {...postDetail} : {...state}));
  }

  handleFormChange = (e) => {
    const input = e.target;

    this.setState((state) => ({
      ...state,
      [input.name]: input.value,
    }));
  };

  render() {
    let {categories, location, editPost, handleOnSubmit, title} = this.props;

    return (
      <div className="postForm">
        <h3 className="postEditorTitle">{title}:</h3>
        <div className="postEditor">
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="row">
              <div className="form-group col-2 text-left label">
                <strong>Title:</strong>
              </div>
              <div className="form-group col-10">
                <input
                  className="form-control block"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={(e) => this.handleFormChange(e)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-2 text-left label">
                <strong>Description:</strong>
              </div>
              <div className="form-group col-10">
              <textarea
                className="form-control block"
                type="text"
                name="body"
                value={this.state.body}
                onChange={(e) => this.handleFormChange(e)}
              />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-2 text-left label">
                <strong>Author:</strong>
              </div>
              <div className="form-group col-10">
                {editPost ? (
                  <input
                    className="form-control block"
                    type="text"
                    name="author"
                    readOnly
                    value={this.state.author}
                  />
                ) : (
                  <input
                    className="form-control block"
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={(e) => this.handleFormChange(e)}
                  />
                )}
              </div>
            </div>

            <div className="row">
              <div className="form-group col-2 text-left label">
                <strong>Category:</strong>
              </div>
              <div className="form-group col-10">
                {editPost ? (
                  <input
                    className="form-control block"
                    name="category"
                    type="text"
                    readOnly
                    value={this.state.category}
                  />
                ) : (
                  <select
                    name="category"
                    defaultValue={location}
                  >
                    {categories.map((category) => (
                      <option
                        value={category.name}
                        key={category.name}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <br />
            <div className="row">
              <div className="form-group col-12">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

PostForm.propTypes = {
  categories: propTypes.array,
  location: propTypes.string,
  handleOnSubmit: propTypes.func,
  editPost: propTypes.bool,
};

PostForm.defaultProps = {
  categories: [],
  location: "",
  handleOnSubmit: () => false,
  editPost: false,
};

export default PostForm;