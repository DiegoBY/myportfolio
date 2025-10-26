import { useState } from 'react';

interface WorkProjectProps {
    title: string;
    desc: string;
    img?: string;
    altImg: string;
    techs: string[];
    hrefGitHub?: string;
    hrefDeploy?: string;
    isComing: boolean;
    isDev: boolean;
}

function WorkProject({
    title,
    desc,
    img,
    altImg,
    techs,
    hrefGitHub,
    hrefDeploy,
    isComing,
    isDev,
}: WorkProjectProps) {
    const [hoverMobile, setHoverMobile] = useState<string>('0');

    return (
        <>
            {/* Projeto 1 */}
            <div className="px-1 mobileM:px-2 mobileG:px-6 tabletS:px-1 2xl:px-4">
                <div
                    className="cursor-pointer group relative border-2 border-[#703FDF] pb-4"
                    onClick={() => {
                        setHoverMobile((prev) => (prev === '0' ? '100' : '0'));
                    }}
                >
                    {isComing ? (
                        <div className="z-[200] cursor-default absolute inset-0 bg-[#12101B] flex justify-center items-center">
                            <p className="text-3xl font-bold">EM BREVE</p>
                        </div>
                    ) : (
                        ''
                    )}

                    <div className="w-full h-[12rem] relative">
                        <div
                            className={`opacity-${hoverMobile} group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center gap-y-4 absolute inset-0 h-full w-full bg-[#703FDF]/5 bg-clip-padding backdrop-filter backdrop-blur-md`}
                        >
                            <a
                                href={hrefDeploy}
                                target="_blank"
                                className="h-10 w-35 flex justify-center items-center border-1 border-[#703FDF] bg-[#703FDF]/20 transition-all duration-200 ease-in-out hover:border-[#E9E9EB] hover:bg-[#E9E9EB]/20 hover:tracking-widest hover:shadow-[0px_0px_20px_5px_rgba(233,_233,_235,_0.1)]"
                            >
                                Ver Projeto
                            </a>
                            <a
                                href={hrefGitHub}
                                target="_blank"
                                className="h-10 w-35 flex justify-center items-center border-1 border-[#703FDF] bg-[#703FDF]/20 transition-all duration-200 ease-in-out hover:border-[#E9E9EB] hover:bg-[#E9E9EB]/20 hover:tracking-widest hover:shadow-[0px_0px_20px_5px_rgba(233,_233,_235,_0.1)]"
                            >
                                GitHub
                            </a>
                        </div>

                        <img
                            src={img}
                            className="w-full h-full  object-fill"
                            alt={altImg}
                        />
                    </div>

                    <div className="border-y-2 border-[#703FDF] flex gap-x-4 p-2 text-[#E9E9EB] font-medium text-base mobileM:px-4 lg:px-2 2xl:px-4">
                        {techs.map((tech, index) => (
                            <p key={index}>{tech}</p>
                        ))}
                    </div>
                    <div className="flex flex-col p-2 text-[#E9E9EB] justify-between mobileM:p-4 lg:p-2 2xl:p-4">
                        <p className="font-bold text-xl flex items-center gap-x-5">
                            {title}{' '}
                            <p className="text-xs text-[#703FDF] tracking-widest italic">
                                {isDev ? 'Em Desenvolvimento' : ''}
                            </p>
                        </p>
                        <p className="font-normal text-[#88869B] text-sm">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkProject;
