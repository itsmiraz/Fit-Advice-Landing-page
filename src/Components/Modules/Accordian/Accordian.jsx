import { useState } from 'react';
import PropTypes from 'prop-types';
const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="my-[15px] rounded select-none p-6 border-2 border-[#231F20] boder-black">
            <button
                className="w-full  text-left flex  justify-between items-center"
                onClick={toggleAccordion}
            >
                <p className='font-bold text-[#231F20]  md:font-bold text-[16px] md:text-xl'>  {title}</p>
                <div className='md:block hidden'>
                    {

                        isOpen ?
                            <>
                                <svg className='w-4 md:w-6 h-4 md:h-6' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8H15" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </>
                            :
                            <>
                                <svg className='w-4 md:w-6 h-4 md:h-6' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V15" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 8H15" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </>
                    }
                </div>
            </button>

            <div
                className={`overflow-hidden duration-300 transition-all transition-max-height ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="p-4 text-sm  md:text-lg  bg-white">{content}</div>
            </div>
        </div>
    );
};
Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};
export default Accordion;