export default function Appheader(){
    return (
        <header>
      <a href="#" className="logo">
        <span style={{ color: "red" }}>PORT</span>folio
      </a>

      <nav className="navbar navbar-dark navbar-expand-lg">
        <button
          className="navbar-toggler"
          // style={{ margin: "0px auto" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <a href="#contact" className="contact">Contact</a>
      </div>
    </header>
  );
}