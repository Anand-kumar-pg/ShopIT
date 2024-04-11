import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ExampleCarouselImage = ({ text }) => {
  return (
    <Carousel slide={true} interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>You are on amazon.com. You can also shop on ShopIt India for millions of products with fast local delivery.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>You are on ShopIt.com. You can also shop on ShopIt India for millions of products with fast local delivery.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>You are on ShopIt.com. You can also shop on ShopIt India for millions of products with fast local delivery.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>You are on ShopIt.com. You can also shop on ShopIt India for millions of products with fast local delivery.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ExampleCarouselImage;


