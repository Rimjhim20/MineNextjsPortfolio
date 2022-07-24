import React from 'react'
import {BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
  <h5>What I Offer</h5>
  <h2>Services</h2>
  <div className='container services__container'>
    <article className='service'>
      <div className='service__head'>
        <h3>Volunteering</h3>
      </div>
<ul className='service__list'>
<li>
<BsCheck className='service__list-icon'/>
<p>Teamwork</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Confidence</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Communication</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Punctuality</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Professionalism</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Leadership</p>
</li>
</ul>
    </article>

    {/*-------- End of Volunteering -------*/}


    <article className='service'>
      <div className='service__head'>
        <h3>Web Development</h3>
      </div>
<ul className='service__list'>
<li>
<BsCheck className='service__list-icon'/>
<p>Understanding UX</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Constantly learning and improving. </p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Being able to manage time and prioritize.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Communicating well with others.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p> Keeping up to date with the industry.</p>
</li>
</ul>
    </article>

{/*---------- End of Web Development ----------*/}

    {/* <article className='service'>
      <div className='service__head'>
        <h3>Content Creation</h3>
      </div>
<ul className='service__list'>
<li>
<BsCheck className='service__list-icon'/>
<p>Lorem, ipsum.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p>Lorem, ipsum.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p>Lorem, ipsum.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p>Lorem, ipsum.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p>Lorem, ipsum.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p>Lorem, ipsum.</p>
</li>
<li>
<BsCheck className='service__list-icon'/>
<p>Lorem, ipsum.</p>
</li>
</ul>
    </article> */}

    {/* End of Conrent Creation */}
  </div>
   </section>
    )
}

export default Services