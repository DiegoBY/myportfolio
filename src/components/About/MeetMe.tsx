function MeetMe() {
    return (
        <>
            <div className="flex flex-col items-center lg:w-1/2 lg:items-start">
                <div className="selection:bg-[#E9E9EB] selection:text-[#12101B] text-[#88869B] text-base font-medium text-center flex flex-col gap-y-4 lg:text-start 2xl:text-lg">
                    <p>
                        Apaixonado por aviação, tecnologia e interfaces que dão
                        gosto de usar.
                    </p>

                    <p>
                        Quando não tô mergulhado em linhas de código, tô voando
                        baixo pelos vídeos de pouso em Guarulhos, sonhando
                        acordado com os motores, front bem pensado são ideias
                        que decolam.
                    </p>

                    <p>
                        Acredito que boas experiências, assim como bons voos,
                        precisam ser suaves, seguras e marcantes.
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
        </>
    );
}

export default MeetMe;
