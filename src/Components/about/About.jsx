import React from 'react'
import './about.css'
import ME from '../../assets/myimage.jpeg'
//import {TbAwardFilled} from 'react-icons/tb'
//import {BiSolidUser} from 'react-icons/bi'
//import {VscFolderActive} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me </h2>
    <div className='container about_container'>
<div className='about_me'>
<div className='about_me-image'>
  <img src={ME} alt='me' />
</div>
</div>

<div className='about_content'>
<div className='about_cards'>

{/*
<article className='about_card'>
  <TbAwardFilled className='about-icon'/>
<h5>Experience</h5>
<small>1+ years Working </small>
</article>

<article className='about_card'>
  <BiSolidUser className='about-icon'/>
<h5>Client</h5>
<small>200+ WorldWide </small>
</article>


<article className='about_card'>
  <VscFolderActive className='about-icon'/>
<h5>80+ </h5>
<small>1+ years Working </small>
  </article>  */}
</div> 

<p>
Hello, I'm Harish Kumar, a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in crafting captivating user interfaces and interactive web applications using cutting-edge technologies like React.js and Redux. With a keen eye for detail and a love for clean, maintainable code, I'm dedicated to creating seamless and user-friendly digital experiences. I thrive on challenges and am always eager to expand my skill set. Beyond coding, I'm an avid design enthusiast, always on the lookout for the latest trends and inspirations.

</p>

<a href='#contact' className='btn btn-primary'>Let's Talk </a>

</div>
    </div>
    </section>
  )
}

export default About;