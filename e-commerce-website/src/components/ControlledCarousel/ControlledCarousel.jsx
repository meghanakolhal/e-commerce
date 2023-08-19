import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ fontSize: "26px" }}>
        <img src="/images/slide1.jpg" width="1700px" height="300px" />
        <Carousel.Caption>
          <h3>Explore Online Shoppe</h3>
          <p>Great deals and Offers Everyday</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/slide2.jpg" width="1600px" height="300px" />
        <Carousel.Caption>
          <h3>Explore Technologies</h3>
          <p>Laptops, Mobiles, i-pads, Note, Modems, Adapters, many more...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/images/slide7.webp" width="1550px" height="300px" />
        <Carousel.Caption style={{ color: "#1c4670" }}>
          <h3 >Explore Fashion </h3>
          <p> Rings , Jewels, Bangles, many more...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
