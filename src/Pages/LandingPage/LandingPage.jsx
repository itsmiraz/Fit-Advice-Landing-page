import MainButton from "../../Components/Modules/Buttons/Buttons";
import heroImg from "../../assets/Home-Page/hero-img.png";
import iphoneMockup from "../../assets/Home-Page/iPhone 12 Pro.png";
import settingIcon from "../../assets/Home-Page/setting-icon.svg";
import saveIcon from "../../assets/Home-Page/safe-icon.svg";
import alldayIcon from "../../assets/Home-Page/24-7icon.svg";
import discoverUs from "../../assets/Home-Page/discover-use-img.png";
import discoverUsMobile from "../../assets/Home-Page/discove-us-mobie.png";
import clientimg from "../../assets/Home-Page/client-image.png";
import avater from "../../assets/Home-Page/avater.png";
import quoteICon from "../../assets/Home-Page/qoute-icon.svg";
import Accordion from "../../Components/Modules/Accordian/Accordian";
import playstorebtn from "../../assets/Home-Page/Google Play.png";
import applestorebtn from "../../assets/Home-Page/App Store.png";
import iphoneMockup2 from "../../assets/Home-Page/mock-up-1.png";
import iphones from "../../assets/Home-Page/iphones-2.png";
import avater2 from "../../assets/Home-Page/avater2.jpeg";
import avater3 from "../../assets/Home-Page/avater3.jpeg";

