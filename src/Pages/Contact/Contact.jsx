import { useState } from "react";
import { Link } from "react-router-dom";

// px-[250px]  py-[262px] gap-[320px] mx-60
const Contact = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
      console.log(selectedOption);
    };
    return (
      <section className="flex mx-24 my-36">
        <div className="">
          <h1 className="text-4xl font-extrabold">Let's Talk</h1>
          <p className="text-base mt-5">
            Fill in this form to ask us your questions and give us your
            feedback. The FitAdvice team will get back to you as soon as
            possible.
          </p>
          <h2 className="text-xl font-bold mt-12">Email Address</h2>
          <p className="mt-5">Support@fitadvice.eu</p>

          <h2 className="text-xl font-bold mt-12">Social Network</h2>
          <div className="flex flex-col gap-3 ">
            <Link className="hover:underline">Instagram</Link>
            <Link className="hover:underline">LinkedIn</Link>
            <Link className="hover:underline">Twitter</Link>
            <Link className="hover:underline">Facebook</Link>
          </div>
        </div>
        {/* ......... */}
        <div className="rounded-lg ms-[320px]">
          <form className="w-[563px] h-[563px]">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-black ">
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="John "
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#00FF99] dark:focus:border-[#00FF99] focus:ring-[#00FF99] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-black ">
                  Last Name*
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#00FF99] dark:focus:border-[#00FF99] focus:ring-[#00FF99] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-black ">
                Email address*
              </label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#00FF99] dark:focus:border-[#00FF99] focus:ring-[#00FF99] focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="relative mt-4">
              <label className="block mb-2 text-sm text-black ">
                Tell us about yourself*
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#00FF99] dark:focus:border-[#00FF99] focus:ring-[#00FF99] focus:outline-none focus:ring focus:ring-opacity-40 px-4 py-2 pr-8 shadow leading-tight"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-8 w-6 mt-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-black ">Message*</label>
              <textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#00FF99] dark:focus:border-[#00FF99] focus:ring-[#00FF99] focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-lg md:text-xl font-semibold text-[#222222] rounded-full  bg-gradient-to-b from-[#3EFFFF] to-[#00FF99]">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
};

export default Contact;