import React from 'react'
import "../web/Style.css"
import img from "../assets/cli.png"
import img1 from "../assets/cloud5.png"
import node from "../assets/node.png"
import chash from "../assets/chash.png"
import php from "../assets/php.png"
import ruby from "../assets/ruby1.jpg"
import scala from "../assets/scala1.png"
import cloujre from "../assets/cloujre.png"
import { useNavigate } from 'react-router-dom'


function All() {
      const navigate = useNavigate();
  return (
    <div>
    <div className='navbar'>
    <div className='container flex'>
       <h1>Vikiwave</h1>
        <nav>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a onClick={() => navigate('/features')}>Feautres</a></li>
                <li><a onClick={()=>navigate('/docs')}>Docs</a></li>
                
            </ul>
        </nav>
    </div>

</div>

{/* Showcase */}

<section className='showcase'>

 <div className="contaier grid">
   <div className='showcase-text'>
     <h1> Easier Deployement</h1>
     <p>
        Deploy web apps of all kinds ,from 
        large scale eterprise APIs to static 
        websites for individuals. Fill out the 
        form to try a demo of our platform
     </p>
     <a href='' className="btn btn-outline">Read More</a>
   </div>

<div className='showcase-form card'>
    <h2> Request a Demo</h2>
    <form name='contact' method='POST' netlify-honeypot="bot-field" data-netlify="true">
    <input type='hidden' name='form-name' value='contact' />
    <p className='hidden'>
    <label>Don't fill this out if you are human: <input name='bot-field'/> </label>
    </p>
        <div className='form-control'>
            <input type='text' name='name' placeholder='Name' required/> 
        </div>

        <div className='form-control'>
            <input type='text' name='company' placeholder='Company Name' required/> 
        </div>

        <div className='form-control'>
            <input type='email' name='email' placeholder='Email' required/> 
        </div>
        <input type="submit" value='send'  className='btn btn-primary'/>
    </form>
</div>
 </div>

</section>

{/* stats */}
<section className='stats'>
<div className='container'>

<h3 className='stats-heading text-center my-1'>
 Welcome to the best plateform for building applications of all 
 types modern architecture ad scaling. 
</h3>

<div className='grid grid-3 text-ceter my-4'>
<div>
    <i className='fas fa-server fa-3x'></i>
    <h3>10,339,405</h3>
    <p className='text-secondary'>Deployements</p>
</div>
<div>
    <i className='fas fa-upload fa-3x'></i>
    <h3>987 TB</h3>
    <p className='text-secondary'>Published</p>
</div>
<div>
    <i className='fas fa-project-diagram fa-3x'></i>
    <h3>2,343,365</h3>
    <p className='text-secondary'>Projects</p>
</div>
</div>
</div>

</section>

{/* cli */}

<section className='cli'>
<div className='container grid'>

<img src={img} alt=''/>

<div className='card'>
<h3>Easy to use, cross plateform cli</h3>
</div>
<div className='card'>
<h3>Deploy in second</h3>
</div>
</div>

</section>

{/* cloud */}

<section className='cloud bg-primary my-2 py-2'>

<div className='container grid'>

  <div className='text-center'>
    <h2 className='lg'>Extreme cloud hosting</h2>
    <p className='lead my-1'>Cloud hosting like you have never seen.
    Fast,efficient,scaleable</p>  
    <a href='' className='btn btn-dark'>Read more</a>
    </div>
<img src={img1} alt=''/>
</div>
</section>

{/* Languages */}

<section className='languages'>
 <h2 className='md text-center my-2'>
    Supported Languages
 </h2>

 <div className='cotainer flex'>

 <div className='card'>
    <h4> Node.js</h4>
    <img src={node} alt=''/>
 </div>

 <div className='card'>
    <h4> c#</h4>
    <img src={chash} alt=''/>
 </div>
 <div className='card'>
    <h4> Ruby</h4>
    <img src={ruby} alt=''/>
 </div>
 <div className='card'>
    <h4> php</h4>
    <img src={php} alt=''/>
 </div>
 <div className='card'>
    <h4> scala</h4>
    <img src={scala} alt=''/>
 </div>
 <div className='card'>
    <h4> cloujre</h4>
    <img src={cloujre} alt=''/>
 </div>

 </div>
</section>


{/* Footer */}
<footer className='footer bg-dark py-5'>

<div className='container grid grid-3'> 

<div>
    <h1>Vikiwave</h1>
    <p>Copyright & copy,2023</p>
</div>

<nav>
    <ul>
        <li><a  href=''>Home</a></li>
        <li><a  href=''>Feautres</a></li>
        <li><a  href=''>Docs</a></li>
    </ul>
</nav>

<div className='social'>
<a href=''><i className='fab fa-github fa-2x'></i></a>
<a href=''><i className='fab fa-facebook fa-2x'></i></a>
<a href=''><i className='fab fa-instagram fa-2x'></i></a>
<a href=''><i className='fab fa-twitter fa-2x'></i></a>
</div>
</div>
</footer>

</div>
  )
}

export default All
