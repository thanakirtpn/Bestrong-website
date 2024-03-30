
import React, { useState, useEffect } from 'react';
import "./hero.scss"

const Hero = () => {
    const backgrounds = [
        'url(/home-bg-1.jpg)',
        'url(/home-bg-2.jpg)',
        'url(/home-bg-3.jpg)',
      ];
      const [current, setCurrent] = useState(0);
      const length = backgrounds.length;
    
      const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
      const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
    
  return (


<div className="slider">
      {backgrounds.map((bg, index) => (
        
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
          style={{ backgroundImage: bg }}>
          {index === current && (
            <section>
                <div className="content"> 
                    <span>be strong, be fit</span>
                    <h3>Make yourself stronger than your excuses.</h3>
                    <a href="#" class="btn">get started</a>
            </div>
            </section>
            
          )}
        </div>
      ))}
      <span className="left-arrow" onClick={prevSlide}>&#10094;</span>
      <span className="right-arrow" onClick={nextSlide}>&#10095;</span>
      <div className="indicators">
        {backgrounds.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>


  )
}

export default Hero