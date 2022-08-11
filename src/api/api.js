import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPostsPage = async (pageParam = 1) => {
  // The jsonplaceholder api supports pagination by using the _page query parameter
  const response = await api.get(`/posts?_page=${pageParam}`);
  return response.data;
};
