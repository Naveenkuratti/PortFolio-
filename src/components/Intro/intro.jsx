import React from 'react'
import './intro.css'

import bg from '../../assets/image2.png.jpg'
import{Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const intro = () => {
    return (
        <div>

            <div>
                <section id="intro">
                    <div className="introContect">
                        <span className='hello'>Hello</span>
                        <span className='intoText'>I'm <span className="introName">Naveen</span> <br />Full Stack Devolper</span>
                        <p className="introPara">I am a a skilled Html,Css,JavaScript,Reactjs Good <br /> Knowlegde In Core Java and Advance Java like Jdbc,SpringBoot, Hibernate,servlets,etc..</p>
                   <Link><button className='btn'><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
                    </div>
                    <img src={bg} alt="" className='bg' />

                </section>
            </div>
        </div>
    )
}

export default intro