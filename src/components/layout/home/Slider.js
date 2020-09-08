import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// import banner1 from '../../../img/banner1.jpg';

const items = [
  {
    src: '/banner-1.jpg',
    altText: '',
    caption: ''
  },
  {
    src: '/banner-2.png',
    altText: '',
    caption: ''
  },
  {
    src: '/banner-3.jpg',
    altText: '',
    caption: ''
  }
];

const Slider = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/* <img className='img-fluid' src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
        <div
          className='banner-img'
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className='position-relative'>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
      <div className='position-absolute signup-div'>
        <div className='signup-inner'>
          <div className='signup-title'>Vote for a loan, change a life.</div>
          <div className='mt-2'>
            Egoras empowers underserved people to achieve their dreams by
            on-chain governance of loans and unlocking capital.
          </div>
          <div className='mt-3'>
            <a
              // style={{ padding: '10px' }}
              className='play-btn custom-btn mr-3'
              target='_blank'
              href='https://youtu.be/nyjpESx83Uo'
            >
              <i className='fa custom-fa-x2 fa-play'></i>
            </a>
          
            <a className='btn-black custom-btn'>
              Connect Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
