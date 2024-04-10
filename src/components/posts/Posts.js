import "./Posts.css";

import PostList from "./PostList";
import { defaultPosts } from "../../data/posts";

export const Posts = () => {
  return (
    <div>
      <PostList posts={defaultPosts} />
    </div>
  );
};

export default Posts;
