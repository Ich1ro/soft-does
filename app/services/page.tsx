import React from 'react';
import Header from '../Components/Header/page'
import styles from './styles.module.scss'
import MainServices from '../Components/MainServices/page'
import ServicesDetails from '../Components/ServicesDetails/page'
import ServicesCollab from '../Components/ServicesCollab/page'
import Expertise from '../Components/Expertise/page'
import Portfolio from '../Components/Portfolio/page'
import Faq from '../Components/Faq/page'
import Footer from '../Components/Footer/page'

export default function page() {
  return (
    <div>
      <Header />
      <MainServices />
      <ServicesDetails />
      <ServicesCollab />
      <Expertise />
      <Portfolio />
      <Faq />
      <Footer/>
	  {/* <button className={styles.button}><div className={styles.inside}>Read more</div></button> */}
    </div>
  );
}
