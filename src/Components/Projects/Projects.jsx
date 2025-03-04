import React from 'react';
import MiniUrl from '../../assets/MiniUrl.png';
import MyCRM from '../../assets/MyCRM.png';
import Stylestrap from '../../assets/Stylestrap.png';
import Sparkz from '../../assets/Sparkz.png';
import ICYEdtech from '../../assets/ICYEdtech.png';
import HitTheHit from '../../assets/HitTheHit.png';
import TicTacToe from '../../assets/TicTacToe.png';

function Projects() {
  return (
    <section id="Projects">
        <div className='Projects-Content'>
          <h1>Projects</h1>
          <div className='Credentials'>
            <h4>Login Credentials(common)</h4>
            <p>User Id/Email : hari2000venkatesan@gmail.com</p>
            <p>Password : 12345678</p>
          </div>
          <div className='Project-Data'>
          <div className='Projects-Source'>
              <p><b>Sparkz</b></p>
              <img src={Sparkz} alt="Sparkz"/>
              <a href="https://github.com/" target="_blank">Frontend Source Code</a> 
              <a href="https://sparkz1.netlify.app/" target="_blank">Live Site</a>
              <a href="https://github.com/" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>MyCRM</b></p>
              <img src={MyCRM} alt="MyCRM"/>
              <a href="https://github.com/" target="_blank">Frontend Source Code</a> 
              <a href="https://mycrmportal.netlify.app/" target="_blank">Live Site</a>
              <a href="https://github.com/" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Mini-Url</b></p>
              <img src={MiniUrl} alt="MiniUrl"/>
              <a href="https://github.com/" target="_blank">Frontend Source Code</a> 
              <a href="https://miniurlshortener.netlify.app/users/" target="_blank">Live Site</a>
              <a href="https://github.com" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Edutech</b></p>
              <img src={ICYEdtech} alt="ICYEdtech"/>
              <a href="https://github.com/" target="_blank">Frontend Source Code</a> 
              <a href="https://icyedutech.netlify.app/" target="_blank">Live Site</a>
              <a href="https://github.com/" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Stylestrap</b></p>
              <img src={Stylestrap} alt="Stylestrap"/>
              <a href="https://github.com/" target="_blank">Frontend Source Code</a> 
              <a href="https://trymystylestrap.netlify.app/" target="_blank">Live Site</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Tic Tac Toe</b></p>
              <img src={TicTacToe} alt="TicTacToe"/>
              <a href="https://github.com/" target="_blank">Source Code</a> 
              <a href="https://xotoe.netlify.app/" target="_blank">Play Time</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Hit The Hit</b></p>
              <img src={HitTheHit} alt="HitTheHit"/>
              <a href="https://github.com/" target="_blank">Source Code</a> 
              <a href="https://hitthehit.netlify.app/" target="_blank">Play Time</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects;