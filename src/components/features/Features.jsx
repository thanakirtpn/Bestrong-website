import React from 'react'
import "./features.scss"


const Features = () => {
  return (
    <section className='features'>

        <h1 className='heading'><span>gym features</span></h1>

        <div className="box-container">

        <div className="box">
            <div className="image">
                <img src="/f-img-1.jpg" alt=""/>
            </div>
            <div className="content">
                <img src="/icon-1.png" alt=""/>
                <h3>body building</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div className="box second">
            <div className="image">
                <img src="/f-img-2.jpg" alt=""/>
            </div>
            <div className="content">
                <img src="/icon-2.png" alt=""/>
                <h3>gym for men</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="/f-img-3.jpg" alt=""/>
            </div>
            <div className="content">
                <img src="/icon-3.png" alt=""/>
                <h3>gym for women</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        </div>

    </section>
  )
}

export default Features