import { useState } from 'react';
import logo from '../../../assets/Home-Page/logo.svg'
import MainButton from '../../Modules/Buttons/Buttons';
import { Link } from 'react-router-dom';


const Header = () => {

    const [show, setShow] = useState(false)

    return (
      <div className=" sticky top-0 z-50 bg-white mx-auto py-2 px-2 md:my-6 ">
        <div className="container mx-auto justify-between items-center  flex">
          <Link to={"/"}>
            <img src={logo} className="md:w-40 w-24 relative z-50 " alt="" />
          </Link>
          <div
            className={`flex md:flex-row flex-col bg-white md:w-fit w-full right-2 md:space-y-0 space-y-2 md:static absolute ${
              show ? " top-12 " : "top-[-500px]"
            }  ease-in-out duration-300 gap-x-10 items-end md:items-center`}
          >
            <Link to="/">
              <p className="text-xl text-[#333333] hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
                Home
              </p>
            </Link>
            <p className="text-xl text-[#333333] hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
              Corporate
            </p>
            <p className="text-xl text-[#333333] hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
              Become coach
            </p>
            <Link to={"/contact"}>
              <p className="text-xl text-[#333333] hover:font-semibold hover:border-b-4 hover:border-[#3EFFFF] cursor-pointer duration-200">
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