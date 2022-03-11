import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import featureImg1 from "../assets/img/about-img.png";

const About = function () {
  const { inView, ref } = useInView({ threshold: 0.15 });
  const [isHideAbout, setIsHideAbout] = useState(true);

  useEffect(() => {
    setIsHideAbout(!inView);
  }, [inView]);

  return (
    <section className={`about ${isHideAbout && "about-hide"}`} ref={ref}>
      <div className="container-lg">
        <div className="row">
          <img src={featureImg1} className="col-1-of-2" />
          <div className="col-1-of-2 about__text-box">
            <h1 className="heading-primary heading-white mb-sm">our company</h1>
            <h1 className="heading-caption heading-white mb-md">
              COMILA STUDIO IS BASED IN HONG KONG
            </h1>
            <p className="about__text ">
              Vivamus elit risus, porttitor id placerat ut, aliquet non quam.
              Pellentesque nulla metus, ornare et porttitor vel, consectetur
              vitae erat. Vestibulum tristique semper tellus vitae condimentum.
              Duis sed eros eget diam dictum posuere.
            </p>
            <p className="about__text">
              Aliquam vel gravida ligula. Phasellus ut purus ac libero ultrices
              commodo commodo at quam. In vestibulum purus sit amet tempus
              euismod. Donec sed congue nisl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
