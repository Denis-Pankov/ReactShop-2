function Footer() {
  return (
    <footer className="page-footer purple lighten-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" rel="noreferrer" target='_blank' href="https://github.com/Denis-Pankov/ReactShop-2">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
