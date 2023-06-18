import logo from "../../../assets/favicon.svg";
import playstorebtn from "../../../assets/Home-Page/Google Play.png";
import applestorebtn from "../../../assets/Home-Page/App Store.png";
import { Link } from "react-router-dom";
import partnerImg from '../../../assets/EA_LOGO 1.png'
import facebook from '../../../assets/icons/facebook.svg'
import insta from '../../../assets/icons/insta.svg'
import linkdin from '../../../assets/icons/linkdin.svg'
import twitter from '../../../assets/icons/twitter.svg'


const Footer = () => {


  return (
    <div className="bg-[#100F1F] overflow-hidden relative px-4 lg:px-16 py-4 pt-10">
      <div className="container relative z-40  px-4 lg:pr-32 grid md:gap-4 gap-0 lg:gap-10 grid-cols-5">
        <div className="col-span-5 md:col-span-2 flex flex-col justify-center md:justify-start md:items-start items-center">
          <div className="flex gap-2 items-center">
            <img src={logo} className="w-10" alt="" />
            <h1 className="text-3xl font-bold text-white">FitAdvice</h1>
          </div>
          <h1 className="text-lg text-center md:text-start  my-4 font-semibold text-white">
            JUST DO <br /> SPORT EASIER
          </h1>
          <div>
            <div className="flex items-center">
              <div>
                <img src={applestorebtn} alt="" />

              </div>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fitadvice.fitadvice"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={playstorebtn} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5  md:pt-0 lg:pt-0 pt-10 flex flex-col justify-center md:justify-start items-center md:items-start  md:col-span-2 lg:col-span-1">
          <h1 className="text-2xl font-semibold text-white">Explore</h1>
          <div className="py-4  md:py-10 flex flex-col justify-center md:justify-start items-center md:items-start">
            <Link to={"/"}>
              <p className="text-[16px] md:text-lg my-2 text-white"> Home</p>
            </Link>
            <Link to={"/about"}>
              <p className="text-[16px] md:text-lg my-2 text-white"> About</p>
            </Link>
            <p className="text-[16px] md:text-lg my-2 text-white"> How does it work?</p>
            <a href="#faq">
              <p className="text-[16px] md:text-lg my-2 text-white"> FAQs</p>
            </a>
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-center md:justify-start items-center md:items-start md:col-span-3  lg:col-span-1">
          <h1 className="text-2xl font-semibold text-white">Ressources</h1>
          <div className="py-4  md:py-10 flex flex-col justify-center md:justify-start items-center md:items-start">
            <Link to={'/contact'}>
              <p className="text-[16px] md:text-lg my-2 text-white">
                {" "}
                Contact us
              </p>
            </Link>
            <Link to={'/contact'}>
              <p className="text-[16px] md:text-lg my-2 text-white">Become coach</p>
            </Link>
            <Link to={'/contact'}>


              <p className="text-[16px] md:text-lg my-2 text-white"> Corporate</p>
            </Link>

          </div>
        </div>
        <div className="col-span-5 md:col-start-3 md:flex-col flex flex-col justify-center md:justify-between lg:justify-start items-center md:items-start  md:col-span-5 lg:col-span-1">

          {/* Social Networks */}
          <div>
            <h1 className="text-2xl md:text-start text-center font-semibold text-white">Social Networks</h1>
            <div className="flex gap-x-6 my-10">


              <a
                href="https://www.instagram.com/fitadvice.be"
                rel="noreferrer"
                target="_blank"
              >
                <div className="border  md:w-[55px] w-[55px] bg-transparent duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full px-5 p-4" >
                  <img className=" md:w-[50px] w-[12px]" src={facebook} alt="" />
                  
                </div>
              </a>

              <div className="border bg-transparent md:w-[60px] w-[55px] duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full  p-4">

                <img className=" md:w-[80px] w-[20px]" src={twitter} alt="" />

              </div>

              <a
                href="https://www.instagram.com/fitadvice.be"
                rel="noreferrer"
                target="_blank"
              >
                <div className="border md:w-[60px] w-[55px] bg-transparent duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full md:p-4 p-4" >
                <img className=" md:w-[80px] w-[20px]" src={insta} alt="" />
             
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/fitadvice/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="border  md:w-[60px] w-[55px] bg-transparent duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full p-4">
                <img className=" md:w-[80px] w-[20px]" src={linkdin} alt="" />
                </div>
              </a>
            </div>

          </div>

          {/* Official Partner */}

          <div>
            <h1 className="text-2xl  font-semibold text-white">Official Partner</h1>
            <Link target="_blank" to={'https://www.europeactive.eu/'}>

              <img src={partnerImg} className="my-4 w-full mx-auto" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:block hidden h-[2px] bg-[#66666680]"></div>

      <div className="flex   md:flex-row text-center flex-col justify-between items-center py-4 text-white">
        <p>Copyright ©2023. All Rights Reserved FitAdvice SRL</p>
        <div className="w-full md:hidden block my-4 h-[1px] bg-[#FFFFFF]"></div>

        <div className="flex gap-5">
          {" "}
          <Link to="/privacyPolicy">Privacy Policy</Link> |{" "}
          <Link to="/termsNconditions">Terms and Condition</Link>
        </div>
      </div>
      <img
        src={logo}
        className="absolute z-10 w-40 rotate-45 opacity-10 right-0 top-10"
        alt=""
      />
    </div>
  );
};

export default Footer;
