import LineForComponents from '../LineForComponents/LineForComponents';
import TitleSections from '../TitleSections/TitleSections';

const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React JS',
    'SASS',
    'Bootstrap',
    'TailwindCSS',
    'Git',
    'Figma',
    'Mobile-First',
    'Photoshop',
];

const technologiesRight = [
    'Photoshop',
    'Mobile-First',
    'Figma',
    'Git',
    'TailwindCSS',
    'Bootstrap',
    'SASS',
    'React JS',
    'TypeScript',
    'JavaScript',
    'CSS3',
    'HTML5',
];

function Tech() {
    return (
        <>
            <section
                id="skills"
                className="scroll-mt-24 lg:scroll-mt-32 my-10 px-5 tabletS:px-14 lg:px-24 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]"
            >
                <TitleSections titleSection="Skills" />

                {/* Carousel */}
                <div className="select-none text-[#E9E9EB] font-bold">
                    <div className="flex mt-8 w-full overflow-hidden py-2">
                        <div className="flex items-center gap-x-4 animate-toLeft">
                            {technologies
                                .concat(technologies)
                                .map((tech, index) => (
                                    <div
                                        key={index}
                                        className="border-2 border-[#703FDF] w-40 py-3 flex items-center justify-center"
                                    >
                                        {tech}
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="select-none flex mt-8 w-full overflow-hidden py-2">
                        <div className="flex items-center gap-x-4 animate-toRight">
                            {technologiesRight
                                .concat(technologiesRight)
                                .map((tech, index) => (
                                    <div
                                        key={index}
                                        className="border-2 border-[#703FDF] w-40 py-3 flex items-center justify-center"
                                    >
                                        {tech}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            <LineForComponents />
        </>
    );
}

export default Tech;
