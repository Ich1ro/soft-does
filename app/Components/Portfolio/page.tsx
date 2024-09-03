'use client';
import React from 'react';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { portfolio } from '@/app/lib/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickArrow}`}
      style={{ ...style, display: 'block', right: '-40px' }}
      onClick={onClick}
    >
      <span className={styles.arrow}>{'>'}</span>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickArrow}`}
      style={{ ...style, display: 'block', left: '-40px' }}
      onClick={onClick}
    >
      <span className={styles.arrow}>{'<'}</span>
    </div>
  );
};

export default function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.main}>
      <div className={styles.container} id="videos">
        <h2>Portfolio</h2>
        <Slider {...settings}>
          {portfolio.map((item, index) => (
            <div key={index} className={styles.testimonial}>
              <Image alt="" className={styles.image} src=""></Image>
              <h4>{item.name}</h4>
              <h5>{item.position}</h5>
              <p>{item.text}</p>
              <button className={styles.button}>
                <div className={styles.inside}>Read more</div>
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
