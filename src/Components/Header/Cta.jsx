import React from 'react'
//import CV from './Header/CV'
import CV from '../../assets/My Resume.pdf'

const Cta = () => {
  return (
    <div className='cta'>
<a href= {CV} download className="btn">Download CV</a>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>


    </div>
  )
}

export default Cta