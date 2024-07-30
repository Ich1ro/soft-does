'use client'
import Image from "next/image";
import styles from "./Videos.module.scss";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const testimonials = [
  {
    video: '',
    text: "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they've been able to staff an effective development team in no time and perform as expected.”",
    name: 'SIMON JONES',
    position: 'CIO IN HEALTHCARE',
  },
  {
    video: '',
    text: "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they've been able to staff an effective development team in no time and perform as expected.”",
    name: 'JOHN DOE',
    position: 'CTO IN FINANCE',
  },
  {
    video: '',
    text: "“Yalantis has been a great fit for us because of their experience, responsiveness, value, and time to market. From the very start, they've been able to staff an effective development team in no time and perform as expected.”",
    name: 'JANE SMITH',
    position: 'CEO IN TECH',
  },
];

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

export default function Videos() {
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
    <div className={styles.container}>
      <h2>VIDEO TESTIMONIALS</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <video controls className={styles.video}>
              <source src={testimonial.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <h5>{testimonial.position}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
}
