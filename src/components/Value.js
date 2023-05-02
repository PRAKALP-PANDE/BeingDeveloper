import React from 'react';

export default function Value() {

    let data = require('./data.json');
    return (
        <div className="value-container">
            <div className="value-box">
                <img src={data.value_1_img} alt="" />
                <div className="value-layer">
                    <h4>{data.value_1_tag}</h4>
                    <p>{data.value_1_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="value-box">
                <img src={data.value_2_img} alt="" />
                <div className="value-layer">
                    <h4>{data.value_2_tag}</h4>
                    <p>{data.value_2_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="value-box">
                <img src={data.value_3_img} alt="" />
                <div className="value-layer">
                    <h4>{data.value_3_tag}</h4>
                    <p>{data.value_3_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="value-box">
                <img src={data.value_4_img} alt="" />
                <div className="value-layer">
                    <h4>{data.value_4_tag}</h4>
                    <p>{data.value_4_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="value-box">
                <img src={data.value_5_img} alt="" />
                <div className="value-layer">
                    <h4>{data.value_5_tag}</h4>
                    <p>{data.value_5_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="value-box">
                <img src={data.value_1_img} alt="" />
                <div className="value-layer">
                    <h4>{data.value_6_tag}</h4>
                    <p>{data.value_6_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    )
}

{/* <img src="https://i.ibb.co/YN4cnSp/Commitment-JPG.gif" alt="Commitment-JPG" border="0">

<img src="https://i.ibb.co/tcZF3MS/Competitive-pricing.jpg" alt="Competitive-pricing" border="0">

<img src="https://i.ibb.co/RDZBzRF/Experience.jpg" alt="Experience" border="0">

<img src="https://i.ibb.co/0ZdZzfc/Innovation.jpg" alt="Innovation" border="0">

<img src="https://i.ibb.co/Ph216X5/Quality.jpg" alt="Quality" border="0">

<img src="https://i.ibb.co/7gWZnM9/Trust.jpg" alt="Trust" border="0"> */}