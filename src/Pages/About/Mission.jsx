import batminton from "../../assets/About-Page/batminton.png";


const Mission = () => {
  return (
    <section className="pt-[200px] lg:flex lg:justify-center lg:gap-x-20">
      <div className="">
        <img
          src={batminton}
          alt="a boy playing"
          className="w-[400px] h-[500px] md:ml-36 md:w-[450px]"
        />
      </div>

      <div className="text-[#231F20] pt-[64px] md:pt-[74px] lg:pt-[152px]">
        
        <h1 className="lg:text-6xl text-5xl font-bold text-center">
          Our Mission
        </h1>
        <p className="text-center text-[20px] pt-16 lg:w-[641px] md:text-center lg:text-left lg:tracking-tight">
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
