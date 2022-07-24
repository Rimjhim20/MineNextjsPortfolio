import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Portfolio = () => {
  return (
    <section id='portfolio'>
<h5>My Recent Work</h5>
<h2>Portfolio</h2>
<div className='container portfolio__container'>
  <article className='portfolio__item'>
<div className='portfolio__item-image'>
<Image src="/bb.jpeg" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>MetalStation (Ecommerce Website) </h3>
<div className='portfolio__item-cta'>
<Link href='https://github.com/Rimjhim20/metalstation-nextjs' ><a className='btn'>Github</a></Link>
<Link href='https://metalstation-nextjs.vercel.app/'><a className='btn btn-primary'>Live Demo</a></Link>
</div>
  </article>
  <article className='portfolio__item'>
<div className='portfolio__item-image'>
<Image src="/portp.png" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>Mine Portfolio Using Nextjs</h3>
<div className='portfolio__item-cta'>
<Link href='https://github.com/Rimjhim20/MineNextjsPortfolio' ><a className='btn'>Github</a></Link>
<Link href='https://venerable-dragon-1e4c05.netlify.app/'><a className='btn btn-primary'>Live Demo</a></Link>
</div>
  </article>


  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/Dashboard.png" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>Admin DashBoard Using React</h3>
<div className='portfolio__item-cta'>
<Link href='https://github.com/Rimjhim20/metalstation-nextjs' ><a className='btn'>Github</a></Link>
<Link href='https://metalstation-nextjs.vercel.app/'><a className='btn btn-primary'>Live Demo</a></Link>
</div>
  </article>
  <article className='portfolio__item'>
<div className='portfolio__item-image'>
<Image src="/attendance.png" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>Attendance Project</h3>
<div className='portfolio__item-cta'>
<Link href='https://github.com/Rimjhim20/attendance-project-' ><a className='btn'>Github</a></Link>
<Link href='https://attendance-project.vercel.app/'><a className='btn btn-primary'>Live Demo</a></Link>
</div>
  </article>

  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/foodie.png" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>Foodie Website</h3>
<div className='portfolio__item-cta'>
<Link href='https://github.com/Rimjhim20/futureskill' ><a className='btn'>Github</a></Link>
<Link href='https://polite-water-0a8f2e610.1.azurestaticapps.net/'><a className='btn btn-primary'>Live Demo</a></Link>
</div>
  </article>

  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/pepsi.png" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>Pepsi Landing Page</h3>
<div className='portfolio__item-cta'>
<Link href='https://github.com/Rimjhim20/Pepssi-Responsive-Landingpage' ><a className='btn'>Github</a></Link>
<Link href='https://boring-heyrovsky-416a04.netlify.app/'><a className='btn btn-primary'>Live Demo</a></Link>
</div>
  </article>
</div>
    </section>
  )
}

export default Portfolio