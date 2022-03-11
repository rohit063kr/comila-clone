import FeatureCard from "./FeatureCard";

const Feature = function () {
  return (
    <section className={`feature`}>
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
      <div className="feature__container mb-lg">
        <FeatureCard
          title="Responsive"
          description=" Lorem ipsum dolor sit amet, isque luctus lacus nulla, eget varius
              justo tristique ut."
        />

        <FeatureCard
          title="BOOTSTRAP"
          description=" Lorem ipsum dolor sit amet, isque luctus lacus nulla, eget varius
              justo tristique ut."
        />

        <FeatureCard
          title="Support"
          description=" Lorem ipsum dolor sit amet, isque luctus lacus nulla, eget varius
              justo tristique ut."
        />
      </div>
      <div className="text-align-center">
        <a href="#" className="btn btn--transparent btn-onhov-white">
          Talk to us
        </a>
      </div>
    </section>
  );
};

export default Feature;
