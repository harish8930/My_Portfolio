import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a className='socialicon' href='https://www.linkedin.com/in/iharishkumar06/' target='blank'><BsLinkedin/></a>
        
        <a  className="socialicon" href='https://github.com/iharishkumar06' target='blank'><BsGithub/></a>


        </div>
  )
}


export default HeaderSocial