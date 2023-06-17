import avater1 from '../../../assets/Home-Page/avater.png'
import avater2 from '../../../assets/Home-Page/avater2.jpeg'
import avater3 from '../../../assets/Home-Page/avater3.jpeg'
import quoteICon from "../../../assets/Home-Page/qoute-icon.svg";


const CustomerSlider = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            details: 'As a professional trainer specializing in physical preparation for endurance sports, FitAdvice is the perfect tool to reach a wider audience. Through the app, I can share my skills and expertise with clients from all over the world, regardless of their geographical location. The platform also makes it easy to manage my workouts, availability and payments. FitAdvice has truly transformed my coaching business and opened up new opportunities.',
            userDetails: {
                name: 'David',
                avater: avater1,
                title: 'Profesionnal Trainer'

            }


        },
        {
            id: 2,
            details: '  I was delighted with my first golf session! Matthieu is      passionate about what he does, he instills confidence, takes    the time to explain things, and adapts to our pace, level   and goals. Go for it with your eyes closed!',
            userDetails: {
                name: 'Marc',
                avater: avater2,
                title: 'The coachee'

            }


        },
        {
            id: 2,
            details: ' As a businessman with a passion for sport, this application  literally won me over. It provides competent, personalized   sports coaches, which has considerably improved my    performance. Whats more, it makes it much easier to     manage my sporting activities. I highly recommend it to all  business people who want to combine professional success  with sporting well-being.',
            userDetails: {
                name: 'Henry',
                avater: avater3,
                title: 'The coachee'

            }


        },


    ];

    // const nextSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    // };

    return (
        <div className="relative my-20 py-20 h-20 bg-red-500">

            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nobis magnam vero dolor vel quae voluptatum aut odit voluptas officia assumenda laborum impedit sapiente nemo, harum tempore qui! Cumque, id.</h1>

            {
                slides.map(slide => {
                    <div key={slide.id} className="px-3">
                        <p className="text-center md:text-start text-sm md:text-lg text-[#666666] my-4">
                            {
                                slide.details
                            }
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex  my-4 gap-4 items-center">
                                <div className="w-20 md:w-24 my-2 h-20 md:h-24 overflow-hidden rounded-full">
                                    <img src={slide.userDetails.avater} alt="" className="" />
                                </div>
                                <div>
                                    <p className="text-2xl text-[#231F20] font-bold ">
                                        {" "}
                                        {slide.userDetails.name}
                                    </p>
                                    <p className="text-lg">{slide.userDetails.title}</p>
                                </div>
                            </div>
                            <div className="flex opacity-50 gap-x-4">
                                <img src={quoteICon} alt="" />
                                <img src={quoteICon} alt="" />
                            </div>
                        </div>
                    </div>
                })
            }


        </div>
    );
};

export default CustomerSlider;
