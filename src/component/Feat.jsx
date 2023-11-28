import React from 'react'
import { Link} from 'react-router-dom';
import server1 from "../assets/server1.png"
import "../web/Style.css"
import server4 from "../assets/server4.jpg"

function Feat() {
    // const navigate = useNavigate();
  return (
    <div>
        <div className='navbar'>
    <div className='container flex'>
       <h1>Vikiwave</h1>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Feautres</Link></li>
                <li><Link to="/docs">Docs</Link></li>
                
            </ul>
        </nav>
    </div>

</div>

{/* head */}
<section className='feature-head bg-primary py-3'>
<div className='contaier grid'>

<div>
<h1 className='xl'> Feautres</h1>
<p className='lead'>

    check out the features of vikiwave that
     seprate us from the 
     copetition
</p>
</div>

<img src={server1} alt=''></img>
</div>
</section>


{/* sub head */}

<section className='feature-sub-head bg-light py-3'>

<div className='container grid'>
    <div>
        <h1 className='md'>The Loruki Plateform</h1>
        <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor cupiditate
            dignissios temporibus perspiciatis Suscipit qui, consectetur ea consectetur
            dolorius repelledus quasi, aut corpectur non alies culpa.nostrus,ivetore 
            accusantium

    </p>
    </div>
    <img src={server4} alt=''/>
</div>
 </section>

 <section className='feature-main py-2'>

<div className='container grid grid-3'>

    <div className='card flex'>
     <i className='fas fa-server fa-3x'></i>

     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Voluptas nemo saepo corrupti et 
     dolerem Voluptas at, nostrum rem voluptatem an alias quala 
     molestie ea, liero ihil deserunt. Molestias,eumi necessitatibus
     
     </p>


    </div>
    <div className='card flex'>
     <i className='fas fa-code-commit fa-3x'></i>

     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Voluptas nemo saepo corrupti et 
     dolerem Voluptas at, nostrum rem voluptatem an alias quala 
     molestie ea, liero ihil deserunt. Molestias,eumi necessitatibus
     
     </p>


    </div>
    <div className='card flex'>
     <i className='fas fa-laptop-code fa-3x'></i>

     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Voluptas nemo saepo corrupti et 
     dolerem Voluptas at, nostrum rem voluptatem an alias quala 
     molestie ea, liero ihil deserunt. Molestias,eumi necessitatibus
     
     </p>


    </div>
    <div className='card flex'>
     <i className='fas fa-database fa-3x'></i>

     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Voluptas nemo saepo corrupti et 
     dolerem Voluptas at, nostrum rem voluptatem an alias quala 
     molestie ea, liero ihil deserunt. Molestias,eumi necessitatibus
     
     </p>


    </div>
    <div className='card flex'>
     <i className='fas fa-power-off fa-3x'></i>

     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Voluptas nemo saepo corrupti et 
     dolerem Voluptas at, nostrum rem voluptatem an alias quala 
     molestie ea, liero ihil deserunt. Molestias,eumi necessitatibus
     
     </p>


    </div>
    <div className='card flex'>
     <i className='fas fa-upload fa-3x'></i>

     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Voluptas nemo saepo corrupti et 
     dolerem Voluptas at, nostrum rem voluptatem an alias quala 
     molestie ea, liero ihil deserunt. Molestias,eumi necessitatibus
     
     </p>


    </div>
</div>
 </section>

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

export default Feat
