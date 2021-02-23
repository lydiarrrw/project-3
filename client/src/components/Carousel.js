import React from 'react'
import Slider from 'react-slick'


export default function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  }
  
  return <div className="carousel">
    <Slider {...settings}>
      <div>
        <img src="https://i.imgur.com/Bn1bU5Z.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/S6ni2j0.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/3BHkoIS.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/iIPyVgi.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/FgzlHZL.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/SoSAjB9.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/bEO98NP.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/TJqmziT.png" />
      </div>
      <div>
        <img src="https://i.imgur.com/r9kB9a9.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/KbcrZxb.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/rGlUAKP.jpg" />
      </div>
      <div>
        <img src="https://i.imgur.com/ZFN0A3j.jpg" />
      </div>
    </Slider>
  </div>
}
