

const Vission = () => {
    return (
      <div className="pt-[150px] text-[#231F20]">
        <h1 className="text-center text-[42px] font-bold">Our Vission</h1>
        {/* for the tablate version */}
        <p className="pb-5 hidden lg:hidden md:block text-center"> 
          "To inspire a healthy and balanced lifestyle by promoting fitness and
          wellness through a global community of professional trainers."
        </p>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(62, 255, 255, 0.4) 2.54%, rgba(0, 255, 153, 0.4) 87.3%)",
          }}
          className="flex justify-center items-center rounded-[50px] pt-[33px] lg:flex md:hidden"
        >
          <p className="pb-5 hidden lg:block md:hidden">
            <span className="flex justify-center items-center">
              "To inspire a healthy and balanced lifestyle by promoting fitness
              and wellness through a global
            </span>
            <span className="flex justify-center items-center">
              community of professional trainers."
            </span>
          </p>

          <div className="lg:hidden md:hidden w-[334px] h-[175px] flex justify-center items-center p-[48px]">
            <p className="text-center pb-6">
              "To inspire a healthy and balanced lifestyle by promoting fitness
              and wellness through a global community of professional trainers."
            </p>
          </div>
        </div>
      </div>
    );
};

export default Vission;