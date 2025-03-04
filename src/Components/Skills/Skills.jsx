import React,{useEffect} from 'react';
import CSS3 from '../../assets/CSS3.png';
import AWS from '../../assets/AWS.png';
import Bootstrap5 from '../../assets/BootStrap5.png';
import ExpressJs from '../../assets/expressJs.png';
import Git from '../../assets/Git.png';
import Github from '../../assets/Github.png';
import HTML5 from '../../assets/Html5.png';
import Javascript from '../../assets/JavaScript.png';
import MaterialUi from '../../assets/MaterialUI.png';
import MongoDB from '../../assets/MongoDB.png';
import MYSQL from '../../assets/MYSQL.png';
import NodeJs from '../../assets/NodeJs.png';
import Postman from '../../assets/Postman.png';
import ReactJs from '../../assets/ReactJs.png';

// Importing Tagcloud
import TagCloud from 'TagCloud';

function Skills() {
      // Animation settings for text cloud
      useEffect(()=>{
        const container = ".tagcloud";
        const texts = [
            "HTML5",
            "CSS3",
            "JAVASCRIPT",
            "REACT JS",
            "NODE JS",
            "EXPRESS JS",
            "MONGODB",
            "MYSQL",
            "MONGOOSE",
            "AWS",
            "GIT",
            "GITHUB",
            "POSTMAN",
            "JWT",
            "RENDER",
            "NETLIFY",
            "BOOTSTRAP",
            "MATERIALUI"
        ];

        const options ={
            radius: 150,
            maxSpeed: "normal",
            initSpeed: "fast",
            keep: true,
        };

        TagCloud(container,texts,options)
    },[])

  return (
    <section id="Skills">
        <div className='Skills-Content'>
          <h1>Skills</h1>
          <div className='Skills_Setup'>
            <div className='Skill-level'>
              <img src={HTML5} alt='HTML5'/>
              <img src={CSS3} alt='CSS3'/>
              <img src={Javascript} alt='JS'/>
              <img src={Bootstrap5} alt='BootStrap5'/>
              <img src={ReactJs} alt='ReactJs'/>
              <img src={MongoDB} alt='MongoDB'/>
              <img src={ExpressJs} alt='express Js'/>
              <img src={NodeJs} alt='NodeJs'/>
              <img src={MYSQL} alt='MySQL'/>
              <img src={AWS} alt='AWS'/>
              <img src={MaterialUi} alt='MaterialUI'/>
              <img src={Git} alt='Git'/>
              <img src={Github} alt='Github'/>
              <img src={Postman} alt='Postman'/>
            </div>
            <div className='Skills-Sphere'></div>
              <span className='tagcloud'></span>
          </div>
        </div>
    </section>
  )
}

export default Skills;