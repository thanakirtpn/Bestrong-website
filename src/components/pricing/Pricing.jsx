import React from 'react'
import "./pricing.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <section className='pricing'>

        <div className="information">
            <span>pricing plan</span>
            <h3>affordable pricing plan for your</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicin
                g elit. Quas modi ipsa vel magnam asperiores asperna
                tur.
            </p>
            <p> <FontAwesomeIcon icon={faCheck} className='icon'/>cardio exercise </p>
            <p> <FontAwesomeIcon icon={faCheck} className='icon'/> weight lifting </p>
            <p> <FontAwesomeIcon icon={faCheck} className='icon'/> diet plans </p>
            <p> <FontAwesomeIcon icon={faCheck} className='icon'/> overall results </p>
            <a href="#" className='btn'>get started</a>
        </div>
        

        <div className="plan basic">
            <h3>basic plan</h3>
            <div className="price"><span>$</span>30 <span>/mo</span></div>
            <div className="list">
            <p> <FontAwesomeIcon icon={faCheck} className='icon'/> personal training </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> cardio exercise </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> weight lifting </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> diet plans </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> overall results </p>
            </div>
            <a href="#" class="btn">get started</a>
        </div>

        <div class="plan">
        <h3>premium plan</h3>
        <div class="price"><span>$</span>90<span>/mo</span></div>
       <div class="list">
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> personal training </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> cardio exercise </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> weight lifting </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> diet plans </p>
        <p> <FontAwesomeIcon icon={faCheck} className='icon'/> overall results </p>
       </div>
       <a href="#" class="btn">get started</a>
    </div>

    </section>
  )
}

export default Pricing