import React from 'react'
import './skills.css'
import  UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const Skills = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skillTitle'> What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a  strong understanding of design and keep eye for detail. i am proficient in Html,Css,and JavaScript,Reactjs as well design software.</span>
        <div className='skillBars'>
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/Ux Design</h2>

                    <p>This is demo text, you write own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Desin</h2>
                    <p>This is demo text, you write own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is demo text, you write own content here</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
