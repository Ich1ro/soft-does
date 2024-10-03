import React from 'react';
import styles from './styles.module.scss';
import Header from '../Components/Header/page';
import MainExpertise from '../Components/MainExpertise/page';
import Expertise from '../Components/Expertise/page';
import ExpertTeam from '../Components/ExpertTeam/page';
import Portfolio from '../Components/Portfolio/page';
import Technology from '../Components/Technology/Technology';
import Faq from '../Components/Faq/page';
import Footer from '../Components/Footer/page';

export default function page() {
  return (
    <div>
      <Header />
      <MainExpertise />
      <Expertise />
      <ExpertTeam />
      <Portfolio />
      <Technology header="Technology and business insights" />
      <Faq />
      <Footer />
    </div>
  );
}
