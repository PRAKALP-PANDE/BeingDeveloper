import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css'


export default function CardCarousel() {

    const Card = ({ title, image, description }) => {
        return (
            <div className="card">
                {/* <img src={image} alt={title} /> */}
                <div className="card-content">
                    <h2><span>{title}</span></h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    };

    const cardData = [
        {
            title: 'Quality',
            image: 'https://picsum.photos/id/237/300/200',
            description: 'We believe that Quality service is essential for building and maintaining customer satisfaction and loyalty.'
        },
        {
            title: 'Trust',
            image: 'https://picsum.photos/id/238/300/200',
            description: 'Trust is the cornerstone of effective collaboration, enabling team members to rely on one another and work towards shared goals with confidence.'
        },
        {
            title: 'Innovation',
            image: 'https://picsum.photos/id/239/300/200',
            description: 'Our innovative service is one that provides unique, creative, and valuable solutions to meet the needs and desires of customers.'
        },
        {
            title: 'Experience',
            image: 'https://picsum.photos/id/239/300/200',
            description: 'understand and meet the needs and expectations of customers by providing personalized, efficient, and memorable interactions.'
        },
        {
            title: 'Competitive pricing',
            image: 'https://picsum.photos/id/239/300/200',
            description: 'Offers affordable and competitive prices while maintaining a high level of quality and customer satisfaction.'
        },
        {
            title: 'Commitment',
            image: 'https://picsum.photos/id/240/300/200',
            description: 'Our company/community is committed to providing exceptional service by dedicating ourselves fully to meeting the needs and expectations of our customers.'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplayspeed: 100,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '60px',
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="card-carousel">
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} />
                    ))}
                </Slider>
                {/* <p className="current-slide">Current slide: {currentSlide + 1}</p> */}
            </div>
        </div>
    )
}
