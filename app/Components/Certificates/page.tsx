'use client';
import Slider from 'react-slick';
import s from './styles.module.scss';
import ibmCoCreation from '../../../public/certificates/ibm-co-creation.png';
import webDevFundamentals from '../../../public/certificates/web-development-fundamentals.png';
import pmCertificate from '../../../public/certificates/pm-certificate.png';
import artifactIntelligance from '../../../public/certificates/artifact-intellagence-certificate.png';
import developerEssentials from '../../../public/certificates/developer-essentials.png';
import awsCertificate from '../../../public/certificates/aws-certificate.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CERTIFICATES = [
  ibmCoCreation,
  webDevFundamentals,
  pmCertificate,
  artifactIntelligance,
  developerEssentials,
  awsCertificate,
];

export default function Certificates() {
  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth > 1024 ? 6 : 2);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <section className={s.root}>
      <Slider {...settings} className={s.sliderContainer}>
        {CERTIFICATES.map((item) => (
          <div key={item.src}>
            <Image
              aria-hidden
              alt=""
              src={item.src}
              width={item.width}
              height={item.height}
              className={s.certificateImage}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
