import { useRef, useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import emailjs from "@emailjs/browser"; // <ScroollRestoration/>
const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };


  const form = useRef();
  const [send, setsend] = useState(false);
  const sendEmail = e => {
    e.preventDefault();
    setsend(true);
    const forme = e.target;
    emailjs
      .sendForm(
        "service_uhoma6w",
        "template_pb544kr",
        form.current,
        "mOfuG__PVmEmox8lR"
      )
      .then(
        result => {
          console.log(result);
          forme.reset();
          setsend(false);
        },
        error => {
          console.log(error.text);
          setsend(false)
        }
      );
  };




  return (
    <div className="py-[60px] px-0 md:px-4 lg:px-20">
      <div className="grid grid-cols-1 gap-[100px] lg:grid-cols-5">
        <div className="lg:col-span-2 text-center md:text-center lg:text-left">
          <h1 className="lg:text-[64px] text-[54px] font-bold mb-[20px] text-[#231F20]">
            Let{"'"}s Talk
          </h1>
          <p className="text-xl mb-[54px] text-[#231F20]">
            Fill in this form to ask us your questions and give us <br  className="lg:block hidden "/> your
            feedback. The FitAdvice team will get back <br  className="lg:block hidden "/> to you as soon as
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
          <div className="flex text-[16px] flex-col-reverse gap-5 text-[#231F20]">
            <Link className="hover:underline">Instagram</Link>
            <Link className="hover:underline">LinkedIn</Link>
            <Link className="hover:underline">Twitter</Link>
            <Link className="hover:underline">Facebook</Link>
          </div>
        </div>
        {/* w-[565px] h-[838px] */}
        <div className="p-8 lg:col-span-3   md:p-40 lg:p-6 lg:pl-56">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-4 text-[16px] font-medium  text-[#231F20] ">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  name="first_name"
                  className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg "
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-4 text-[16px] font-medium  text-[#231F20] ">
                  Last Name*
                </label>
                <input
                  required
                  type="text"
                  name="last_name"
                  className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg "
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-4 text-[16px] font-medium  text-[#231F20] ">
                Email address*
              </label>
              <input
                required
                type="email"
                name="email"
                className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg "
              />
            </div>

            <div className="relative mt-4 ">
              <label className="block mb-4 text-[16px] font-medium  text-[#231F20] ">
                Tell us about yourself*
              </label>
              <select
                required
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
              <label className="block mb-4 text-[16px] font-medium  text-[#231F20] ">
                Message*
              </label>
              <textarea
                required
                name="message"
                className="block w-full h-32 px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg md:h-56"
              ></textarea>
            </div>

            <button
              disabled={send}
              className="w-full py-4 mt-4 text-lg md:text-xl font-semibold rounded-xl  bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] text-[#231F20]"
            >
              {send ? "  Submiting" : "  Submit"}
            </button>
          </form>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Contact;
