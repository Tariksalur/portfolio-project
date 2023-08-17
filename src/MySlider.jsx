import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Paypalimg from "./assets/resim/paypal.png";
import teslaAblm from "./assets/resim/tesla-ablem.jpg";
import Twitterimg from "./assets/resim/twitter.png";
import Spaceximg from "./assets/resim/spacex.jpg";
import Openimg from "./assets/resim/open.png";
import Thobboimg from "./assets/resim/thobbo.png";
const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Gösterilecek slayt sayısı
    slidesToScroll: 1, // Kaydırılan slayt sayısı
  };

  return (
    <Slider className="slidera" centerMode {...settings}>
      <div>
        <img className="img-paypal" src={Paypalimg} alt="paypal.png" />
      </div>
      <div>
        <img className="img-teslamblem" src={teslaAblm} alt="tesla-ablem.jpg" />
      </div>
      <div>
        <img className="img-twitter" src={Thobboimg} alt="thobbo.png" />
      </div>
      <div>
        <img className="img-twitter" src={Twitterimg} alt="twitter.png" />
      </div>
      <div>
        <img className="img-spacex" src={Spaceximg} alt="spacex.jpg" />
      </div>
      <div>
        <img className="img-open" src={Openimg} alt="open.png" />
      </div>
    </Slider>
  );
};

export default MySlider;
