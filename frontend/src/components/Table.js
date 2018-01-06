import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {orderBy} from "lodash";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: "title",
      sortDirection: "desc"
    }
  }

  handleSort = (sortBy) => {
    this.setState({
      sort: sortBy,
      sortDirection: this.state.sortDirection === "asc" ? "desc" : "asc",
    });
  };

  renderHeader = () => {
    return (
      <tr>
        <th />
        <th
          onClick={() => this.handleSort("title")}
          className={`sortable ${this.state.sort === "title" ? `sort_${this.state.sortDirection}` : ""}`}
        >
          Title
        </th>
        <th
          onClick={() => this.handleSort("commentCount")}
          className={`sortable ${this.state.sort === "commentCount" ? `sort_${this.state.sortDirection}` : ""}`}
        >
          Comments
        </th>
        <th
          colSpan="2"
          onClick={() => this.handleSort("voteScore")}
          className={`sortable ${this.state.sort === "voteScore" ? `sort_${this.state.sortDirection}` : ""}`}
        >
          Scores
        </th>
        <th/>
        <th/>
        <th />
      </tr>
    )
  };

  renderBody = (post) => {
    return (
      <tr
        key={post.title}
        onClick={() => this.props.history.push(`/${post.category}/${post.id}`)}
      >
        <td />
        <td>
          <h4>{post.title}</h4>
          <small>posted by {post.author} in {post.category} on {post.date}</small>
        </td>
        <td>
          {post.commentCount}
        </td>
        <td className="scores">
          {post.voteScore}
        </td>
        <td className="voting">
          <span
            className="arrow up"
            onClick={(e) => {
              e.stopPropagation();
              this.props.vote(post.id, "upVote");
            }}
          />
          <span
            className="arrow down"
            onClick={(e) => {
              e.stopPropagation();
              this.props.vote(post.id, "downVote");
            }}
          />
        </td>
        <td className="delete">
          <span
            className="editBtn"
            onClick={(e) => {
              e.stopPropagation();
              this.props.history.push(`/post/${post.id}/edit`);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21.589 21.589">
              <path d="M18.622 8.371l-.545-1.295s1.268-2.861 1.156-2.971l-1.679-1.639c-.116-.113-2.978 1.193-2.978 1.193l-1.32-.533S12.09.226 11.93.226H9.561c-.165 0-1.244 2.906-1.244 2.906l-1.318.535S4.077 2.425 3.965 2.536L2.289 4.177c-.116.113 1.218 2.916 1.218 2.916l-.545 1.293S0 9.527 0 9.681v2.322c0 .162 2.969 1.219 2.969 1.219l.545 1.291s-1.268 2.859-1.157 2.969l1.678 1.643c.114.111 2.977-1.195 2.977-1.195l1.321.535s1.166 2.898 1.327 2.898h2.369c.164 0 1.244-2.906 1.244-2.906l1.322-.535s2.916 1.242 3.029 1.133l1.678-1.641c.117-.115-1.22-2.916-1.22-2.916l.544-1.293s2.963-1.143 2.963-1.299v-2.32c.001-.161-2.967-1.215-2.967-1.215zm-4.366 2.423c0 1.867-1.553 3.387-3.461 3.387-1.906 0-3.461-1.52-3.461-3.387s1.555-3.385 3.461-3.385c1.909.001 3.461 1.518 3.461 3.385z"/>
            </svg> Edit
          </span>
        </td>
        <td
          className="delete"
          onClick={(e) => {
            e.stopPropagation();
            this.props.delete(post.id)
          }}
        >
          <span className="deleteBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 459 459">
              <path d="M76.5 408c0 28.05 22.95 51 51 51h204c28.05 0 51-22.95 51-51V102h-306v306zM408 25.5h-89.25L293.25 0h-127.5l-25.5 25.5H51v51h357v-51z" />
            </svg>
          </span>
        </td>
        <td />
      </tr>
    )
  };

  render() {
    let {posts} = this.props;
    posts = orderBy(posts, [this.state.sort], [this.state.sortDirection]);

    return (
      <div className="tableContainer">
        <table>
          <thead>
            {this.renderHeader()}
          </thead>

          <tbody>
            {posts && posts.length === 0 && (
              <tr className="empty-posts">
                <td colSpan="99">
                  <p className="text-center">There where have no posts for this category, please contribute one.</p>
                </td>
              </tr>
            )}

            {posts && posts.map((post) => (
              <Fragment key={post.id}>
                {this.renderBody(post)}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

Table.propTypes = {
  doVoteAction: PropTypes.func,
  deletePostAction: PropTypes.func,
};

Table.defaultProps = {
  vote: () => false,
  deletePostAction: () => false,
};

export default Table;