/* Состояний не будет, потому просто создаем и экспортируем/ Используем простенький навбар из библиотеки материалайз */

function Header() {
  return (
    <nav className="purple lighten-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React SHOP
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Denis-Pankov/ReactShop-2" rel="noreferrer" target='_blank'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
