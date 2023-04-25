export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(params, props.post.id);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>Title: {props.post.title}</p>
      <p>Body: {props.post.body}</p>
      <img src={props.post.image} />
      <form onSubmit={handleSubmit}>
        <div>
          <label for="title"> Title</label>
          <br />
          <input type="text" id="title" name="title" defaultValue={props.post.title} />
        </div>

        <div>
          <label for="body">Body</label>
          <br />
          <input defaultValue={props.post.body} name="body" type="text" />
        </div>

        <div>
          <label for="image">Image</label>
          <br />
          <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="delete" onClick={handleClick}>
          Delete Post
        </button>
      </form>
    </div>
  );
}
