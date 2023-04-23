import React from 'react';
import Quality_img from "./assets/img/Quality.jfif"
import Trust_img from "./assets/img/Trust.jfif"
import Innovation_img from "./assets/img/Innovation.jfif"
import Customer_img from "./assets/img/Customer.jfif"
import Experience_img from "./assets/img/Experience.jfif"
import Competitive_img from "./assets/img/Competitive.jfif"

export default function Portfolio() {

    let data = require('./data.json');
    return (
        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={Quality_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_1_tag}</h4>
                    <p>{data.portfolio_1_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={Trust_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_2_tag}</h4>
                    <p>{data.portfolio_2_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={Innovation_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_3_tag}</h4>
                    <p>{data.portfolio_3_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={Customer_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_4_tag}</h4>
                    <p>{data.portfolio_4_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={Experience_img} alt="" />
                <div className="portfolio-layer">
                    <h4>Experience</h4>
                    <p>Proven track record of delivering guranteed results.</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={Competitive_img} alt="" />
                <div className="portfolio-layer">
                    <h4>Competitive Pricing</h4>
                    <p>Offers a good resonable value proposition compared to the competitors..</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    )
}
