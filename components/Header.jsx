import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='content'>
<h5> Hello I,m</h5>
<h1>Rimjhim Kumari</h1>
<h5 className='text-light'>B.Tech CSE Student</h5>
</div>
<CTA/>
<HeaderSocials/>
<div className='me'>
  <Image src = "/profilepic.jpeg" alt="" height={450}width={350}/>
</div>
<Link href="#contact" ><a className='scroll__down'>Scroll Down</a></Link>
      </div>
    </header>
  )
}

export default Header