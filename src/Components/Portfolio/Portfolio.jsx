import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Untitled design (1).png'
import IMG2 from '../../assets/Untitled design.png'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
<h5>My  Recent Work</h5>
<h2>Portfolio</h2>

<div className='container portfolio_container'>
<article className='portfolio_item'>
<div className='portfolio_item-image'>
<img src={IMG1} alt='p1'/>
</div>
  <h3>Express Food App </h3>
<div className='portfolio_item-cta'>
<a href='https://github.com' className='btn' target='_blank'>Github</a>
  <a href='https://expressfoodapp.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article> 


<article className='portfolio_item'>
<div className='portfolio_item-image'>
<img src={IMG2} alt='p1'/>
</div>
  <h3>MoviesBox App </h3>
<div className='portfolio_item-cta'>
<a href='https://github.com/harish8930/MoviesBox' className='btn' target='_blank'>Github</a>
  <a href='https://moviesboxsite.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article> 


<article className='portfolio_item'>
<div className='portfolio_item-image'>
<img src={IMG3} alt='p1'/>
</div>
  <h3>This is a portfolio item title </h3>
<div className='portfolio_item-cta'>
<a href='https://github.com' className='btn' target='_blank'>Github</a>
  <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article> 
</div>
    </section>
    
  )
}

export default Portfolio