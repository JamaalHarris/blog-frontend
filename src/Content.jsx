import axios from "axios";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h2>{currentPost.title}</h2>
        <p>Title: {currentPost.title}</p>
        <p>Body: {currentPost.body}</p>
        <img src={currentPost.image} />
      </Modal>
    </div>
  );
}
