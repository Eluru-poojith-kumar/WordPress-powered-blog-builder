import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      .then(response => setPosts(response.data))
      .catch(err => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <section>
      <h2>Recent Posts</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p>{post.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, "")}</p>
        </article>
      ))}
    </section>
  );
}

export default PostList;
