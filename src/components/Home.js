import React from 'react';
import './style.css';
import Quality_img from "./assets/img/Quality.jfif"
import Trust_img from "./assets/img/Trust.jfif"
import Innovation_img from "./assets/img/Innovation.jfif"
import Customer_img from "./assets/img/Customer.jfif"
import Experience_img from "./assets/img/Experience.jfif"
import Competitive_img from "./assets/img/Competitive.jfif"
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
    return (
        <div>
        <Navbar/>
            {/* <!-- Home section design --> */}
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hello, It's </h3>
                    <h1>BeingDeveloper</h1>
                    <h3>Get your <span>software designed</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam provident inventore ipsum, quam
                        eveniet nihil debitis?</p>
                    <div className="social-media">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-twitter'></i></a>
                        <a href="#"><i className='bx bxl-instagram'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                    </div>
                    <a href="#services" className="btn">EXPLORE</a>
                </div>
                <div className="home-img">
                    <img src="https://www.lambdatest.com/resources/images/news24.gif" alt="" />
                </div>
            </section>

            {/* CREATE CLEVER THINGS WITH US! section */}
            <section className="about" id="about">
                <div className="about-img">
                    <img src="https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif" alt="" />
                </div>

                <div className="about-content">
                    <h2 className="heading">CREATE CLEVER THINGS <span>WITH US!</span></h2>
                    {/*<h3>Developer</h3> */}
                    <p>We're always eager to meet fresh talent, so check out our open positions.<br />

                        We offer supportive workplace, latest technologies, and diverse career paths in software engineering, data analytics, cybersecurity, and project management. Join us for a fulfilling career in IT.s.</p>
                    <a href="#" className="btn">OPEN POSITIONS</a>
                </div>
            </section>

            {/* <!-- service section  --> */}
            <section className="services" id="services">
                <h2 className="heading">Our <span>Services</span></h2>
                <div className="services-container">
                    <div className="services-box">
                        <i className='bx bx-code-alt'></i>
                        <h3>App Developement</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo dolore doloribus earum at
                            ex sequi nostrum excepturi dicta facilis.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                        <i className='bx bxs-paint'></i>
                        <h3>Design and Marketing</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo dolore doloribus earum at
                            ex sequi nostrum excepturi dicta facilis.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                        <i className='bx bx-bar-chart-alt'></i>
                        <h3>Website Design and Developement</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo dolore doloribus earum at
                            ex sequi nostrum excepturi dicta facilis.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                        <i className='bx bx-bar-chart-alt'></i>
                        <h3>Hosting and Security</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo dolore doloribus earum at
                            ex sequi nostrum excepturi dicta facilis.</p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>
            </section>

            {/* <!-- Why Should you Choose Us? section --> */}
            <section className="portfolio" id="portfolio">
                <h2 className="heading">Why Should you <span>Choose Us?</span></h2>

                <div className="portfolio-container">
                    <div className="portfolio-box">
                        <img src={Quality_img} alt="" />
                        <div className="portfolio-layer">
                            <h4>Quality</h4>
                            <p>High-quality products and services that meet your needs and exceed the expectations.</p>
                            <a href="#"><i className='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={Trust_img} alt="" />
                        <div className="portfolio-layer">
                            <h4>Trust</h4>
                            <p>Delivery of the promises with integrity and transparency.</p>
                            <a href="#"><i className='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={Innovation_img} alt="" />
                        <div className="portfolio-layer">
                            <h4>Innovation</h4>
                            <p>Innovative products and services that provide unique solutions to your needs.</p>
                            <a href="#"><i className='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={Customer_img} alt="" />
                        <div className="portfolio-layer">
                            <h4>Customer Service</h4>
                            <p>Excellent customer service and support, with responsive and knowledgeable staff who are able to answer your questions and address any concerns.</p>
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
            </section>

            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Us!</span></h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="input-box">
                        <input type="number" placeholder="Mobile Number" />
                        <input type="text" placeholder="Email Subject" />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Messagge" className="btn" />
                </form>
            </section>
            <Footer/>            
        </div>
    )
}
