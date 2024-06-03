import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Card,
  CardText,
  CardImg,
  CardName
} from "./styles";
import './index.css'

const FeedbackCarousel = ({ data }) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const updateSlidePercentage = (entries) => {
      const entry = entries[0];
      const width = entry.contentRect.width;
      if (width <= 600) {
        setCenterSlidePercentage(100);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    const observer = new ResizeObserver(updateSlidePercentage);
    observer.observe(document.body);

    return () => {
      observer.unobserve(document.body);
    };
  }, []);

  return (
    <Carousel
      className="carousel-container"
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={false}
      emulateTouch={true}
      useKeyboardArrows={true}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={centerSlidePercentage}
      key={centerSlidePercentage}  // Force re-render when centerSlidePercentage changes
    >
      {data.map((feedback, index) => (
        <div key={index} >
          <Card>
            <CardImg src={feedback.img} alt={feedback.name} />
            <CardText >
              <CardName >{feedback.name}</CardName>
              {feedback.text}
            </CardText>
          </Card>
        </div>
      ))}
    </Carousel>
  )
}

export default FeedbackCarousel;
