import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/OIP.jpeg'
import Portfolio2 from '../../assets/769b2f2929515498d08cce4f5941960c--hyderabad-sap.jpg'
import Portfolio3 from '../../assets/8b9fc1fa-bb42-45c6-957b-3b6611c542f1.avif'
import Portfolio4 from '../../assets/OIP (1).jpeg'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/OIP (2).jpeg'

const Works = () => {
  return (
    <div>
      <section id="works">
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className="workDesc">
          I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>
        <div className="worksImgs">
          <a href="https://www.linkedin.com/in/naveen-kuratti-aa3b762a3/" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio1} alt="Portfolio 1" className="worksImg" />
          </a>
          <a href="https://github.com/Naveenkuratti" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
          </a>
          <a href="https://www.hackerrank.com/profile/naveenkuratti875" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio3} alt="Portfolio 3" className="worksImg" />
          </a>
          <a href="https://leetcode.com/u/naveenkuratti875/" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio4} alt="Portfolio 4" className="worksImg" />
          </a>
          <a href="https://yellow-shayne-19.tiiny.site" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio5} alt="Portfolio 5" className="worksImg" />
          </a>
          <a href="https://rose-lettie-94.tiiny.site" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio6} alt="Portfolio 6" className="worksImg" />
          </a>
        </div>
        <button className='workBtn'>See More</button>
      </section>
    </div>
  )
}

export default Works
