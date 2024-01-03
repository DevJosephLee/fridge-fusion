"use client"

import { Col } from 'react-bootstrap';
import Slider from 'react-slick';

export default function NutritionCarousel({ props }) {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false
        }
      }
    ]
  };

  return (
    <Slider className="nutrition-carousel" {...settings}>
      {
        props.map(nutrition => {
          return (
            <Col key={nutrition.name}>
              <h4>{nutrition.amount}&nbsp;{nutrition.unit}</h4>
              <label>{nutrition.name}</label>
            </Col>
          );
        })
      }
    </Slider>
  );
};
