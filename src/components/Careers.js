import React from 'react';
import "./careers.css";
import Icon_img from "./assets/img/GMC.png"

export default function Careers() {

    let data = require('./data.json');
    return (
        <div>
            <div className="timeline">

                <div className="container left-container">
                    <img src={Icon_img} />
                    <div className="text-box">
                        <h2>{data.journey_1_tag}</h2>
                        <p>{data.journey_1_para}</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="container right-container">
                    <img src={Icon_img} />
                    <div className="text-box">
                        <h2>{data.journey_2_tag}</h2>
                        <p>{data.journey_2_para}</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="container left-container">
                    <img src={Icon_img} />
                    <div className="text-box">
                        <h2>{data.journey_3_tag}</h2>
                        <p>{data.journey_3_para}</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="container right-container">
                    <img src={Icon_img} />
                    <div className="text-box">
                        <h2>{data.journey_4_tag}</h2>
                        <p>{data.journey_4_para}</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="container left-container">
                    <img src={Icon_img} />
                    <div className="text-box">
                        <h2>{data.journey_5_tag}</h2>
                        <p>{data.journey_5_para}</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="container right-container">
                    <img src={Icon_img} />
                    <div className="text-box">
                        <h2>{data.journey_6_tag}</h2>
                        {/* <small>2023-24</small> */}
                        <p>{data.journey_6_para}</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

            {/* <a href="https://forms.gle/7jUgc3Zc8HkcWP8y5" target='_blank' className="btn ">Apply</a> */}

            </div>
        </div>
    )
}
