import React from 'react'
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ handelDelete }) {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No feedback yet!</p>
    }
    return (
        // with animation, use "framer-motion" , look at the doc :)
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => ( 
            <motion.div 
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <FeedbackItem key={item.id} 
            item={item}
            handelDelete={handelDelete}/>
            </motion.div>
        ))}  
        </AnimatePresence>
    </div>
  )
//   without animation
  //     return (
//     <div className='feedback-list'>
//         {feedback.map((item) => ( 
//             <FeedbackItem key={item.id} 
//             item={item}
//             handelDelete={handelDelete}/>
//         ))}  
//     </div>
//   )
}


export default FeedbackList