import React from 'react'
import Btn1 from '../../Reusable/Button/Btn1'
import Caraousel1 from '../../Reusable/Caraousel/Caraousel1'
import AboutUs from './AboutUs/AboutUs'
import Banner from './Banner/Banner'
import BecomeTeacher from './BecomeTeacher/BecomeTeacher'
import ChoiceOfExam from './ChoiceOfExam/ChoiceOfExam'
import Footer from './Footer/Footer'
import HowItWork from './HowItWork/HowItWork'
import Intro from './Intro/Intro'

import NavBar from './Navbar/NavBar'
import TrustedBy from './TrustedBy/TrustedBy'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>

      <Intro />
      <AboutUs />
      <ChoiceOfExam />
      <BecomeTeacher />
      <HowItWork />
      <Banner />
      <TrustedBy />

    </>
  )
}

export default HomePage