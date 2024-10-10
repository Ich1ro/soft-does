import s from './styles.module.scss';

import Header from '../Components/Header/page';
import Footer from '../Components/Footer/page';
import { MainInsights } from '../Components/MainInsights/MainInsights';
import Technology from '../Components/Technology/Technology';
import { Releases } from '../Components/Releases/Releases';
import { ContactUsForm } from '../Components/ContactUsForm/ContactUsForm';
import { releaseImages1 } from '../lib/data';

export default function page() {
  return (
    <div>
      <Header />
      <MainInsights />
      <Technology />
      <Releases images={releaseImages1} />
      <Releases images={releaseImages1} />
      <ContactUsForm />
      <Footer />
    </div>
  );
}
