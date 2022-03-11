const Footer = function () {
  return (
    <footer className="footer">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="100"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z"></path>
      </svg>
      <div className="footer__container container-lg">
        <div className="comila">
          <h2 className="footer__heading heading--white">COMILA</h2>
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            luctus lacus nulla, eget varius justo tristique ut. Etiam a tellus
            magna.
          </p>
          <p className="footer__text">
            Copyright &copy; 2016 Your Company Designed by{" "}
            <span className="copy">Templatemo</span>
          </p>
        </div>
        <div className="studio">
          <h2 className="footer__heading heading--white">Our studio</h2>
          <p className="footer__text">
            120-240 aliquam augue libero,Convallis in vulputate 10220San
            Francisco, CA, USA
          </p>
          <ul className="footer__social">
            <li className="footer__social-items">
              <a href="#" className="footer__social-link">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="footer__social-items">
              <a href="#" className="footer__social-link">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="footer__social-items">
              <a href="#" className="footer__social-link">
                <i className="fa fa-behance"></i>
              </a>
            </li>
            <li className="footer__social-items">
              <a href="#" className="footer__social-link">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
