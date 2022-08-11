import { getPostsPage } from "./api/api";
import { useState, useEffect } from "react";
import Post from "./Post";

const Example = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve first page of posts from the api upon loading
    getPostsPage(page).then((json) => setPosts(json));
  }, [page]);

  // Create a Post element for each post in the list of posts
  const content = posts.map((post) => <Post key={post.id} post={post} />);

  // Increment the page counter by one, which will force a component reload and a new use effect call
  const nextPage = () => setPage((prev) => prev + 1);

  // Decrement the page counter by one, which will force a component reload and a new use effect call
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <>
      <nav>
        <button onClick={prevPage} disabled={page === 1}>
          Prev Page
        </button>
        <button onClick={nextPage} disabled={!posts.length}>
          Next Page
        </button>
      </nav>
      <main>
        <section>
          <h1>Posts</h1>
          {content}
        </section>
      </main>
    </>
  );
};
export default Example;
