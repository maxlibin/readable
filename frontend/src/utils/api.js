import {baseUrl} from "../const";

const headers = {
  'Accept': 'application/json',
  'Authorization': "123456789",
  'Content-Type': 'application/json'
};

export const getCategories = () =>
  fetch(`${baseUrl}/categories`, {headers})
    .then((res) => res.json())
    .then((data) => data.categories);

export const getPosts = (category) => {
  if (category === "all") {
    return fetch(`${baseUrl}/posts`, {headers})
      .then((res) => res.json())
      .then((data) => data);
  }

  return fetch(`${baseUrl}/${category}/posts`, {headers})
    .then((res) => res.json())
    .then((data) => data);
};

export const getAllPosts = () =>
  fetch(`${baseUrl}/posts`, {headers})
    .then((res) => res.json())
    .then((data) => data);

export const getPostDetail = (id) =>
  fetch(`${baseUrl}/posts/${id}`, {headers})
    .then((res) => res.json())
    .then((data) => data);

export const addNewPost = (option) =>
  fetch(`${baseUrl}/posts`, {
    method: "POST",
    body: JSON.stringify(option),
    headers
  }).then((res) => res.json());

export const editPost = (id, option) =>
  fetch(`${baseUrl}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(option),
    headers
  }).then((res) => res.json());

export const deletePost = (id) =>
  fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
    headers
  }).then((res) => res.json());

export const doVote = (id, option) =>
  fetch(`${baseUrl}/posts/${id}`, {
    method: "POST",
    body: JSON.stringify({id, option}),
    headers,
  }).then((res) => res.json())
    .then((data) => data);

// COMMENTS
export const getComments = (id) =>
  fetch(`${baseUrl}/posts/${id}/comments`, {headers})
    .then((res) => res.json())
    .then((data) => data);

export const newComment = (option) =>
  fetch(`${baseUrl}/comments`, {
    method: "POST",
    body: JSON.stringify(option),
    headers
  }).then((res) => res.json())
    .then((data) => data);

export const deleteComment = (id) =>
  fetch(`${baseUrl}/comments/${id}`, {
    method: "DELETE",
    headers
  }).then((res) => res.json())
    .then((data) => data);

export const editComment = (id, option) =>
  fetch(`${baseUrl}/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify(option),
    headers
  }).then((res) => res.json())
    .then((data) => data);

export const voteComment = (id, option) =>
  fetch(`${baseUrl}/comments/${id}`, {
    method: "POST",
    body: JSON.stringify(option),
    headers
  }).then((res) => res.json())
    .then((data) => data);