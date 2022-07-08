import React from 'react'
import Banner1 from '../../Reusable/Banner/Banner1'
import ChoiceOfExam from '../Homepage/ChoiceOfExam/ChoiceOfExam'
import TeacherSay from '../Homepage/TeacherSay/TeacherSay'
import TrustedBy from '../Homepage/TrustedBy/TrustedBy'
import AboutUs from './AboutUs'
import HowItWork from './HowItWork'

import AboutCarousel from './TrustedBy/AboutCarousel'

type Props = {

}

const About = (props: Props) => {
    return (
        <>
            <div>
                <Banner1 title={'About'} catagory={'About'} />


                <div>

                    <AboutUs />

                </div>
                <div>
                    <HowItWork />
                </div>
                <div className=' '>
                    <TrustedBy />

                </div>


            </div>

        </>
    )
}

export default About