import React from 'react'
import './Testimonel.css'
import colon from '../assets/colon.svg'
import testimonel1 from '../assets/testimonel1.jpg'
import testimonel2 from '../assets/testimonel2.png'
import testimonel3 from '../assets/testimonel3.jpg'

const Testimonel = () => {
  return (
    <div className='testimonel'>
        <div className='testimonel-heading'>
            <h1>What our customers say</h1>
            
            </div>
            <div className='testimonial-grid'>
            <div className='test'>
            <div className='colon'>
            <img  src={colon} alt=''/>
            </div>
                <p>Absolutely fabulous - we can't thank you enough – the cake was amazing and tasted absolutely delicious! Everyone was so impressed by your work.</p>
                <div className='image1'>
                     <img src={testimonel1} alt=''/></div>

                <h3>JENNIFER</h3>

            </div>
            <div className='test'>
            <div className='colon'>
            <img  src={colon} alt=''/>
                </div>
                <p>Macrons are very tasty! Just loved ur style of presentation. the cake was amazing and tasted absolutely delicious!</p>
                <div className='image1'>
                <img src={testimonel2} alt=''/>
                </div>
                <h3>THANSIYA</h3>

            </div>
            <div className='test'>
            <div className='colon'>
                <img src={colon} alt=''/>
                </div>
                <p>Customer service had fullfill my request to less sweet for the cake as it consume by old folk. Good job for the communication with baker and we love the cake</p>
                <div className='image1'>
                    <img src={testimonel3} alt=''/>
                </div>

                <h3>SAIFUDHEEN</h3>

            </div>
            </div>
    </div>
  )
}

export default Testimonel