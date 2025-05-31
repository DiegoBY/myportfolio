import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer className="my-10 px-5 pb-20 tabletS:px-14">
                <div>
                    <h1 className="font-baiJumjuree font-semibold text-4xl text-center selection:bg-[#7543DE]">
                        D
                        <span className="text-[#7543DE] selection:bg-[#E9E9EB]">
                            i
                        </span>
                        ego S
                        <span className="text-[#7543DE] selection:bg-[#E9E9EB]">
                            a
                        </span>
                        ntos
                    </h1>
                </div>

                <div className="flex justify-center gap-x-8 mt-5">
                    <a
                        href="https://www.instagram.com/diegosantos_cr/"
                        target="_blank"
                    >
                        <FaInstagram className="text-[#7543DE] w-10 h-10 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/diego-santos-8055bb288/"
                        target="_blank"
                    >
                        <FaLinkedinIn className="text-[#7543DE] w-10 h-10 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105" />
                    </a>

                    <a href="https://github.com/DiegoBY" target="_blank">
                        <FaGithub className="text-[#7543DE] w-10 h-10 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105" />
                    </a>
                </div>

                <div className="text-[#847EA4] text-base font-normal text-center selection:bg-[#E9E9EB] selection:text-[#7543DE]">
                    <p className="mt-10">
                        © 2025 Diego Santos. Código com turbulência, mas pouso
                        suave.
                    </p>

                    <p className="mt-5 italic">Até a próxima decolagem…</p>
                </div>
            </footer>
            <div className="w-full h-0.5 bg-[#594F6E]"></div>
        </>
    );
}

export default Footer;
