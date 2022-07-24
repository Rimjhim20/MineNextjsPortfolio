import React from 'react'
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
<h3> </h3>
<div className='portfolio__item-cta'>
<a href='https://github.com' className='btn'> Github</a>
<a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a>
</div>
  </article>

  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/bb.jpeg" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>This is a portfolio item title</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com' className='btn'> Github</a>
<a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a>
</div>
  </article>


  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/bb.jpeg" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>This is a portfolio item title</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com' className='btn'> Github</a>
<a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a>
</div>
  </article>
  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/bb.jpeg" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>This is a portfolio item title</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com' className='btn'> Github</a>
<a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a>
</div>
  </article>

  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/bb.jpeg" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>This is a portfolio item title</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com' className='btn'> Github</a>
<a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a>
</div>
  </article>

  <article className='portfolio__item'>
<div className='portfolio__item-image'>

<Image src="/bb.jpeg" alt=" " height={300} 
width={500}
></Image>
</div>
<h3>This is a portfolio item title</h3>
<div className='portfolio__item-cta'>
<a href='https://github.com' className='btn'> Github</a>
<a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a>
</div>
  </article>

</div>

    </section>
  )
}

export default Portfolio