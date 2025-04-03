
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import './App.css'
const products = [
  { id: 1, img: "https://images.unsplash.com/photo-1735192395659-3e0b4164b0ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" },
  { id: 2, img: "https://plus.unsplash.com/premium_photo-1739399397335-7db38b1b8255?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" },
  { id: 3, img: "https://images.unsplash.com/photo-1737265396686-00377dcd99d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExM3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" },
  { id: 4, img: "https://images.unsplash.com/photo-1733468221794-dd3344c6015e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyN3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" },
];

const App = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const { transform } = useSpring({
    transform: `rotateY(${-index * 90}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="carousel-container">
      <div className="carousel">
        <animated.div className="carousel-inner" style={{ transform }}>
          {products.map((product, i) => (
            <div key={product.id} className="carousel-item">
              <img src={product.img} alt={`Product ${i + 1}`} />
            </div>
          ))}
        </animated.div>
      </div>
      <button onClick={prevSlide} className="prev-btn">❮</button>
      <button onClick={nextSlide} className="next-btn">❯</button>
    </div>
  );
};

export default App