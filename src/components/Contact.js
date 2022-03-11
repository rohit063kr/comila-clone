const Contact = function () {
  return (
    <section className="contact container-sm">
      <h1 className="heading-primary heading--black mb-sm">GET IN TOUCH</h1>
      <p className="contact__text mb-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
        volutpat.
      </p>

      <form className="form">
        <div className="form__field-group mb-li">
          <input type="text" placeholder="Your Name" className="form__input" />
          <input type="text" placeholder="Your Email" className="form__input" />
        </div>
        <div className="flex-container form__field-group mb-sm">
          <textarea
            className="form__input textarea"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="container-sm">
          <button className="button btn--black btn-onhov-yellow">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
