import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <label for="title">Title:</label>
        <br />
        <input type="text" id="title" name="title" />
        <br />
        <label for="body">Body:</label>
        <br />
        <input type="text" id="body" name="body"></input>
        <br />
        <label for="image">Image:</label>
        <br />
        <input type="text" id="image" name="image" />
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
          <button>More Info!</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
