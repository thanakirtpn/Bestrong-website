import React from 'react'
import "./about.scss"
import about from '/about-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about" id="about">

    <div className="image">
    <img src={about} alt="My descriptive alt text" />
    </div>

    <div className="content">
        <span>about us</span>
        <h3 className="title">Every day is a chance to become better</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quia accusamus dicta inventore nobis obcaecati vero odio, id dolorum. Consequatur ex, aperiam deserunt nostrum perferendis illum unde ipsa? Consequatur, distinctio?</p>
        <div className="box-container">
            <div className="box">
                <h3><FontAwesomeIcon icon={faCheck} className='icon'/> body and mind</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
            <div className="box">
                <h3><FontAwesomeIcon icon={faCheck} className='icon'/> ihealthy life</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
            <div className="box">
                <h3><FontAwesomeIcon icon={faCheck} className='icon'/> istrategies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
            <div className="box">
                <h3><FontAwesomeIcon icon={faCheck} className='icon'/> iworkout</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim.</p>
            </div>
        </div>
        <a href="#" className="btn">read more</a>
    </div>

</section>
  )
}

export default About