function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="google.com">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="google.com"
            >
              Home
            </a>
            <a className="nav-link" href="google.com">
              Features
            </a>
            <a className="nav-link" href="google.com">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
