import React from 'react'
import Header from '../Components/Header/page'
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
