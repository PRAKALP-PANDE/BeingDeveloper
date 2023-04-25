import React from 'react';

export default function Portfolio() {

    let data = require('./data.json');
    return (
        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={data.portfolio_1_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_1_tag}</h4>
                    <p>{data.portfolio_1_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={data.portfolio_2_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_2_tag}</h4>
                    <p>{data.portfolio_2_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={data.portfolio_3_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_3_tag}</h4>
                    <p>{data.portfolio_3_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={data.portfolio_4_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_4_tag}</h4>
                    <p>{data.portfolio_4_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={data.portfolio_5_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_5_tag}</h4>
                    <p>{data.portfolio_5_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={data.portfolio_1_img} alt="" />
                <div className="portfolio-layer">
                    <h4>{data.portfolio_6_tag}</h4>
                    <p>{data.portfolio_6_para}</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    )
}
