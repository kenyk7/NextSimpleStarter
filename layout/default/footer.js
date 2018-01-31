const menus = [
  {
    name: "Terms",
    url: "/"
  },
  {
    name: "Privacy",
    url: "/"
  },
  {
    name: "Security",
    url: "/"
  },
  {
    name: "Status",
    url: "/"
  },
  {
    name: "Help",
    url: "/"
  }
];

export default () => (
  <footer className="footer-page">
    <div className="container">
      <div className="footer-logo text-center">
        <p>© 2018 Next simple starter.</p>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12 text-center">
          <nav className="footer-nav">
            {menus.map((item, index) => (
              <a href="#" key={index}>{item.name}</a>
            ))}
          </nav>
          <br className="d-lg-none"/>
        </div>
      </div>
    </div>
  </footer>
);

