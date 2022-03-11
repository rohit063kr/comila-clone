import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FeatureCard = function (props) {
  const { inView, ref } = useInView({ threshold: 0.15 });
  const [hideFeature, setHideFeature] = useState(true);

  useEffect(() => {
    setHideFeature(!inView);
  }, [inView]);

  return (
    <div
      className={`feature-card ${hideFeature && "feature-card__hidden"}`}
      ref={ref}
    >
      <i className="icon icon-refresh"></i>
      <div className="feature-card__text-box">
        <h2 className="feature-card__heading mb-sm">{props.title}</h2>
        <p className="feature-card__text">{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
