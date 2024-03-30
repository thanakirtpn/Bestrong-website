import React from 'react'
import"./trainer.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faLinkedin,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';

const Trainer = () => {
  return (
    <section className="trainers" id="trainers">

    <h1 className="heading"> <span>expert trainers</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src="/trainer-1.jpg" alt=""/>
            <div className="content">
                <span>expert trainer</span>
                
                <h3>john deo</h3>
                <div className="share">
                
                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                
                
                
                </div>
            </div>
        </div>

        <div className="box">
            <img src="/trainer-2.jpg" alt=""/>
            <div className="content">
                <span>expert trainer</span>
                <h3>john deo</h3>
                <div className="share">
                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>

        <div className="box">
            <img src="/trainer-3.jpg" alt=""/>
            <div className="content">
                <span>expert trainer</span>
                <h3>john deo</h3>
                <div className="share">
                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>

        <div className="box">
            <img src="/trainer-4.jpg" alt=""/>
            <div className="content">
                <span>expert trainer</span>
                <h3>john deo</h3>
                <div className="share">
                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>

    </div>

</section>


  )
}

export default Trainer