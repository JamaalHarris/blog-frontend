import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Blogrr</a>
          <a href="http://www.google.com">Home</a> | <a href="#posts-index">All Posts</a> |{" "}
          <a href="#posts-new">New Post</a>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <LogoutLink />
        </div>
      </nav>
    </header>
  );
}
