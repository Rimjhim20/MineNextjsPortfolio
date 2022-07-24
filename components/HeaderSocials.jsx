import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
<Link href={'https://www.linkedin.com/in/rimjhim-kumari-r20/'} ><a><AiFillLinkedin/></a></Link>
<Link href={'https://www.instagram.com/rimjhim_5/'} ><a><AiFillInstagram/></a></Link>
<Link href={'https://github.com/Rimjhim20'} ><a><BsGithub/></a></Link>
<Link href={'https://github.com/Rimjhim20'} ><a><AiFillTwitterCircle/></a></Link>
    </div>
  )
}
export default HeaderSocials