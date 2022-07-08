import React from 'react'
import Banner1 from '../../Reusable/Banner/Banner1'
import ChoiceOfExam from '../Homepage/ChoiceOfExam/ChoiceOfExam'

type Props = {
   
}

const Exam = (props: Props) => {
    return (
        <>
            <div>
                <Banner1 title={'Exams'} catagory={'Exams'}/>
                   
                
                <ChoiceOfExam/>
            </div>

        </>
    )
}

export default Exam