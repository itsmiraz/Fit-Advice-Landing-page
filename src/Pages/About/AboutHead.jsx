

const AboutHead = () => {
  return (
    <div className="text-[#231F20] pt-[64px] md:pt-[74px] lg:pt-[152px]">
      <h1 className="lg:text-6xl text-5xl font-bold text-center">ABOUT US</h1>

      <p className="text-center text-[20px] pt-16 hidden md:hidden lg:block">
        We recognise the uniqueness of each individual and are committed to
        providing personalised support <br /> through our certified professional
        trainers. Whether you're aiming to lose weight, tone your muscles,{" "}
        <br />
        improve your endurance or develop your sporting skills, our experts are
        there to guide you every step of <br /> the way towards a healthier
        lifestyle.
      </p>
      <div className="relative">
        <svg
          width="325"
          height="325"
          viewBox="0 0 325 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-32 right-56 md:-bottom-24 md:-left-32 lg:-top-48 lg:-left-36 hidden lg:block md:block"
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

        <p className="text-center text-[20px] pt-16 block md:block lg:hidden lg:px-12">
          We recognise the uniqueness of each individual and are committed to
          providing personalised support through our certified professional
          trainers. Whether you're aiming to lose weight, tone your muscles,
          improve your endurance or develop your sporting skills, our experts
          are there to guide you every step of the way towards a healthier
          lifestyle.
        </p>
      </div>
    </div>
  );
};

export default AboutHead;
