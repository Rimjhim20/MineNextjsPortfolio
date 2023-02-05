import React from 'react'
import Link from 'next/link'
import {FaAward} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'
import {GiFullFolder} from 'react-icons/gi'
const About = () => {
  return (
    <section id='about'>
<h5>Get to Know</h5>
<h2>About me</h2>
<div className='container about__conatiner'>
  <div className='about__content'>
  <div className='about__cards'>
      <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>1+</small>
      </article>

      <article className='about__card'>
        <GiFullFolder className='about__icon/'/>
<h5>Project</h5>
<small>5+</small>
      </article>
      <article className='about__card'>
        <FaUserTie className='about__icon'/>
          <h5>Internship</h5>
          <small>1+</small>
      </article>
    </div>
<h2> Career Objective </h2>
    <p>
      
   

To secure a challenging and rewarding position in a reputable organization where I can utilize my academic knowledge, technical skills and professional experience to contribute to the growth and success of the company while continuously learning and developing my career.



    </p>
<Link href="#contact" className='btn btn-primary'>Let&apos;s Talk About </Link>
  </div>
</div>
    </section>
  )
}

export default About