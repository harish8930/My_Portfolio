import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
<h5>What Skills i have</h5>
<h2>My Experience</h2>

<div className='container experience_container'>
<div className='experience_frontend'>
<h3>Frontend Development</h3>
<div className='experience_content'>

  <article className='experience_details'>
    <BsPatchCheckFill className="experience_details-icon"/>
  <div>
  <h4>ReactJs</h4>
    <small className='text-light'>Experienced</small>
  </div>
  </article>



  <article className='experience_details'>
    <BsPatchCheckFill className="experience_details-icon"/>
  <div>
  <h4>Javascript</h4>
    <small className='text-light'>Experienced</small>
  </div>
  </article>


  <article className='experience_details'>
    <BsPatchCheckFill className="experience_details-icon"/>
<div>
<h4>Redux</h4>
    <small className='text-light'>Experienced</small>
</div>
  </article>


  <article className='experience_details'>
    <BsPatchCheckFill className="experience_details-icon"/>
<div>
<h4>Tailwind</h4>
    <small className='text-light'>Experienced</small>
</div>
  </article>


  <article className='experience_details'>
    <BsPatchCheckFill className="experience_details-icon"/>
  <div>
  <h4>Css</h4>
    <small className='text-light'>Experienced</small>
  </div>
  </article>


  <article className='experience_details'>
    <BsPatchCheckFill className="experience_details-icon"  />
  <div>
  <h4>Html</h4>
    <small className='text-light'>Experienced</small>
  </div>
  </article>


</div>
</div>
</div>
    </section>

  )
}

export default Experience