import React from 'react'
import {BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'> 
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    {/* Work Experience */}
<div className='experience__work'>
  <h1>Work Experience</h1>
    <div className='experience__workcontent'>
    <article className='experience__workdetails'>
<BsFillPatchCheckFill className='experience__workdetails_icon'/>
<div>
<h4>Web Developer Intern At LetsGrowMore</h4>
<h3> (March-April)</h3>
<small className='text-light'>Its a virtual internship where I learned and make basic to advance frontend websites like Tindog, landing pages of Flipkart pepssi etc., using html, css,bootstrap ,javascript and react</small>
</div>
    </article>

    <article className='experience__workdetails'>
<BsFillPatchCheckFill className='experience__workdetails_icon'/>
<div>
<h4>Frontend Developer Intern At Techmihirnaik</h4>
<h3>(March-june)</h3>
<small className='text-light'>Worked on a prototype of websites
Worked on attendance platform  
Using react, tailwind and bootstrap Made frontend part of the attendance website in collaboration with team.</small>
</div>
    </article>

    <article className='experience__workdetails'>
<BsFillPatchCheckFill className='experience__workdetails_icon'/>
<div>
<h4> Mern Stack Intern at TwoWaits </h4>
<h3>(March-April)</h3>
<small className='text-light'>It's a virtual internship where I learned basics of MongoDB node, react and express usages.
Made one website using MERN stack.
Deploy this website on Heroku.</small>
</div>
    </article>


    <article className='experience__workdetails'>
<BsFillPatchCheckFill className='experience__workdetails_icon'/>
<div>
<h4>Full Stack Intern At Bismillah Enterprises</h4>
<h3>(June-August)</h3>
<small className='text-light'>Working On Ecommerce Website for the company. Made Admin Panel using react and working on main user website using nextjs , Bootstrap , MongoDb, Nodejs, Express etc.</small>
</div>
    </article>
    </div>
  </div>

<div className='container experience__container'>
  <div className='experience__frontend'>
    <h3>Frontend Development</h3>
    <div className='experience__content'>

    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>HTML</h4>
   <small className='text-light'>Experienced</small>
   </div>
    </article>
   
    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>CSS</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>

    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>Bootstrap</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>

    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>Tailwind</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>
    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>Reactjs</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>
    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>Nextjs</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>
    </div>
  </div>

  {/*------- End of frontend ---------*/}

  <div className='experience__backend'>
  <h3>Backend Development</h3>
    <div className='experience__content'>
    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>MongoDb</h4>
<small className='text-light'>Intermediate</small>
</div>
    </article>

    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>Nodejs</h4>
<small className='text-light'>Basics</small>
</div>
    </article>

    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4> MySQL</h4>
<small className='text-light'>Basics</small>
</div>
    </article>

    <article className='experience__details'>
<BsFillPatchCheckFill className='experience__details_icon'/>
<div>
<h4>Express</h4>
<small className='text-light'>Basics</small>
</div>
    </article>
    </div>
  </div>



</div>
     </section>
  
    )
}

export default Experience