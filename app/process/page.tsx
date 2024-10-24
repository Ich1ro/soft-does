import React from 'react'
import style from './styles.module.scss'
import Header from '../Components/Header/page'
import MainIndusties from '../Components/MainIndustries/page'
import { ExperienceInIndustries } from '../Components/ExperienceInIndustries/page'
import Expertise from '../Components/Expertise/page'
import Videos from '../Components/Videos/page'
import Benefits from '../Components/Benefits/page'
import Portfolio from '../Components/Portfolio/page'
import Technology from '../Components/Technology/Technology'
import Faq from '../Components/Faq/page'
import Footer from '../Components/Footer/page'
import MainProcess from '../Components/MainProcess/page'
import ProcessContent from '../Components/ProcessContent/page'

export default function Process() {
  return (
	<div>
		<Header />
		<MainProcess />
		<ProcessContent />
		<Faq />
		<Footer />
	</div>
  )
}
