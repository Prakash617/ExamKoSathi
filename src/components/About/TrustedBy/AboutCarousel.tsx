import React, { Component } from "react";
import Slider from "react-slick";
import TrustedCard from "../../Homepage/TrustedBy/TrustedCard";



export default class AboutCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
            <TrustedCard/>
          </div>
          <div>
            <h3><TrustedCard/></h3>
          </div>
          <div>
            <h3><TrustedCard/></h3>
          </div>
          <div>
            <h3><TrustedCard/></h3>
          </div>
          <div>
            <h3><TrustedCard/></h3>
          </div>
        
          
         
        </Slider>
      </div>
    );
  }
}