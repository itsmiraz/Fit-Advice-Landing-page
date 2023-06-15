import AboutHead from "./AboutHead";
import Mission from "./Mission";
import Teams from "./Teams/Teams";
import Values from "./Values";
import Vission from "./Vission";


const About = () => {
    return (
      <section>
        <AboutHead />
        <Mission />
        <Vission />
        <Values />
        <Teams />
      </section>
    );
};

export default About;