import iphone1 from "../../assets/Home-Page/Iphones/iphone1.png";
import iphone2 from "../../assets/Home-Page/Iphones/iphone2.png";
import iphone3 from "../../assets/Home-Page/Iphones/iphone3.png";
import iphone4 from "../../assets/Home-Page/Iphones/iphone4.png";
import iphone5 from "../../assets/Home-Page/Iphones/iphone5.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const mobiles = [
    {
      img: iphone1,
    },
    {
      img: iphone2,
    },
    {
      img: iphone3,
    },
    {
      img: iphone4,
    },
    {
      img: iphone5,
    },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:support@fitadvice.eu";
  };

  return (
    <section className="py-10 scroll-smooth">
      {/* Hero */}
      <div
        id="head"
        className="md:px-20 2xl:px-20   px-2  mx-auto grid grid-cols-1  my-10 lg:grid-cols-2 gap-10 md:gap-20 "
      >
        <div className="py-4 lg:text-start text-center lg:py-20 relative ">
          <h1 className="font-extrabold leading-14 md:leading-normal	 text-[#231F20] text-[45px] lg:text-6xl">
            Transform <br />
            your life with  <br className="lg:block hidden" />
            FitAdvice
          </h1>
          <p className="text-[#666666] my-6 text-sm md:text-xl">
            Become the best version of yourself. Join FitAdvice and reach your  <br className="lg:block hidden" />
            fitness goals today with the best fitness coaches
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.fitadvice.fitadvice"
            rel="noreferrer"
            target="_blank"
          >
            <MainButton title="Download the App" />
          </a>

          <svg
            className="absolute top-0 -left-20"
            width="325"
            height="325"
            viewBox="0 0 325 325"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.08"
              d="M325 162.5C325 252.246 252.246 325 162.5 325C72.7537 325 0 252.246 0 162.5C0 72.7537 72.7537 0 162.5 0C252.246 0 325 72.7537 325 162.5ZM38.7416 162.5C38.7416 230.85 94.1501 286.258 162.5 286.258C230.85 286.258 286.258 230.85 286.258 162.5C286.258 94.1501 230.85 38.7416 162.5 38.7416C94.1501 38.7416 38.7416 94.1501 38.7416 162.5Z"
              fill="url(#paint0_linear_8_148)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_148"
                x1="162.459"
                y1="8.26897"
                x2="162.459"
                y2="283.734"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3EFFFF" />
                <stop offset="1" stopColor="#00FF99" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="absolute right-0 bottom-10"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.2874 20.2161L23.8101 16.536C22.2104 15.743 21.5471 13.8087 22.3401 12.209L26.0203 4.73173C26.8132 3.13198 26.15 1.19773 24.5503 0.404754C22.9505 -0.38822 21.0163 0.275 20.2233 1.87475L16.5431 9.35202C15.7502 10.9518 13.8159 11.615 12.2162 10.822L4.74408 7.16119C3.14433 6.36822 1.21008 7.03144 0.417102 8.63118C-0.375873 10.2309 0.287348 12.1652 1.88709 12.9582L9.36437 16.6383C10.9641 17.4313 11.6273 19.3655 10.8344 20.9653L7.15422 28.4425C6.36125 30.0423 7.02447 31.9765 8.62421 32.7695C10.224 33.5625 12.1582 32.8993 12.9512 31.2995L16.6313 23.8223C17.4243 22.2225 19.3586 21.5593 20.9583 22.3523L28.4356 26.0324C30.0353 26.8254 31.9696 26.1622 32.7625 24.5624C33.5503 22.9433 32.8871 21.0091 31.2874 20.2161Z"
              fill="url(#paint0_linear_17_44)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_17_44"
                x1="13.0532"
                y1="3.41204"
                x2="19.3589"
                y2="26.9451"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3EFFFF" />
                <stop offset="1" stopColor="#00FF99" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="lg:order-last order-first">
          <img src={heroImg} className="lg:w-9/12 mx-auto w-full " alt="" />
        </div>
      </div>

    
      {/* What we Offer */}
      <div className="md:px-20 2xl:px-20   my-10 md:my-32 px-6 mx-auto grid grid-cols-1  lg:grid-cols-2 gap-10 md:gap-20">
        <div className="order-first lg:order-first md:order-last">
          <img src={iphoneMockup} className="w-full md:w-fit" alt="" />
        </div>
        <div>
          <h1 className="text-4xl lg:text-start text-center lg:text-5xl text-[#333333] font-bold">
            What we offer
          </h1>

          <div className="my-10">
            <div className="flex my-2 lg:text-start text-center lg:justify-start justify-center items-center gap-4">
              <svg
                width="22"
                height="22"
                className="hidden lg:block"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5385 11.0002C19.5385 15.8604 15.6507 19.8002 10.8547 19.8002C6.05871 19.8002 2.1709 15.8604 2.1709 11.0002C2.1709 6.14003 6.05871 2.2002 10.8547 2.2002C15.6507 2.2002 19.5385 6.14003 19.5385 11.0002Z"
                  fill="#19FFC3"
                  fillOpacity="0.14"
                />
                <path
                  d="M10.8548 22C4.8599 22 0 17.0751 0 11C0 4.92493 4.8599 0 10.8548 0C16.8496 0 21.7095 4.92493 21.7095 11C21.7028 17.0722 16.8468 21.9932 10.8548 22ZM10.8548 0.733333C5.25958 0.733333 0.723651 5.32996 0.723651 11C0.723651 16.67 5.25958 21.2667 10.8548 21.2667C16.4499 21.2667 20.9859 16.67 20.9859 11C20.9795 5.33262 16.4473 0.73975 10.8548 0.733333Z"
                  fill="url(#paint0_linear_17_17)"
                />
                <path
                  d="M15.9204 11C15.9204 13.8351 13.6525 16.1334 10.8549 16.1334C8.05727 16.1334 5.78931 13.8351 5.78931 11C5.78931 8.16501 8.05727 5.8667 10.8549 5.8667C13.6525 5.8667 15.9204 8.16501 15.9204 11Z"
                  fill="url(#paint1_linear_17_17)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_17_17"
                    x1="10.852"
                    y1="0.559746"
                    x2="10.852"
                    y2="19.2066"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3EFFFF" />
                    <stop offset="1" stopColor="#00FF99" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_17_17"
                    x1="10.8536"
                    y1="6.12791"
                    x2="10.8536"
                    y2="14.8298"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3EFFFF" />
                    <stop offset="1" stopColor="#00FF99" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="text-xl mb-4 font-semibold">
                Personalized coaching
              </p>
            </div>
            <p className="text-[#666666] pl-0 lg:text-start text-center lg:pl-10 text-[16px] md:text-lg">
              FitAdvice offers personalized sports coaching with certified
              coaches. Whether you are a beginner or an experienced athlete, our
              coaches will guide you in reaching your fitness goals by adapting
              the workouts to your specific needs.
            </p>
          </div>

          <div className="my-10">
            <div className="flex my-2 lg:text-start text-center lg:justify-start justify-center items-center gap-4">
              <svg
                width="22"
                height="22"
                className="hidden lg:block"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5385 11.0002C19.5385 15.8604 15.6507 19.8002 10.8547 19.8002C6.05871 19.8002 2.1709 15.8604 2.1709 11.0002C2.1709 6.14003 6.05871 2.2002 10.8547 2.2002C15.6507 2.2002 19.5385 6.14003 19.5385 11.0002Z"
                  fill="#19FFC3"
                  fillOpacity="0.14"
                />
                <path
                  d="M10.8548 22C4.8599 22 0 17.0751 0 11C0 4.92493 4.8599 0 10.8548 0C16.8496 0 21.7095 4.92493 21.7095 11C21.7028 17.0722 16.8468 21.9932 10.8548 22ZM10.8548 0.733333C5.25958 0.733333 0.723651 5.32996 0.723651 11C0.723651 16.67 5.25958 21.2667 10.8548 21.2667C16.4499 21.2667 20.9859 16.67 20.9859 11C20.9795 5.33262 16.4473 0.73975 10.8548 0.733333Z"
                  fill="url(#paint0_linear_17_17)"
                />
                <path
                  d="M15.9204 11C15.9204 13.8351 13.6525 16.1334 10.8549 16.1334C8.05727 16.1334 5.78931 13.8351 5.78931 11C5.78931 8.16501 8.05727 5.8667 10.8549 5.8667C13.6525 5.8667 15.9204 8.16501 15.9204 11Z"
                  fill="url(#paint1_linear_17_17)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_17_17"
                    x1="10.852"
                    y1="0.559746"
                    x2="10.852"
                    y2="19.2066"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3EFFFF" />
                    <stop offset="1" stopColor="#00FF99" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_17_17"
                    x1="10.8536"
                    y1="6.12791"
                    x2="10.8536"
                    y2="14.8298"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3EFFFF" />
                    <stop offset="1" stopColor="#00FF99" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="text-xl mb-4 font-semibold">
                Flexibility and accessibility
              </p>
            </div>
            <p className="text-[#666666] pl-0 lg:text-start text-center lg:pl-10 text-[16px] md:text-lg">
              Our application enables you to benefit from the services of a quality professional trainer, whatever your geographical location. You can book and select a trainer online, and communicate easily with your trainer via the platform, giving you total flexibility in your schedule.
            </p>
          </div>

          <div className="my-10">
            <div className="flex my-2 lg:text-start text-center lg:justify-start justify-center items-center gap-4">
              <svg
                width="22"
                height="22"
                className="hidden lg:block"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5385 11.0002C19.5385 15.8604 15.6507 19.8002 10.8547 19.8002C6.05871 19.8002 2.1709 15.8604 2.1709 11.0002C2.1709 6.14003 6.05871 2.2002 10.8547 2.2002C15.6507 2.2002 19.5385 6.14003 19.5385 11.0002Z"
                  fill="#19FFC3"
                  fillOpacity="0.14"
                />
                <path
                  d="M10.8548 22C4.8599 22 0 17.0751 0 11C0 4.92493 4.8599 0 10.8548 0C16.8496 0 21.7095 4.92493 21.7095 11C21.7028 17.0722 16.8468 21.9932 10.8548 22ZM10.8548 0.733333C5.25958 0.733333 0.723651 5.32996 0.723651 11C0.723651 16.67 5.25958 21.2667 10.8548 21.2667C16.4499 21.2667 20.9859 16.67 20.9859 11C20.9795 5.33262 16.4473 0.73975 10.8548 0.733333Z"
                  fill="url(#paint0_linear_17_17)"
                />
                <path
                  d="M15.9204 11C15.9204 13.8351 13.6525 16.1334 10.8549 16.1334C8.05727 16.1334 5.78931 13.8351 5.78931 11C5.78931 8.16501 8.05727 5.8667 10.8549 5.8667C13.6525 5.8667 15.9204 8.16501 15.9204 11Z"
                  fill="url(#paint1_linear_17_17)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_17_17"
                    x1="10.852"
                    y1="0.559746"
                    x2="10.852"
                    y2="19.2066"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3EFFFF" />
                    <stop offset="1" stopColor="#00FF99" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_17_17"
                    x1="10.8536"
                    y1="6.12791"
                    x2="10.8536"
                    y2="14.8298"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3EFFFF" />
                    <stop offset="1" stopColor="#00FF99" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="text-xl mb-4 font-semibold">
                Progress tracking
              </p>
            </div>
            <p className="text-[#666666] pl-0 lg:text-start text-center lg:pl-10 text-[16px] md:text-lg">
              With FitAdvice, you have access to detailed tracking of your progress. You can record your performance, track your goals and view your training history. This feature allows you to stay motivated and measure your progress over time.
            </p>
          </div>

          <div className="text-center lg:text-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.fitadvice.fitadvice"
              rel="noreferrer"
              target="_blank"
            >
              <MainButton title="Download the App" />
            </a>
          </div>
        </div>
      </div>

      {/* Our Advantage */}
      <div className="my-20 md:px-10 lg:px-0 px-0">
        <h1 className="text-center text-3xl  md:text-4xl font-bold text-[#231F20]">
          Our advantages
        </h1>
        <p className="text-center text-lg md:text-xl text-[#666666] my-4">
          A fully secure platform, optimal searchability and 24/7 customer
          service. You deserve <br className="lg:block hidden" /> the best in
          your fitness journey, and we re here to support you every step of the
          way.
        </p>

        <div className="container my-24 px-4   md:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-3   shadow-md h-[356px] duration-200 hover:shadow-xl boder-none hover:border-b-8 rounded-xl border-[#00FF99] flex flex-col justify-center items-center">
            <img src={saveIcon} alt="" />
            <h1 className="text-center text-2xl text-[#231F20] my-2 font-bold">
              Fully Secured
            </h1>
            <p className="text-center text-lg text-[#666666] ">
              Your Privacy and security are our top priority. FitAdvice provides
              a fully secure platform to ensure the confidentiality of your
              personal data and training information.
            </p>
          </div>
          <div className="p-3   md:my-0 my-10 shadow-md h-[356px] duration-200 hover:shadow-xl boder-none hover:border-b-8 rounded-xl border-[#00FF99] flex flex-col justify-center items-center">
            <img src={settingIcon} alt="" />
            <h1 className="text-center text-2xl text-[#231F20] my-2 font-bold">
              Easy To Find
            </h1>
            <p className="text-center text-lg text-[#666666] ">
              Our user-friendly interface and advanced search tools make it
              quick and easy to find the right coach for your specific needs.
            </p>
          </div>
          <div className="p-3 max-w-[431px] mx-auto md:col-start-1 md:col-end-3  lg:col-start-3 lg:col-end-4  shadow-md h-[356px] duration-200 hover:shadow-xl boder-none hover:border-b-8 rounded-xl border-[#00FF99] flex flex-col justify-center items-center">
            <img src={alldayIcon} alt="" />
            <h1 className="text-center text-2xl text-[#231F20] my-2 font-bold">
              24/7 Service
            </h1>
            <p className="text-center text-lg text-[#666666] ">
              Fitadvice offers 24/7 customer support. Whether you have
              questions, concerns or need assistance, our team is here to help
              you at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Discover Us */}
      <div className="my-20 md:my-40 relative">
        <div className="  lg:rounded-none rounded-2xl overflow-hidden ">
          <img
            src={discoverUs}
            alt=""
            className="w-full lg:block hidden z-40 h md:scale-100 scale-y-150 relative"
          />
          <img
            src={discoverUsMobile}
            alt=""
            className=" p-4 block  w-full lg:hidden z-40 relative"
          />
        </div>
        <div className="z-40  absolute flex-col inset-0 flex items-center justify-center">
          <svg
            className="w-[40px] md:w-[91px] h-[40px] md:h-[91px]"
            viewBox="0 0 91 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.5"
              cy="45"
              r="42.5"
              stroke="url(#paint0_linear_73_2)"
              strokeWidth="5"
            />
            <path
              d="M63 43.134C63.6667 43.5189 63.6667 44.4811 63 44.866L36 60.4545C35.3333 60.8394 34.5 60.3583 34.5 59.5885L34.5 28.4115C34.5 27.6417 35.3333 27.1606 36 27.5455L63 43.134Z"
              fill="url(#paint1_linear_73_2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_73_2"
                x1="45.4885"
                y1="2.28987"
                x2="45.4885"
                y2="78.5724"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3EFFFF" />
                <stop offset="1" stopColor="#00FF99" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_73_2"
                x1="63.4823"
                y1="43.9949"
                x2="29.5789"
                y2="43.9949"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3EFFFF" />
                <stop offset="1" stopColor="#00FF99" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="text-xl md:text-3xl font-bold text-white">
            Discover us
          </h1>
        </div>
        <svg
          className="absolute left-0 -top-36 opacity-80"
          width="177"
          height="150"
          viewBox="0 0 177 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M4.47999 -1.54256e-05C2.98999 -1.53701e-05 3.78999 0.255569 -7.67747e-06 0.289642L-4.24e-06 67.2874C-4.24263e-06 67.2363 2.74 67.0062 4.09 67.0062C56.86 67.0062 99.7 105.728 99.7 149.927L176.94 149.927C176.95 72.1094 99.92 -1.89798e-05 4.47999 -1.54256e-05Z"
            fill="url(#paint0_linear_17_152)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_17_152"
              x1="4.50188"
              y1="74.9826"
              x2="154.473"
              y2="74.9826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3EFFFF" />
              <stop offset="1" stopColor="#00FF99" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Become a Coach Partner with FitAdvixe */}
      <div id="becomecoach" className="px-0 md:px-10">
        <h1 className="text-center text-3xl  md:text-4xl font-bold text-[#231F20]">
          Become a Coach Partner with FitAdvice{" "}
        </h1>
        <p className="text-center  text-lg md:text-xl text-[#666666] my-4">
          Join the FitAdvice Coach Partners community now and grow your business
          by <br className="md:block hidden" /> offering your services to a
          global audience. Together, we can transform the lives of{" "}
          <br className="md:block hidden" /> many people through quality and
          personalized sports coaching.
        </p>


        <div className="hidden md:flex lg:flex justify-center items-center ">
          <img src={iphones} className="my-10" alt="" />

        </div>


        {/* for mobile device */}
        <div className="flex flex-col gap-[40px] px-[90px] pt-[52px] md:hidden lg:hidden">
          {mobiles.map((m, i) => (
            <img key={i} src={m.img} alt="" />
          ))}
        </div>

        <div className="text-center my-10">
          <MainButton title="Get the app" />
        </div>

      </div>

      {/* Testimonials */}
      <div className="grid relative  my-20 md:my-20 grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
        <div className="p-4 md:p-20">
          <h1 className="text-[30px] md:text-start text-center md:text-5xl leading-none font-bold text-[#231F20]">
            Our Happy Clients
            <br className="" />
            Says About Us
          </h1>

          <div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper my-10 h-fit"
            >
              <SwiperSlide>
                <div className="px-3">
                  <p className="text-center md:text-start text-sm md:text-lg text-[#666666] my-4">
                    As a sports coach specializing in physical preparation for
                    endurance sports, FitAdvice is the perfect tool to reach a
                    wider audience. Through the app, I can share my skills and
                    expertise with clients from all over the world, regardless
                    of their geographical location. The platform also makes it
                    easy to manage my workouts, availability and payments.
                    FitAdvice has truly transformed my coaching business and
                    opened up new opportunities.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex  my-4 gap-4 items-center">
                      <div>
                        <img
                          src={avater}
                          alt=""
                          className="w-20 md:w-24 my-2 h-20 md:h-24 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-2xl text-[#231F20] font-bold ">
                          David
                        </p>
                        <p className="text-lg">Sports coach</p>
                      </div>
                    </div>
                    <div className="flex opacity-50 gap-x-4">
                      <img src={quoteICon} alt="" />
                      <img src={quoteICon} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-3">
                  <p className="text-center md:text-start text-sm md:text-lg text-[#666666] my-4">
                    I was delighted with my first golf session! Matthieu is
                    passionate about what he does, he instills confidence, takes
                    the time to explain things, and adapts to our pace, level
                    and goals. Go for it with your eyes closed!
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex  my-4 gap-4 items-center">
                      <div className="w-20 md:w-24 my-2 h-20 md:h-24 overflow-hidden rounded-full">
                        <img src={avater2} alt="" className="" />
                      </div>
                      <div>
                        <p className="text-2xl text-[#231F20] font-bold ">
                          {" "}
                          Marc
                        </p>
                        <p className="text-lg">The coachee</p>
                      </div>
                    </div>
                    <div className="flex opacity-50 gap-x-4">
                      <img src={quoteICon} alt="" />
                      <img src={quoteICon} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-3">
                  <p className="text-center md:text-start text-sm md:text-lg text-[#666666] my-4">
                    As a businessman with a passion for sport, this application
                    literally won me over. It provides competent, personalized
                    sports coaches, which has considerably improved my
                    performance. What{"'"}s more, it makes it much easier to
                    manage my sporting activities. I highly recommend it to all
                    business people who want to combine professional success
                    with sporting well-being.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex  my-4 gap-4 items-center">
                      <div className="w-20 md:w-24 my-2 h-20 md:h-24 overflow-hidden rounded-full">
                        <img src={avater3} alt="" className="" />
                      </div>
                      <div>
                        <p className="text-2xl text-[#231F20] font-bold ">
                          {" "}
                          Henry
                        </p>
                        <p className="text-lg">The coachee</p>
                      </div>
                    </div>
                    <div className="flex opacity-50 gap-x-4">
                      <img src={quoteICon} alt="" />
                      <img src={quoteICon} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="relative">
          <img className="relative z-40 lg:rounded-none rounded-[50px] w-full md:-10 lg:p-0 p-4" src={clientimg} alt="" />
          <svg
            className="absolute md:block hidden right-0 -top-44 opacity-50"
            width="174"
            height="177"
            viewBox="0 0 174 177"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-1.48671e-05 172.47C-1.49974e-05 173.96 0.299988 173.16 0.339981 176.95L78.98 176.95C78.92 176.95 78.65 174.21 78.65 172.86C78.65 120.09 124.1 77.2502 175.98 77.2502L175.98 0.0101929C84.64 0.000190379 -6.5235e-06 77.0302 -1.48671e-05 172.47Z"
              fill="url(#paint0_linear_17_154)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_17_154"
                x1="88.0124"
                y1="172.448"
                x2="88.0124"
                y2="22.4769"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3EFFFF" />
                <stop offset="1" stopColor="#00FF99" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="my-10 md:my-40 px-2 md:px-20 ">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#231F20]">
          Frequently asked questions
        </h1>
        <p className="text-center text-lg md:text-xl text-[#666666] my-4">
          Find the answers to all your questions and choose with confidence
          among our qualified <br className="md:block hidden" /> and experienced
          coaches thanks to our complete FAQ on FitAdvice!
        </p>
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 container mx-auto">
          <div>
            <Accordion
              title=" What is FitAdvice?"
              content="FitAdvice is a platform that connects consumers who want to 
                                    engage in sports with certified fitness coaches. It allows users to 
                                     benefit from personalized guidance, regardless of their geographical 
                                    location."
            />
            <Accordion
              title="How can I find a fitness coach on FitAdvice?"
              content="To find a fitness coach on FitAdvice, you can filter the results based 
                            on your preferences, such as location, type of training, etc. Once you 
                            have found a coach that matches your needs, you can schedule an 
                            appointment directly through our platform."
            />
            <Accordion
              title="How can I schedule an appointment with a fitness coach on FitAdvice?"
              content='To schedule an appointment with a fitness coach on FitAdvice, you 
                            first need to create an account on our mobile application. Once 
                            logged in, you can browse through the coach profiles and select the 
                            one that interests you. On the apps homepage you will find a 
                            "Book" button when you select a fitness coach. Click on it and follow 
                            the steps to choose a date and time that suits you'
            />
            <Accordion
              title="How can I cancel or modify an appointment on FitAdvice"
              content='To cancel or modify an appointment on FitAdvice, simply log in to 
                            your account and go to the "My Sessions" section. From there, you 
                            can select the appointment you want to cancel or modify and follow 
                            the provided instructions'
            />
            <Accordion
              title="What types of training are offered by coaches on FitAdvice"
              content="Coaches on FitAdvice offer a wide range of training tailored to 
                            different goals and fitness levels. This can include strength training, 
                            cardio, yoga, Pilates, etc. You can search for coaches based on the 
                            type of training that interests you (Tennis, Golf, etc.)"
            />
            <Accordion
              title="How are the rates of coaches on FitAdvice determined?"
              content="The rates of coaches on FitAdvice are determined by the coaches 
                            themselves. Each coach has the freedom to set their own rates 
                            based on their experience, specialization, and market demand. When 
                            you view a coachs profile, you can see their displayed rates."
            />
          </div>

          <div>
            <Accordion
              title="How can I make payment for the services of coaches on FitAdvice?"
              content="FitAdvice facilitates the payment process between users and 
                            coaches. Once you have booked a session with a coach, you can 
                            make the payment directly on our platform. We accept major credit 
                            cards and secure online payments"
            />
            <Accordion
              title="What guarantees do I have as a user regarding the quality of coaches 
                            on FitAdvice?"
              content="FitAdvice places great importance on the quality of coaches on the 
                            platform. We ensure that all coaches are certified and possess the 
                            necessary qualifications to provide quality training. Additionally, we 
                            encourage users to leave reviews and feedback on the coaches they 
                            have worked with to ensure transparency and help other users make 
                            confident choices."
            />
            <Accordion
              title="How can I become a fitness coach on FitAdvice?"
              content="If you are a certified fitness coach and want to join FitAdvice, you 
                            can fill out our registration form on our website. We will review your 
                            application and contact you to discuss the next steps."
            />
            <Accordion
              title="How does schedule management for coaches work on FitAdvice?"
              content="FitAdvice has a schedule management system for coaches. When a 
                            user schedules an appointment with a coach, the corresponding time 
                            slot is automatically blocked in the coachs calendar. This allows 
                            coaches to easily manage their availability and avoid scheduling 
                            conflicts."
            />
            <Accordion
              title="How can I contact FitAdvice customer support?"
              content="To contact FitAdvice customer support, you can send us an email at 
                            support@fitadvice.eu. We will do our best to assist you as quickly as 
                            possible."
            />
          </div>
        </div>
      </div>
      

      {/* Still Have a Question */}
      <div>
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#231F20]">
          Still have a question?
        </h1>
        <p className="text-center text-lg md:text-xl text-[#666666] my-4">
          Please do not hesitate to contact us if you have any further
          questions.
        </p>
        <div
          onClick={handleContactClick}
          className="flex justify-center items-center"
        >
          <MainButton title="Contact Us" />
        </div>
      </div>

      {/* Don't leave your fitness goals on hold. */}
      <div className=" mx-auto px-4 lg:px-20 2xl:px-20  md:pt-0  my-40 md:my-40">
        <div className="relative">
          <img
            src={iphoneMockup2}
            className="lg:translate-y-0  translate-y-60 hidden lg:block md:absolute right-0 md:right-20 -top-72 md:-top-32"
            alt=""
          />
          <img
            src={iphoneMockup2}
            className="absolute right-10 lg:hidden hidden md:block -top-32 w-6/12"
            alt=""
          />

          <div className="p-2 text-center md:text-start md:p-6 lg:pt-20  lg:p-20 rounded-xl bg-gradient-to-b from-[#3EFFFF66] to-[#00FF9966]">
            <img src={iphoneMockup2} className="md:hidden -translate-y-20 block" alt="" />

            <h1 className="text-[48px] -translate-y-10  text-center md:text-start lg:text-5xl my-4 font-semibold  text-[#2F313F]">
              Don{"'"}t leave your <br className="md:block hidden" /> fitness
              goals on hold.
            </h1>
            <p className="text-[#666666] text-[18px] my-2">
              Sign up today on FitAdvice and make every <br className="md:block hidden" /> day a step towards{" "}
              <br className="lg:block hidden" /> a more active lifestyle!
            </p>
            <div className="flex flex-wrap md:justify-start justify-center items-center">
              <img src={applestorebtn} alt="" />
              <a
                href="https://play.google.com/store/apps/details?id=com.fitadvice.fitadvice"
                rel="noreferrer"
                target="_blank"
              >
                <img src={playstorebtn} alt="" />
              </a>
            </div>
            <p className="text-[#666666] my-2">Or <Link className="underline" to='/contact'> sign up </Link> to start coaching</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
