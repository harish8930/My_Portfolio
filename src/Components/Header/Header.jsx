import React from 'react'
import Cta from './Cta'
import './header.css'
import ME from '../../assets/imageMine.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
  <header>
 <div className='container header_container'>
<h5>Hello I'm</h5>
<h1>Harish Kumar</h1>
<h5 className='text-light'>Frontend developer</h5>
<Cta/>
<HeaderSocial/>
<div className='me'>
<img className='myimage' src= {ME} alt='me'/>
</div>

<a href='#contact' className='scroll_down'>Scroll Down</a>



 </div>
  </header>
  )
}

export default Header