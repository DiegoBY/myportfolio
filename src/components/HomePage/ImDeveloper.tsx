import resumecv from '../../../public/DiegoSantosCV.pdf';

function ImDeveloper() {
    return (
        <>
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
                        <span className="relative z-10">Download CV</span>
                        <span className="w-full h-full flex absolute top-0 left-0 scale-x-0 origin-right transition-transform duration-300 ease-in group-hover:scale-x-100 group-hover:origin-left group-active:scale-x-100 group-active:origin-left bg-[#713FDF]"></span>
                    </button>
                </a>

                <blockquote className="selection:bg-[#E9E9EB] selection:text-[#12101B] text-[#88869B] text-sm font-medium italic text-center flex flex-col items-end tabletS:text-lg lg:text-start">
                    “não é só código, é voo visual. e sim, a rota muda, mas o
                    destino continua firme.”
                    <cite className="mt-4">- Diego Santos</cite>
                </blockquote>
            </div>
        </>
    );
}

export default ImDeveloper;
