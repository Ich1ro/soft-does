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

export default function Industries() {
  return (
	<div>
		<Header />
		<MainIndusties />
		<ExperienceInIndustries />
		<Expertise />
		<Videos />
		<Benefits />
		<Portfolio />
		<Technology header="Technology and business insights" />
		<Faq />
		<Footer />
	</div>
  )
}
