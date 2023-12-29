"use client"

import Image from 'next/image'
import { Card, Col, Row, Container } from 'react-bootstrap'
import Slider from 'react-slick'

export default function EquipmentCarousel({ props }) {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      },
    ]
  };

  return (
    <Slider {...settings}>
      {
        props.map(equipment => {
          equipment.name = equipment.name.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join(" ");

          return (
            <Card key={equipment.id} className="rounded-3 h-100 pt-4 px-4">
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src={`https://spoonacular.com/cdn/equipment_500x500/${equipment.image}`}
                  alt={equipment.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-top-3"
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
                />
              </div>
              <Row className="mb-2 pt-4 px-4">
                <h5 className="text-center">{equipment.name}</h5>
              </Row>
            </Card>
          )
        })
      }
    </Slider>
  )
}
