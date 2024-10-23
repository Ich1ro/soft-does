import styles from './styles.module.scss';

import Header from '../Components/Header/page';
import Footer from '../Components/Footer/page';
import Faq from '../Components/Faq/page';
import { ServiceOverview } from '../Components/ServiceOverview/ServiceOverview';
import { MainTechnologies } from '../Components/MainTechnologies/MainTechnologies';
import { TechnologiesList } from '../Components/TechnologiesList/TechnologiesList';

export default function page() {
  return (
    <div>
      <Header />
      <MainTechnologies />
      <TechnologiesList />
      <ServiceOverview />
      <Faq />
      <Footer />
    </div>
  );
}
