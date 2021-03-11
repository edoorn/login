function Header() {
  return (
    <div className="pre-content">
      <a className="visually-hidden focusable" href="#main-content">
        Skip to Main Content
      </a>
      <header className="header">
        <div className="header__content">
          <a href="#" className="home">Garden Wiki</a>
        </div>
        <div className="header__content">
          <nav className="nav">
            <h2 className="visually-hidden">Main navigation</h2>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">Almanac</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">Frost Dates</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">Find Your Zone</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">Log In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
