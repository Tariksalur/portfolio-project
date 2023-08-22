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
    <Slider className="flex justify-center w-[100vw] " centerMode {...settings}>
      <div>
        <img className="px-16" src={Paypalimg} alt="paypal.png" />
      </div>
      <div>
        <img className="px-16" src={teslaAblm} alt="tesla-ablem.jpg" />
      </div>
      <div>
        <img className="px-16" src={Thobboimg} alt="thobbo.png" />
      </div>
      <div>
        <img className="px-16" src={Twitterimg} alt="twitter.png" />
      </div>
      <div>
        <img className="px-16" src={Spaceximg} alt="spacex.jpg" />
      </div>
      <div>
        <img className="px-16" src={Openimg} alt="open.png" />
      </div>
    </Slider>
  );
};

export default MySlider;
