import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Careers from './Careers';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ContactUs from './ContactUs';

export default function Home() {

    let data = require('./data.json');
    return (
        <div>
        <Navbar/>
            {/* <!-- Home section design --> */}
            <section className="home" id="home">
                <div className="home-content">
                    {/* <h3>Hello, It's </h3> */}
                    <h1>Being<span>Developer</span></h1>
                    <h3>Get your <span>software designed</span></h3>
                    <p>{data.home_para}</p>
                    <div className="social-media">
                        <a href="https://instagram.com/beingdev_in?igshid=YmMyMTA2M2Y=" target='_blank' ><i className='bx bxl-instagram'></i></a>
                        <a href="https://www.linkedin.com/company/being-developer/" target='_blank' ><i className='bx bxl-linkedin'></i></a>
                        <a href="https://t.me/beingdev_in" target='_blank' ><i className='bx bxl-telegram'></i></a>
                        <a href="https://twitter.com/beingdev_in?s=21&t=c_YCIPZ3jvB0z1hmuShSWQ" target='_blank' ><i className='bx bxl-twitter'></i></a>
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
                    <p>{data.About_para1} <br/> {data.About_para2} <br/> {data.About_para3}  </p>
                    <a href="#" className="btn">OPEN POSITIONS</a>
                </div>
            </section>

            {/* <!-- service section  --> */}
            <section className="services" id="services">
                <h2 className="heading">Our <span>Services</span></h2>
                <Services/>
            </section>

            {/* Timeline */}
            <section className="careers" id="careers">            
            <h2 className="heading">Your<span>Journey</span></h2>
                <Careers/>
            </section>

            {/* <!-- Why Should you Choose Us? section --> */}
            <section className="portfolio" id="portfolio">
                <h2 className="heading">Why Should you <span>Choose Us?</span></h2>
                <Portfolio/>
            </section>

            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Us!</span></h2>
                <ContactUs/>
            </section>
            <Footer/>            
        </div>
    )
}
