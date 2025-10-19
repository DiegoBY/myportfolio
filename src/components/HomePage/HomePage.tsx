import LineForComponents from '../LineForComponents/LineForComponents';
import ImDeveloper from './ImDeveloper';
import SideImage from './SideImage';

function HomePage() {
    return (
        <>
            <section
                id="homePage"
                className="scroll-mt-24 p-10 px-5 mt-14 tabletS:px-14 lg:mt-40 lg:px-24 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]"
            >
                <div className="lg:flex lg:justify-between">
                    <ImDeveloper />

                    {/* Img */}
                    <SideImage />
                </div>
            </section>

            <LineForComponents />
        </>
    );
}

export default HomePage;
