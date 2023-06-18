import { useEffect, useState } from "react";
import avater from "../../assets/Home-Page/avater.png";
import avater3 from "../../assets/Home-Page/avater3.jpeg";
import avater2 from "../../assets/Home-Page/avater2.jpeg";
import quoteICon from "../../assets/Home-Page/qoute-icon.svg";

import { motion } from 'framer-motion'



const Carusel = () => {



  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [

    {
      id: 1,
      details: " As a sports coach specializing in physical preparation for endurance sports, FitAdvice is the perfect tool to reach a wider audience. Through the app, I can share my skills and expertise with clients from all over the world, regardless of their geographical location.The platform also makes it easy to manage my workouts, availability and payments.FitAdvice has truly transformed my coaching business and opened up new opportunities.",
      avater: avater,
      name: "David",
      title: "Sports coach"

    },
    {
      id: 2,
      details: "I was delighted with my first golf session! Matthieu is passionate about what he does, he instills confidence, takes the time to explain things, and adapts to our pace, level and goals. Go for it with your eyes closed!",
      avater: avater2,
      name: "Marc",
      title: "The coachee"

    },
    {
      id: 1,
      details: "As a businessman with a passion for sport, this application literally won me over. It provides competent, personalized sports coaches, which has considerably improved my performance. Whats more, it makes it much easier to manage my sporting activities. I highly recommend it to all business people who want to combine professional success with sporting well-being.",
      avater: avater3,
      name: "Henry",
      title: "The coachee"

    },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    
    setCurrentSlide(slideIndex);
  };



  return (
    <div className="w-full  flex flex-col justify-between relative">
      {slides.map((slide, index) => (
        <motion.div
          initial={{ x: 600 }}
          animate={{ x: index === currentSlide ? 0 : 600 }}
          exit={{  x: -600 }}
          transition={{ duration: 0.2 }}
          key={index}
          className={`${index === currentSlide ? 'block' : 'hidden'
            }  w-full h-full`}
        >


          <div
            className="px-3 flex flex-col justify-around h-[400px]">
            <p className="text-center md:text-start text-sm md:text-lg text-[#666666] my-4">
              {slide.details}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex  my-4 gap-4 items-center">
                <div className="w-[87px] h-[87px] overflow-hidden rounded-full">
                  <img src={slide.avater} alt="" className="" />
                </div>
                <div>
                  <p className="text-2xl text-[#231F20] font-bold ">
                    {" "}
                    {slide.name}
                  </p>
                  <p className="text-lg">{slide.title}</p>
                </div>
              </div>
              <div className="flex opacity-50 gap-x-4">
                <img src={quoteICon} alt="" />
                <img src={quoteICon} alt="" />
              </div>
            </div>
          </div>


        </motion.div>
      ))}

      <div className=" bottom-0 left-0 right-0 fle space-x-2 mb-4">
        {slides.map((_, index) => (
          <button
            key={index}


            onClick={() => goToSlide(index)}
          >

            {
              index === currentSlide ? <>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.5" cy="6.5" r="6" stroke="url(#paint0_linear_12_100)" />
                  <circle cx="6.5" cy="6.5" r="3" fill="url(#paint1_linear_12_100)" stroke="url(#paint2_linear_12_100)" />
                  <defs>
                    <linearGradient id="paint0_linear_12_100" x1="6.49834" y1="0.330759" x2="6.49834" y2="11.3493" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3EFFFF" />
                      <stop offset="1" stopColor="#00FF99" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_12_100" x1="6.49911" y1="3.1781" x2="6.49911" y2="9.11119" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3EFFFF" />
                      <stop offset="1" stopColor="#00FF99" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_12_100" x1="6.49911" y1="3.1781" x2="6.49911" y2="9.11119" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3EFFFF" />
                      <stop offset="1" stopColor="#00FF99" />
                    </linearGradient>
                  </defs>
                </svg>
              </>
                :
                <>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="6.5" r="6" stroke="url(#paint0_linear_12_101)" />
                    <defs>
                      <linearGradient id="paint0_linear_12_101" x1="6.49834" y1="0.330759" x2="6.49834" y2="11.3493" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3EFFFF" />
                        <stop offset="1" stopColor="#00FF99" />
                      </linearGradient>
                    </defs>
                  </svg>
                </>
            }




          </button>
        ))}
      </div>
    </div>
  );
};

export default Carusel;