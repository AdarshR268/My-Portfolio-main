import React from 'react';
import MERN_Image from '../../assets/mern-language-icon.png';

function About() {
  return (
    <section id="About">
      <div className='About-Content'>
        <h1>About Me</h1>
        <div className='MyIntro'>
          <p>Hey!I'm Adarsh R,a self driven,highly motivated and passionate programmer with a keen interest in software development and competitive programming.And also I'm a Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements with database management. Handles any part of the process with ease. Collaborative team player with a willingness to learn in and grow with the organization.</p>
        </div>
        <div className='expertises'>
          <h3>Technical Expertise</h3>
          <div className='expertise-list'>
          <ul>
            <li>Proficient in Javascript , HTML5 , CSS3 , React.js , Node.js , Express.js , MongoDB and MYSQL</li>
            <li>Experience with version control systems like Git and Github</li>
            <li>Strong grasp of RESTful API design and implementation</li>
            <li>Excellent Problem solving and debugging skills</li>
            <li>Collabrative team player with strong communication skills</li>
          </ul>
          <img src={MERN_Image} alt='MERN'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;