import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AbouticonLink() {
  return (
    <div className='about-link'>
         <Link to={{
             pathname: '/about',
             search:'?sort=name',
             hash:'#hello'
             }}> 
        <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AbouticonLink