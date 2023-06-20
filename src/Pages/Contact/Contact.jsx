import { useRef, useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";


import emailjs from "@emailjs/browser"; // <ScroollRestoration/>
const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [Error, setError] = useState(false);
  const [Success, setSuccess] = useState(false);

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
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        result => {
          console.log(result);
          forme.reset();
          setSuccess(true)
          setsend(false);
        },
        error => {
          console.log(error.text);
          setsend(false)
          setError(true)
        }
      );
  };


  return (
    <div className="py-[60px] px-0 md:px-4 lg:px-20">

      {

        Success && <h1 className="text-center text-[35px] items-center justify-center font-semibold mb-10 flex gap-4 text-[#00FF99]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8958 37.5L8.02075 25.625L10.9895 22.6562L19.8958 31.5625L39.0103 12.4479L41.9791 15.4166L19.8958 37.5Z" fill="#00FF99" />
          </svg>
          The form has been sent successfully
        </h1>
      }

      <div className="grid grid-cols-1 gap-[100px] lg:grid-cols-5">
        <div className="lg:col-span-2 text-center md:text-center lg:text-left">
          <h1 className="lg:text-[64px] text-[54px] font-bold mb-[20px] text-[#231F20]">
            Let{"'"}s Talk
          </h1>
          <p className="text-xl mb-[54px] text-[#231F20]">
            Fill in this form to ask us your questions and give us <br className="2xl:block lg:hidden hidden " /> your
            feedback. The FitAdvice team will get back <br className="2xl:block lg:hidden hidden " /> to you as soon as
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
          <div className="flex text-[16px] flex-col gap-5 text-[#231F20]">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fitadvice.be" className="hover:underline">Instagram</a>
            <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/company/fitadvice/" className="hover:underline">LinkedIn</a>
            <Link className="hover:underline">Twitter</Link>
            <a target="_blank" rel="noreferrer" href='https://web.facebook.com/profile.php?id=100093517743961&_rdc=1&_rdr' className="hover:underline">Facebook</a>
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
                  name="name"
                  className={` block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg `}
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
                name="option"
                className="block w-full px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg text-gray-600"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Corporate">Corporate</option>
                <option value="Become trainer">Become trainer</option>
                <option value="Others">Others</option>
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

            <p className="text-end text-red">{Error && 'Something Went Wrong'}</p>
          </form>
        </div>
      </div>

      {

Success && <h1 className="text-center text-[18px] items-center justify-center font-semibold mb-10 flex gap-4 text-[#00FF99]">
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8958 37.5L8.02075 25.625L10.9895 22.6562L19.8958 31.5625L39.0103 12.4479L41.9791 15.4166L19.8958 37.5Z" fill="#00FF99" />
  </svg>
  The form has been sent successfully
</h1>
}
      <ScrollRestoration />
    </div>
  );
};

export default Contact;
