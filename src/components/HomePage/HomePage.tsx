import imgPlanePaper from '../../images/ImagemTrailPlane.png';
import imgFull from '../../images/imagemFull.png';

import resumecv from '../../../public/DiegoSantosCV.pdf';

function HomePage() {
    return (
        <>
            <section
                id="homePage"
                className="scroll-mt-24 p-10 px-5 mt-14 tabletS:px-14 lg:mt-40 lg:px-24 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]"
            >
                <div className="lg:flex lg:justify-between">
                    <div className="flex flex-col items-center gap-y-8 lg:items-start lg:w-1/2">
                        <div className=" flex flex-col items-center gap-y-1 lg:items-start">
                            <p className="selection:bg-[#E9E9EB] selection:text-[#703FDF] text-[#E9E9EB] text-3xl font-medium tabletS:text-4xl lg:text-5xl">
                                Eu sou
                            </p>
                            <p className="selection:bg-[#703FDF] selection:text-[#E9E9EB] text-[#703FDF] text-4xl font-semibold tabletS:text-5xl lg:text-6xl">
                                Desenvolvedor
                            </p>
                            <p className="selection:bg-[#E9E9EB] selection:text-[#703FDF] text-[#E9E9EB] text-3xl font-medium tabletS:text-4xl lg:text-5xl">
                                Front-end
                            </p>
                            <p className="selection:bg-[#E9E9EB] selection:text-[#12101B] text-[#88869B] text-base font-medium text-center mt-2 tabletS:text-xl">
                                Com um pé na tecnologia e outro no céu.
                            </p>
                        </div>

                        <a href={resumecv} target="_blank">
                            <button className="relative group overflow-hidden border-2 border-[#713FDF] text-[#E9E9EB] px-6 py-2 font-medium group cursor-pointer tabletS:w-40 tabletS:h-10 tabletS:p-0">
                                <span className="relative z-10">
                                    Download CV
                                </span>
                                <span className="w-full h-full flex absolute top-0 left-0 scale-x-0 origin-right transition-transform duration-300 ease-in group-hover:scale-x-100 group-hover:origin-left group-active:scale-x-100 group-active:origin-left bg-[#713FDF]"></span>
                            </button>
                        </a>

                        <blockquote className="selection:bg-[#E9E9EB] selection:text-[#12101B] text-[#88869B] text-sm font-medium italic text-center flex flex-col items-end tabletS:text-lg lg:text-start">
                            “não é só código, é voo visual. e sim, a rota muda,
                            mas o destino continua firme.”
                            <cite className="mt-4">- Diego Santos</cite>
                        </blockquote>
                    </div>

                    {/* Img */}
                    <div>
                        <div className="h-64 flex flex-col justify-center items-center mt-10 lg:hidden">
                            <img
                                src={imgPlanePaper}
                                alt="Ilustração de um avião de papel roxo com uma linha tracejada formando curvas"
                                className="-rotate-90 scale-x-[-1] object-contain w-60 h-auto"
                            />
                        </div>

                        <div className="hidden lg:block">
                            <div className="relative">
                                <img
                                    src={imgFull}
                                    alt="Ilustração de um avião de papel roxo voando com uma linha tracejada em fundo roxo"
                                    className="w-90 h-fit 2xl:w-120"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-0.5 bg-[#594F6E]"></div>
        </>
    );
}

export default HomePage;
