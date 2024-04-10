import "./Posts.css";

import { useEffect, useState } from "react";

import PostList from "./PostList";
import { defaultPosts } from "../../data/posts";
import { getPosts } from "../../services/postService";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const posts = await getPosts();
      // console.log(posts);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log({ posts });

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;
