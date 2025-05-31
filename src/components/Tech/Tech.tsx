const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
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
                <div>
                    <p className="text-[#E9E9EB] text-3xl font-bold">
                        <span className="text-[#703FDF] selection:bg-[#703FDF] selection:text-[#E9E9EB]">
                            #
                        </span>
                        <span className="selection:bg-[#E9E9EB] selection:text-[#703FDF]">
                            Skills
                        </span>
                    </p>
                </div>

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
            <div className="w-full h-0.5 bg-[#594F6E]"></div>
        </>
    );
}

export default Tech;
