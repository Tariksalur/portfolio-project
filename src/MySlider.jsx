import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resim3 from "../resim3/paypal.png";
import resim4 from "../resim4/tesla-ablem.jpg";
import resim6 from "../resim6/twitter.png";
import resim7 from "../resim7/spacex.jpg";
import resim8 from "../resim8/open.png";
import resim9 from "../resim9/thobbo.png";
import "./App.css";
const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Gösterilecek slayt sayısı
    slidesToScroll: 1, // Kaydırılan slayt sayısı
  };

  return (
    <Slider class="slidera" centerMode {...settings}>
      <div>
        <img class="img-paypal" src={resim3} alt="paypal.png" />
      </div>
      <div>
        <img class="img-teslamblem" src={resim4} alt="tesla-ablem.jpg" />
      </div>
      <div>
        <img class="img-twitter" src={resim9} alt="thobbo.png" />
      </div>
      <div>
        <img class="img-twitter" src={resim6} alt="twitter.png" />
      </div>
      <div>
        <img class="img-spacex" src={resim7} alt="spacex.jpg" />
      </div>
      <div>
        <img class="img-open" src={resim8} alt="open.png" />
      </div>
    </Slider>
  );
};

export default MySlider;
