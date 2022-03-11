const Header = function () {
  return (
    <header className="header">
      <div className="container-lg header__text-box">
        <h1 className="heading-primary heading--white header__heading">
          hello,we are comali
        </h1>
        <h3 className="heading-caption heading-caption--white">
          we are almost <strong>ready to launch</strong> our{" "}
          <strong>new creative</strong> website!
        </h3>
        <div className="header__btn-box">
          <a
            href="#"
            className="btn btn-onhov-yellow btn--transparent header__btn"
          >
            Let's begin
          </a>
          <a href="#" className="btn btn-onhov-yellow btn--white header__btn">
            Notify me!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
