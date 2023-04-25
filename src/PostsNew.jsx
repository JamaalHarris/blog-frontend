export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
    window.location.href = "/";
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}
