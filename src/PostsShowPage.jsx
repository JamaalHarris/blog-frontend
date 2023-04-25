import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();
  const handleShowPost = () => {
    console.log(params);
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then(function (response) {
      console.log(response);
      setPost(response.data);
    });
  };
  useEffect(handleShowPost, []);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <img src={post.image} />
    </div>
  );
}
