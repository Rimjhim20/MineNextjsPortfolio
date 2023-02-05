import React from 'react'

const Education = () => {
  return (
    <div>
            
   <h2 className='edutitle'>My Education</h2>
<div className="educontainer">

  <div className="timeline">
    <ul>
      <li>
        <div className="timeline-content">
          <h3 className="date">2020 - 2024</h3>
          
          <h1>Amity University, Patna</h1>
          <p>Graduation</p>
          <p>CGPA ~ 9.2</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2018 - 2020</h3>
          <h1>Gyan Niketan Girls School</h1>
          <p>Senior Secondary School</p> 
          <p>Percentage - 89%</p>
        </div>
      </li>
      {/* <li>
        <div className="timeline-content">
          <h3 className="date">2008-2018</h3>
          <h1>St. Xavier&apos;s High School</h1>
          <p>Secondary School</p>
          <p>CGPA ~ 7.75</p>
        </div>
      </li>
     */}
    </ul>
  </div>
</div>


    </div>
  )
}

export default Education