import React, {Component} from "react";
import propTypes from "prop-types";
import "./Comments.css";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      body: "",
    }
  }

  componentDidMount() {
    if (this.props.editing) {
      this.setState({
        author: this.props.author,
        body: this.props.body,
      });
    }
  }

  handleOnChange = (item) => {
    this.setState({
      [item.name]: item.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      ...this.state,
      parentId: this.props.parentId,
    }, this.props.id);

    // reset form
    this.setState({
      author: "",
      body: "",
    });

    if (this.props.closeEdit) {
      this.props.closeEdit();
    }
  };

  render() {
    const {editing} = this.props;
    return (
      <form
        className="commentForm"
        onSubmit={(e) => this.handleOnSubmit(e)}
      >
        <h6>{editing ? "Edit your comment": "Add your comments:"}</h6>
        <div className="row form-inline">
          <div className="form-group col-3">
            Author:
          </div>
          <div className="form-group col-9">
            <input
              type="text"
              name="author"
              readOnly={!!editing}
              className="form-control"
              value={this.state.author}
              onChange={(e) => this.handleOnChange(e.target)}
            />
          </div>
        </div>

        <div className="row form-inline">
          <div className="form-group col-3">
            Comment:
          </div>
          <div className="form-group col-9">
            <textarea
              className="form-control"
              name="body"
              value={this.state.body}
              onChange={(e) => this.handleOnChange(e.target)}
            />
          </div>
        </div>

        <div className="row form-inline">
          <div className="form-group col-3" />
          <div className="form-group col-9">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }
};

CommentForm.propTypes = {
  onSubmit: propTypes.func,
  editing: propTypes.bool,
};

CommentForm.defaultProps = {
  onSubmit: () => false,
  editing: false,
};

export default CommentForm;