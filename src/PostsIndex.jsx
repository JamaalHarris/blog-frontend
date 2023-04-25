import { Link } from "react-router-dom";

export function PostsIndex(props) {
  console.log(props);
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post?.title}</h2>
          <img src={post?.image} />
          <p>{post?.body}</p>
          <button onClick={() => props.onShowPost(post)}>More Info!</button>
        </div>
      ))}
    </div>
  );
}
