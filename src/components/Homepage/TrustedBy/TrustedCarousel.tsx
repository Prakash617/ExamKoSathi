import React, { Component } from "react";
import Slider from "react-slick";
import TrustedCard from "./TrustedCard";


export default class TrustedCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      customPaging: (i:any):any => (
        <div
          style={{
            borderRadius: '50%',
            position:'absolute',
            width: '10px',
            height: '10px',
            
            top: '2rem', 
            left: '45%', 
        
            transform: 'translate(-50%, -50%)',
            border: '2px solid #7436FF',
          }}
        >
         
        </div>
      )
    };
    return (
      <div>

        <Slider {...settings} >
          <div >
          <TrustedCard />
          </div>
          <div>
          <TrustedCard />
          </div>
          <div>
          <TrustedCard />
          </div>
          <div>
          <TrustedCard />
          </div>
          <div>
          <TrustedCard />
          </div>
          <div>
          <TrustedCard />
          </div>
          <div>
          <TrustedCard />
          </div>
          


        </Slider>
      </div>
    );
  }
}