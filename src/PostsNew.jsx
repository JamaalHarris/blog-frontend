export function PostsNew() {
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
