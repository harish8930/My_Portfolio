import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8hfm1ib', 'template_0ol0wpf', form.current, '9G8OCK4mcUQ8B7ji2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
<section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>

<div className='container contact_container'>
<div className='contact_options'>
<article className='contact_option'>
  <AiOutlineMail className='contact_option-icon'/>
<h4>Email</h4>
<h5>iharishkumar095@gmail.com</h5>
<a href='mailto: iharishkumar095@gmail.com' target ='_blank'>Send A message</a>
</article>


<article className='contact_option'>
  <BsWhatsapp className='contact_option-icon'/>
<h4>Whatsapp</h4>
<a href='https://api.whatsapp.com/send?phone=+918930839232' target="_blank">Send A message</a>
</article>
</div>
{/*end of contact option*/}


<form ref={form} onSubmit={sendEmail}>
<input type='text' name='name' placeholder='Your Full Name' required/>
<input type='email' name='email' placeholder='Your Email' required/>
<textarea  name='message'  rows='7' placeholder='Your message' required></textarea>
<button type='submit' className='btn  btn-primary'>Send Message</button>
</form>

</div>
</section>
  )
}

export default Contact