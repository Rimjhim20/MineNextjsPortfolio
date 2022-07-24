import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <Link href='#' ><a className='footer__logo'>Rimjhim</a></Link>
<ul className='permalinks'>
       <Link href="#"><a>Home</a></Link>
       <Link href="#about"><a>About</a></Link>
       <Link href="#experience"><a>Experience</a></Link>
       <Link href="#services"><a>Services</a></Link>
       <Link href="#portfolio"><a>Porfolios</a></Link>
       <Link href="#contact"><a>contact</a></Link>
       </ul>

       <div className='footer__socials'>
       <Link href={'https://www.linkedin.com/in/rimjhim-kumari-r20/'} ><a><AiFillLinkedin/></a></Link>
<Link href={'https://www.instagram.com/rimjhim_5/'} ><a><AiFillInstagram/></a></Link>
<Link href={'https://github.com/Rimjhim20'} ><a><BsGithub/></a></Link>
<Link href={'https://github.com/Rimjhim20'} ><a><AiFillTwitterCircle/></a></Link>

       </div>
       <div className='footer__copyright'>
        <small> &copy; Made By Rimjhim 💖</small>
       </div>
    </footer>
  )
}

export default Footer