import team1 from "../../../assets/About-Page/team1.png";
import team2 from "../../../assets/About-Page/team2.png";
import "./Teams.css";

const Teams = () => {
  const datas = [
    {
      name: "Loïc MOUTOMBI",
      title: "Founder Partner",
      para: "There are many variations of passages of Lorem Ipsum available",
      img: team1,
    },
    {
      name: "François PETIT",
      title: "Founder Partner",
      para: "There are many variations of passages of Lorem Ipsum available",
      img: team2,
    },
  ];

  return (
    <div className="text-[#231F20]">
      <h4 className="pt-[100px] uppercase text-[16px] font-semibold text-center">
        who we are
      </h4>
      <h1 className="text-[42px] font-bold text-center">Meet our team</h1>
      <p className="text-center text-xl font-[500px]">
        Just take a look - each member of the team is watching your every <br />
        gesture and will hear your every whisper.
      </p>
      {/* flex flex-col-reverse gap-[74px] (is not working for small device)*/}
      <div
        className=" md:flex md:justify-center md:items-center md:gap-[32px] lg:flex lg:justify-center lg:items-center lg:gap-[32px] pt-[48px] pb-[90px]"
      >
        {datas.map((data, i) => (
          <div
            key={i}
            className=" w-[270px] h-[427px] md:w-[310px] md:h-[447px] lg:w-[310px] lg:h-[447px] border border-[#DCDCDC] rounded-[30px] text-center pt-8"
          >
            <img src={data.img} alt="teams" />
            <p className="text-[18px] font-semibold ">{data.name}</p>
            <p className="text-[14px] font-medium">{data.title}</p>
            <p className="tracking-tight text-[14px] font-normal">
              {data.para}
            </p>
            <div className="flex gap-4 justify-center items-center pt-6">
              <p className="bg-[#252525] text-white icons w-[36px] h-[36px] flex justify-center items-center hover:cursor-pointer">
                in
              </p>
              <p className="bg-[#252525] text-white icons w-[36px] h-[36px] flex justify-center items-center hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
