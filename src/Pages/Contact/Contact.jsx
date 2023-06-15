import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };
  return (
    <div className="py-[60px]">
      <div className="grid grid-cols-1 gap-[100px] lg:grid-cols-5">
        <div className="lg:col-span-2 text-center md:text-center lg:text-left">
          <h1 className="lg:text-[64px] text-[54px] font-bold mb-[20px] text-[#231F20]">
            Let's Talk
          </h1>
          <p className="text-xl mb-[54px] text-[#231F20]">
            Fill in this form to ask us your questions and give us your
            feedback. The FitAdvice team will get back to you as soon as
            possible.
          </p>
          <h3 className="mb-[20px] text-[32px] line-[39px] font-bold text-[#231F20]">
            Email Adress
          </h3>
          <h4 className="font-normal text-[16px] line-[20px] mb-[54px] text-[#231F20]">
            support@fitadvice.eu
          </h4>
          <h3 className="text-[32px] line-[39px] font-bold mb-[20px] text-[#231F20]">
            Social Networks
          </h3>
          <div className="flex flex-col-reverse gap-5 text-[#231F20]">
            <Link className="hover:underline">Instagram</Link>
            <Link className="hover:underline">LinkedIn</Link>
            <Link className="hover:underline">Twitter</Link>
            <Link className="hover:underline">Facebook</Link>
          </div>
        </div>
        {/* w-[565px] h-[838px] */}
        <div className="p-8 lg:col-span-3 lg:p-6">
          <form className="space-y-4">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-[#231F20] ">
                  First Name*
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg "
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-[#231F20] ">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg "
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-[#231F20] ">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg "
              />
            </div>

            <div className="relative mt-4 ">
              <label className="block mb-2 text-sm text-[#231F20] ">
                Tell us about yourself*
              </label>
              <select
                className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg text-[#B2B2B2]"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-[#231F20] ">
                Message*
              </label>
              <textarea
                name="message"
                className="block w-full h-32 px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg md:h-56"
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-lg md:text-xl font-semibold rounded-xl  bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] text-[#231F20]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
