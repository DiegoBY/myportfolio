import imgAvatar from '../../images/imageAvatar.png';

function About() {
    return (
        <>
            <section
                id="about"
                className="scroll-mt-24 lg:scroll-mt-32 my-10 px-5 tabletS:px-14 lg:px-24 lg:mb-0 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]"
            >
                <div>
                    <p className="shadow-[10px_20px_30px_rgba(255, 255, 255, 1)] text-[#E9E9EB] text-3xl font-bold">
                        <span className="text-[#703FDF] selection:bg-[#703FDF] selection:text-[#E9E9EB]">
                            #
                        </span>
                        <span className="selection:bg-[#E9E9EB] selection:text-[#703FDF]">
                            Sobre
                        </span>
                    </p>
                </div>

                <div className="mt-10 lg:flex lg:flex-row-reverse lg:justify-between ">
                    <div className="flex justify-center items-center relative lg:items-end">
                        <img
                            src={imgAvatar}
                            alt="Ilustração de uma pessoa com capuz roxo, sem rosto, com um avião de papel roxo ao fundo e linhas tracejadas representando movimento"
                            className="z-10 w-fit max-w-auto max-h-auto h-auto md:max-w-fit md:w-96 md:h-auto laptopG:w-110 2xl:max-w-[40rem] 2xl:w-[30rem] 2xl:max-h-fit"
                        />
                    </div>

                    <div className="flex flex-col items-center lg:w-1/2 lg:items-start">
                        <div className="selection:bg-[#E9E9EB] selection:text-[#12101B] text-[#88869B] text-base font-medium text-center flex flex-col gap-y-4 lg:text-start 2xl:text-lg">
                            <p>
                                Apaixonado por aviação, tecnologia e interfaces
                                que dão gosto de usar.
                            </p>

                            <p>
                                Quando não tô mergulhado em linhas de código, tô
                                voando baixo pelos vídeos de pouso em Guarulhos
                                — sonhando acordado com os motores, front bem
                                pensado são ideias que decolam.
                            </p>

                            <p>
                                Acredito que boas experiências, assim como bons
                                voos, precisam ser suaves, seguras e marcantes.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="flex justify-center items-center mt-10 relative group overflow-hidden border-2 border-[#713FDF] text-[#E9E9EB] text-xl px-4 py-2 font-medium group cursor-pointer tabletS:w-40 tabletS:h-10 tabletS:p-0"
                        >
                            <span className="relative z-10">Contato</span>
                            <span className="w-full h-full flex absolute top-0 left-0 scale-x-0 origin-left transition-transform duration-300 ease-in group-hover:scale-x-100 group-hover:origin-right group-active:scale-x-100 group-active:origin-right bg-[#713FDF]"></span>
                        </a>
                    </div>
                </div>
            </section>
            <div className="w-full h-0.5 bg-[#594F6E]"></div>
        </>
    );
}

export default About;
