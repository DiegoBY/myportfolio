import LineForComponents from '../LineForComponents/LineForComponents';
import TitleSections from '../TitleSections/TitleSections';
import HeroImage from './HeroImage';
import MeetMe from './MeetMe';

function About() {
    return (
        <>
            <section
                id="about"
                className="scroll-mt-24 lg:scroll-mt-32 my-10 px-5 tabletS:px-14 lg:px-24 lg:mb-0 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]"
            >
                <TitleSections titleSection="Sobre" />

                <div className="mt-10 lg:flex lg:flex-row-reverse lg:justify-between ">
                    <HeroImage />

                    <MeetMe />
                </div>
            </section>
            <LineForComponents />
        </>
    );
}

export default About;
