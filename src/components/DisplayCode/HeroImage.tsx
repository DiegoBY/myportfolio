import imgAvatarPc from '../../images/avatarWithPc.png';

import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function HeroImage() {
    return (
        <>
            <div className="hidden lg:flex flex-col items-center w-1/2">
                <img
                    src={imgAvatarPc}
                    alt="Ilustração de uma pessoa com capuz roxo, sem rosto visível, usando um notebook escuro com ícone de avião de papel"
                    className="lg:h-auto lg:w-90 laptopG:w-100 2xl:w-110"
                />

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
            </div>
        </>
    );
}

export default HeroImage;
