import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
<h5> Hello I,m</h5>
<h1>Rimjhim </h1>
<h5 className='text-light'>Fullstack Developer  </h5>
<CTA/>

<div className='me'>
  <Image src ="  " alt="" height={20}width={20}/>
</div>
<Link href="#contact" ><a className='scroll__down'>Scroll Down</a></Link>
      </div>
    </header>
  )
}

export default Header