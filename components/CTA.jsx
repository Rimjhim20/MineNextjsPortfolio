import React from 'react'
import Link from 'next/link'
const CTA = () => {
  return (
    <div className='cta'>
        <Link href="Resume.pdf"  download={"Resume.pdf"} ><a className='btn'>Download CV</a></Link>
        <Link href ="#contact" ><a className='btn btn-primary'>Let&apos;s Talk</a></Link>
        </div>
  )
}

export default CTA