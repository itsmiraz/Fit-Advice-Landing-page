import batminton from "../../assets/About-Page/batminton.png";

const Mission = () => {
  return (
    <section className="grid px-4 pt-[45px] md:pt-[79px] lg:pt-[225px] z-30 relative grid-cols-1 gap-10 lg:gap-[91px] lg:grid-cols-2 place-items-center lg:px-40">
      <div className="">
        <img src={batminton} alt="a boy playing" className="" />
      </div>

      <div className="text-[#231F20]  text-center lg:text-start ">
        <h1 className="text-[42px] font-bold mx-auto lg:mx-0 my-6 lg:my-0  w-fit">
          Our Mission
        </h1>
        <p className="font-medium leading-[54px] lg:leading-[39px]  pt-0 lg:pt-[41px] text-xl text-black md:text-[24px] ">
          Our mission at FitAdvice is to inspire and support individuals on
          their journey towards a healthier, more balanced life. We are
          committed to providing quality, personalised coaching services,
          facilitating connections with qualified professional trainers, and
          creating a global community that encourages and supports everyone in
          their fitness and wellness goals.
        </p>
      </div>
    </section>
  );
};

export default Mission;
