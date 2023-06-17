import AboutHead from "./AboutHead";
import Mission from "./Mission";
import Teams from "./Teams/Teams";
import Values from "./Values";
import Vission from "./Vission";
import icons from '../../assets/About-Page/FitAdvice - minimal full color.svg'
import { ScrollRestoration } from "react-router-dom";


const About = () => {
    return (
      <section className="relative px-0 md:px-10">
        <AboutHead />
        <Mission />

        <svg
          width="325"
          height="325"
          viewBox="0 0 325 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-32 right-56 md:-bottom-24 md:-left-32 lg:top-48 lg:-left-36 hidden lg:block md:block"
        >
          <path
            opacity="0.08"
            d="M325 162C325 251.47 252.246 324 162.5 324C72.7537 324 0 251.47 0 162C0 72.5299 72.7537 0 162.5 0C252.246 0 325 72.5299 325 162ZM38.7416 162C38.7416 230.14 94.1501 285.378 162.5 285.378C230.85 285.378 286.258 230.14 286.258 162C286.258 93.8604 230.85 38.6224 162.5 38.6224C94.1501 38.6224 38.7416 93.8604 38.7416 162Z"
            fill="url(#paint0_linear_27_9)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_27_9"
              x1="162.459"
              y1="8.24353"
              x2="162.459"
              y2="282.861"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3EFFFF" />
              <stop offset="1" stopColor="#00FF99" />
            </linearGradient>
          </defs>
        </svg>

        <img src={icons} className="absolute md:block hidden right-0 top-1/4 md:top-60 w-[500px]" alt="" />
        <Vission />
        <Values />
        <Teams />
        <ScrollRestoration />
      </section>
    );
};

export default About;