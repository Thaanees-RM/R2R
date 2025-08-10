 import React from 'react';
 import Slider from 'react-slick';

 // Add slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import card1 from '../assets/card-1.png';
import card2 from '../assets/card-2.png';
import card3 from '../assets/card-3.png';
import card4 from '../assets/card-4.png';
import card5 from '../assets/card-5.png';
import card6 from '../assets/card-6.png';
import card7 from '../assets/card-7.png';
import card8 from '../assets/card-8.png';



const AboutCards = () => {

  const cardData = [
    {
      image: card1,
      title: 'UNESCO-Accredited International Student ID',
      subtitle: 'Globally recognized credentials with G17 Global Ambassador status',
    },
    {
      image: card2,
      title: 'Global Campaigns & Innovation Labs',
      subtitle: 'Exclusive invitations to international projects and initiatives',
    },
    {
      image: card3,
      title: 'Expert Masterclasses',
      subtitle: 'Access to exclusive sessions with UN-affiliated experts',
    },
    {
      image: card4,
      title: 'Diplomatic Mentorships',
      subtitle: 'Connect with diplomats, professionals & SDG pioneers',
    },
    {
      image: card5,
      title: 'G17 Summits & Leadership Events',
      subtitle: 'Priority access to global leadership gatherings',
    },
    {
      image: card6,
      title: 'Social Platform Recognition',
      subtitle: 'Featured recognition on G17 & Road to Rights platforms',
    },
    {
      image: card7,
      title: 'Scholarship Opportunities',
      subtitle: 'Access to conference, Masters & PhD program scholarships',
    },
    {
      image: card8,
      title: 'Global Discounts & Perks',
      subtitle: 'Local & international discounts via mobile app (Pizza Hut, Taco Bell + more!)',
    },
  ];

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1, // Show 1 card at a time
    slidesToScroll: 1,
  };

  const Card = ({ image, title, subtitle }) => (
    <div
      className="flex flex-col items-center justify-center gap-5 text-center px-12 py-10 rounded-lg w-70 h-80 bg-white"
      style={{ boxShadow: '4px 4px 30px 0px #1E1E1E29' }}
    >
      <div className="flex items-center bg-[#CFDDF6] p-3 rounded-sm">
        <img src={image} alt="card icon" className="w-7 h-7" />
      </div>
      <p className="text-base font-normal text-black leading-8">{title}</p>
      <p className="text-sm text-[#5B5B5B] font-normal leading-6">{subtitle}</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 bg-[#ECF3FF] px-10 md:px-20 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-[#0076A1]">
        What You Unlock with Global Accreditation
      </h1>
      <p className="text-xl font-semibold text-[#5B5B5B]">
        Access incredible perks, mentorships, masterclasses, and the global G17 network
      </p>

      {/* desktop view grid */}
      <div className="hidden md:grid grid-cols-4 gap-14">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>

      {/* Mobile View Carousel */}
      <div className="md:hidden w-full">
        <Slider {...sliderSettings}>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Slider>
      </div>

      
    </div>
  );
};

export default AboutCards;
