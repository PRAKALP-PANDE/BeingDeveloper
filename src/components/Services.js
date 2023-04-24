import React from 'react';
// import './style.css';

export default function Services() {

    let data = require('./data.json');
    return (
        <div className="services-container">
            <div className="services-box">
                <i className='bx bx-code-alt'></i>
                <h3>{data.Services_card_1_tagline}</h3>
                <p>{data.Services_card_1_para}</p>
                {/* <a href="#" className="btn">Read More</a> */}
            </div>

            <div className="services-box">
                <i className='bx bxs-paint'></i>
                <h3>{data.Services_card_2_tagline}</h3>
                <p>{data.Services_card_2_para}</p>
                {/* <a href="#" className="btn">Read More</a> */}
            </div>

            <div className="services-box">
                <i className='bx bx-bar-chart-alt'></i>
                <h3>{data.Services_card_3_tagline}</h3>
                <p>{data.Services_card_3_para}</p>
                {/* <a href="#" className="btn">Read More</a> */}
            </div>

            <div className="services-box">
                <i className='bx bx-bar-chart-alt'></i>
                <h3>{data.Services_card_4_tagline}</h3>
                <p>{data.Services_card_4_para}</p>
                {/* <a href="#" className="btn">Read More</a> */}
            </div>
        </div>
    )
}
