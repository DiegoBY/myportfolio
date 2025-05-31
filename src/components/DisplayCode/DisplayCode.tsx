import { useState, useEffect } from 'react';

import imgAvatarPc from '../../images/avatarWithPc.png';

import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function DisplayCode() {
    const [displayedCode, setDisplayedCode] = useState<string>('');

    const fullCode = `1  // Hello World !
2  import React from 'react';  
3  
4      function Hello() {
5          return (
6              <>
7                  <div>
8                      <h1>Diego Santos</h1>
9                      <h2>Desenvolvedor Front End</h2>
10                      <p>
11                         Sempre aprendendo,
12                         descobrindo novas possibilidades.
13                     </p>
14                 </div>
15             </>
16         );
17     }
18
19  export default Hello;
`;

    useEffect(() => {
        let currentIndex = 0;
        let intervalId: any;
        const startAnimation = () => {
            intervalId = setInterval(() => {
                if (currentIndex < fullCode.length) {
                    const nextChar = fullCode[currentIndex] || '';
                    setDisplayedCode((prev) => prev + nextChar);
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        setDisplayedCode('');
                        currentIndex = 0;
                        startAnimation();
                    }, 8000);
                }
            }, 50);
        };

        startAnimation();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className="my-20 px-5 lg:flex lg:justify-between lg:items-center tabletS:px-14 lg:px-24 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]">
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

                {/* Container Display */}
                <div className="border border-[#703FDF] bg-[#130929] p-4 w-full lg:w-1/2">
                    {/* Circles */}
                    <div className="flex gap-x-2">
                        <div className="w-4 h-4 rounded-full bg-[#703FDF]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#703FDF]"></div>
                        <div className="w-4 h-4 rounded-full bg-[#703FDF]"></div>
                    </div>

                    {/* Display */}
                    <div className="cursor-default select-none border border-[#703FDF] bg-[#12101B] mt-4 relative px-2 py-4 w-full h-fit overflow-hidden ">
                        <pre className=" relative z-0 opacity-0 text-[0.6rem] text-[#E9E9EB] lg:text-sm mobileM:text-[0.7rem] tabletS:text-[0.8rem]">
                            {fullCode}
                        </pre>
                        <pre className="absolute font-baiJumjuree font-medium top-4 z-10 text-[0.6rem] text-[#E9E9EB] lg:text-sm mobileM:text-[0.7rem] tabletS:text-[0.8rem]">
                            {displayedCode}
                        </pre>
                    </div>
                </div>
            </section>
            <div className="w-full h-0.5 bg-[#594F6E]"></div>
        </>
    );
}

export default DisplayCode;
