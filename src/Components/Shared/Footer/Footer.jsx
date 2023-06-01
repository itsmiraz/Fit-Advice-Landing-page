import logo from '../../../assets/favicon.svg'
import playstorebtn from '../../../assets/Home-Page/Google Play.png'
import applestorebtn from '../../../assets/Home-Page/App Store.png'
import { Link } from 'react-router-dom';
const Footer = () => {

    const handleContactClick = () => {
        window.location.href = 'mailto:support@fitadvice.eu';
      };

    return (
        <div className="bg-[#100F1F] overflow-hidden relative px-4 md:px-10 py-4 pt-10">
            <div className="container relative z-50  px-4 md:px-32 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 mx-auto">


                <div className='col-span-2 flex flex-col justify-center md:justify-start md:items-start items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src={logo} className='w-10' alt="" />
                        <h1 className='text-3xl font-bold text-white'>FitAdvice</h1>
                    </div>
                    <h1 className='text-lg text-center md:text-start  my-4 font-semibold text-white'>JUST DO <br  /> SPORT EASIER</h1>
                    <div>
                        <div className='flex items-center'>
                            <img src={applestorebtn} alt="" />
                            <a href="https://play.google.com/store/apps/details?id=com.fitadvice.fitadvice" rel="noreferrer" target='_blank'>
                                <img src={playstorebtn} alt="" />
                            </a>
                        </div>

                    </div>
                </div>

                <div className='col-span-1'>
                    <h1 className='text-2xl font-semibold text-white'>Explore</h1>
                    <div className=' py-10'>
                        <a href="#head">
                            <p className='text-lg my-2 text-white'> Home</p>
                            </a>
                        <p className='text-lg my-2 text-white'> About</p>
                        <p className='text-lg my-2 text-white'> How does it work?</p>
                        <a href="#faq">

                        <p className='text-lg my-2 text-white'> FAQs</p>
                        </a>
                    </div>
                </div>
                <div className='col-span-1'>
                    <h1 className='text-2xl font-semibold text-white'>Ressources</h1>
                    <div className='py-10'>
                        <p onClick={handleContactClick} className='text-lg my-2 text-white'> Contact us</p>
                        <a href="#becomecoach">

                        <p className='text-lg my-2 text-white'>Become coach</p>
                        </a>
                        <p className='text-lg my-2 text-white'> Corporate</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <h1 className='text-2xl font-semibold text-white'>Social Networks</h1>
                    <div className='flex gap-x-4 my-10'>

                        <div className='border bg-transparent duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full p-6'>
                            <svg width="20" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.722 19.9999V10.8899H9.797L10.256 7.32294H6.722V5.05294C6.722 4.02094 7.011 3.32294 8.489 3.32294H10.378V0.13794C9.467 0.04394 8.552 -0.00205957 7.636 -5.95697e-05C4.919 -5.95697e-05 3.066 1.65694 3.066 4.69994V7.32294H0V10.8899H3.067V19.9999H6.722Z" fill="white" />
                            </svg>
                        </div>

                        <div className='border bg-transparent duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full p-6'>
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.29 16.9179C13.837 16.9179 17.965 10.6649 17.965 5.24295C17.965 5.06495 17.965 4.88795 17.953 4.71295C18.7562 4.13146 19.4493 3.41155 20 2.58695C19.2511 2.91895 18.4566 3.13671 17.643 3.23295C18.4996 2.72001 19.1408 1.9133 19.447 0.962949C18.6417 1.44085 17.7607 1.7777 16.842 1.95895C16.2234 1.30071 15.405 0.864783 14.5136 0.718654C13.6222 0.572524 12.7075 0.724348 11.9111 1.15062C11.1147 1.57689 10.4811 2.25382 10.1083 3.07661C9.7355 3.8994 9.64437 4.82213 9.849 5.70195C8.21751 5.62007 6.62148 5.196 5.16452 4.45726C3.70755 3.71853 2.42223 2.68166 1.392 1.41395C0.867019 2.31724 0.706121 3.38669 0.94208 4.40447C1.17804 5.42225 1.7931 6.3118 2.662 6.89195C2.0091 6.8724 1.37047 6.69611 0.8 6.37795V6.42995C0.800159 7.37742 1.12806 8.29566 1.72808 9.02892C2.3281 9.76218 3.1633 10.2653 4.092 10.4529C3.4878 10.6176 2.8539 10.6415 2.239 10.5229C2.50116 11.3384 3.01168 12.0515 3.69913 12.5626C4.38658 13.0736 5.21657 13.3569 6.073 13.3729C5.22209 14.0415 4.24776 14.5357 3.2057 14.8274C2.16365 15.1191 1.07432 15.2025 0 15.0729C1.87663 16.2772 4.0602 16.916 6.29 16.9129" fill="white" />
                            </svg>

                        </div>
                        <a href="https://www.instagram.com/fitadvice.be" rel="noreferrer" target='_blank'>
                            <div className='border bg-transparent duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full p-6'>

                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.497 0.506005C7.782 0.506005 7.441 0.518005 6.375 0.566005C5.311 0.615005 4.585 0.784005 3.949 1.031C3.28183 1.28195 2.67744 1.67543 2.178 2.184C1.66955 2.68316 1.27607 3.28719 1.025 3.954C0.778 4.592 0.609 5.318 0.56 6.382C0.512 7.448 0.5 7.788 0.5 10.503C0.5 13.218 0.512 13.559 0.56 14.625C0.609 15.689 0.778 16.415 1.025 17.051C1.27594 17.7182 1.66943 18.3226 2.178 18.822C2.67715 19.3305 3.28119 19.7239 3.948 19.975C4.584 20.222 5.311 20.391 6.375 20.44C7.441 20.488 7.782 20.5 10.497 20.5C13.212 20.5 13.552 20.488 14.619 20.44C15.683 20.391 16.409 20.222 17.045 19.975C17.7118 19.7239 18.3158 19.3305 18.815 18.822C19.3238 18.323 19.7176 17.7189 19.969 17.052C20.216 16.416 20.385 15.689 20.434 14.625C20.482 13.559 20.494 13.218 20.494 10.503C20.494 7.788 20.482 7.448 20.434 6.381C20.385 5.317 20.216 4.591 19.969 3.955C19.7179 3.28819 19.3245 2.68416 18.816 2.185C18.317 1.67583 17.713 1.28166 17.046 1.03C16.409 0.783005 15.683 0.614005 14.619 0.565005C13.552 0.517005 13.212 0.505005 10.497 0.505005V0.506005ZM10.497 2.308C13.167 2.308 13.482 2.318 14.537 2.366C15.511 2.41 16.04 2.573 16.393 2.71C16.859 2.891 17.193 3.108 17.543 3.458C17.892 3.808 18.109 4.141 18.29 4.608C18.427 4.96 18.59 5.48801 18.634 6.464C18.682 7.518 18.692 7.834 18.692 10.504C18.692 13.172 18.682 13.489 18.634 14.543C18.59 15.517 18.427 16.047 18.29 16.399C18.109 16.866 17.892 17.199 17.542 17.549C17.192 17.899 16.859 18.115 16.392 18.296C16.04 18.433 15.512 18.596 14.536 18.64C13.482 18.689 13.166 18.699 10.496 18.699C7.827 18.699 7.511 18.689 6.457 18.64C5.483 18.596 4.953 18.433 4.601 18.296C4.16657 18.1358 3.7736 17.8802 3.451 17.548C3.11932 17.2256 2.86407 16.833 2.704 16.399C2.567 16.047 2.404 15.517 2.36 14.543C2.311 13.489 2.301 13.173 2.301 10.503C2.301 7.833 2.311 7.518 2.36 6.463C2.404 5.489 2.567 4.96 2.704 4.607C2.885 4.141 3.102 3.807 3.452 3.457C3.802 3.108 4.134 2.891 4.601 2.71C4.953 2.573 5.483 2.41 6.457 2.366C7.511 2.318 7.827 2.308 10.497 2.308Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.497 13.835C9.61332 13.835 8.76582 13.484 8.14095 12.8591C7.51608 12.2342 7.16503 11.3867 7.16503 10.503C7.16503 9.61934 7.51608 8.77183 8.14095 8.14696C8.76582 7.52209 9.61332 7.17104 10.497 7.17104C11.3807 7.17104 12.2282 7.52209 12.8531 8.14696C13.478 8.77183 13.829 9.61934 13.829 10.503C13.829 11.3867 13.478 12.2342 12.8531 12.8591C12.2282 13.484 11.3807 13.835 10.497 13.835ZM10.497 5.37004C9.13554 5.37004 7.82981 5.91089 6.86709 6.87361C5.90438 7.83633 5.36353 9.14205 5.36353 10.5035C5.36353 11.865 5.90438 13.1708 6.86709 14.1335C7.82981 15.0962 9.13554 15.637 10.497 15.637C11.8585 15.637 13.1642 15.0962 14.127 14.1335C15.0897 13.1708 15.6305 11.865 15.6305 10.5035C15.6305 9.14205 15.0897 7.83633 14.127 6.87361C13.1642 5.91089 11.8585 5.37004 10.497 5.37004ZM17.033 5.16704C17.033 5.4853 16.9066 5.79053 16.6816 6.01557C16.4565 6.24061 16.1513 6.36704 15.833 6.36704C15.5148 6.36704 15.2095 6.24061 14.9845 6.01557C14.7595 5.79053 14.633 5.4853 14.633 5.16704C14.633 4.84878 14.7595 4.54356 14.9845 4.31851C15.2095 4.09347 15.5148 3.96704 15.833 3.96704C16.1513 3.96704 16.4565 4.09347 16.6816 4.31851C16.9066 4.54356 17.033 4.84878 17.033 5.16704Z" fill="white" />
                                </svg>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/company/fitadvice/" rel="noreferrer" target='_blank'>
                            <div className='border bg-transparent duration-200 hover:border-none hover:bg-gradient-to-b from-[#3EFFFF] to-[#00FF99] rounded-full p-6'>

                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.195 16.667H13.738V11.253C13.738 9.96202 13.714 8.30102 11.94 8.30102C10.14 8.30102 9.86299 9.70702 9.86299 11.159V16.667H6.40599V5.53402H9.72499V7.05502H9.77099C10.233 6.18002 11.361 5.25702 13.045 5.25702C16.548 5.25702 17.195 7.56302 17.195 10.56V16.667ZM2.50699 4.01202C1.97483 4.01202 1.46447 3.80063 1.08818 3.42433C0.711887 3.04804 0.500488 2.53768 0.500488 2.00552C0.500488 1.47337 0.711887 0.963006 1.08818 0.586714C1.46447 0.210422 1.97483 -0.000976562 2.50699 -0.000976562C3.03915 -0.000976562 3.54951 0.210422 3.9258 0.586714C4.30209 0.963006 4.51349 1.47337 4.51349 2.00552C4.51349 2.53768 4.30209 3.04804 3.9258 3.42433C3.54951 3.80063 3.03915 4.01202 2.50699 4.01202ZM0.775989 16.667H4.23599V5.53402H0.775989V16.667Z" fill="white" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full h-[2px] bg-[#66666680]'>

            </div>

            <div className='flex   md:flex-row text-center flex-col justify-between items-center py-4 text-white'>
                <p>Copyright ©2023. All Rights Reserved FitAdvice SRL</p>

                <p> <Link to="/privacyPolicy">Privacy Policy</Link> |    Terms and Condition</p>
            </div>
            <img src={logo} className='absolute z-10 w-40 rotate-45 opacity-10 right-0 top-10' alt="" />

        </div>
    );
};

export default Footer;