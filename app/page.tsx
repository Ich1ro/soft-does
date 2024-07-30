import About from './Components/About/page'
import CaseStudies from './Components/CaseStudies/page'
import Consulting from './Components/Development/Consulting/page'
import DigitalAdvisory from './Components/Development/DigitalAdvisory/page'
import Software from './Components/Development/Software/page'
import TeamAugmentation from './Components/Development/TeamAugmentation/page'
import Faq from './Components/Faq/page'
import Footer from './Components/Footer/page'
import Header from './Components/Header/page';
import Main from './Components/Main/page'
import Partners from './Components/Partners/page'
import Videos from './Components/Videos/page'
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Main />
			<Partners />
			<Software />
			<Consulting />
			<TeamAugmentation />
			<DigitalAdvisory />
			<Videos />
			<About />
			<CaseStudies />
			<Faq />
			<Footer />
		</main>
	);
}
