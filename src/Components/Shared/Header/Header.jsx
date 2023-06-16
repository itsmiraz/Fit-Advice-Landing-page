import { useState } from 'react';
import logo from '../../../assets/Home-Page/logo.svg'
import MainButton from '../../Modules/Buttons/Buttons';
import { Link } from 'react-router-dom';


const Header = () => {

    const [show, setShow] = useState(false)

    return (
      <div className="sticky shadow-lg top-0 z-50 bg-white mx-auto py-6 md:mb-6 ">
        <div className="justify-between px-3 md:px-20  2xl::px-48 items-center  flex">
          <Link to={"/"}>
            <img src={logo} className="md:w-40 w-24 relative z-50 " alt="" />
          </Link>
          <div
            className={`flex md:shadow-none shadow-lg md:flex-row flex-col bg-white md:w-fit w-full right-0 md:pb-0 pb-4 md:space-y-0 space-y-6 md:static absolute ${
              show ? " top-12 " : "top-[-500px]"
            }  ease-in-out duration-300 gap-x-10 items-center md:items-center`}
          >
            <Link to="/">
              <p onClick={()=>setShow(!show)} className="text-xl text-[#333333] font-medium hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
                Home
              </p>
            </Link>
            <p onClick={()=>setShow(!show)} className="text-xl text-[#333333] font-medium hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
              Corporate
            </p>
            <p onClick={()=>setShow(!show)} className="text-xl text-[#333333] font-medium hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
              Become coach
            </p>
            <Link to={"/contact"}>
              <p onClick={()=>setShow(!show)} className="text-xl text-[#333333] font-medium hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
                Contact
              </p>
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.fitadvice.fitadvice"
              rel="noreferrer"
              target="_blank"
            >
              <MainButton title={"Download"} />
            </a>
          </div>
          <div
            onClick={() => setShow(!show)}
            className="md:hidden md:absolute static block"
          >
            {show ? (
              <>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </>
            ) : (
              <>
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
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;