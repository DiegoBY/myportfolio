// Imgs
import imgPortfolio from '../../images/imgPortfolio.png';

interface WorkProjectProps {
    title: string;
    desc: string;
    img?: string;
    altImg: string;
    techs: string[];
    isButton: boolean;
    isComing: boolean;
}

function WorkProject({
    title,
    desc,
    img,
    altImg,
    techs,
    isButton,
    isComing,
}: WorkProjectProps) {
    return (
        <>
            {/* Projeto 1 */}
            <div className="px-1 mobileM:px-2 mobileG:px-6 tabletS:px-1 2xl:px-4">
                <div className="relative border-2 border-[#703FDF]">
                    {isComing ? (
                        <div className="absolute inset-0 bg-[#12101B] flex justify-center items-center">
                            <p className="text-3xl font-bold">EM BREVE</p>
                        </div>
                    ) : (
                        ''
                    )}

                    <div className="w-full h-42 bg-blue-800">
                        <img
                            src={imgPortfolio}
                            className="w-full h-full"
                            alt={altImg}
                        />
                    </div>
                    <div className="border-y-2 border-[#703FDF] flex gap-x-4 p-2 text-[#E9E9EB] font-medium text-base mobileM:px-4 lg:px-2 2xl:px-4">
                        {techs.map((tech, index) => (
                            <p key={index}>{tech}</p>
                        ))}
                    </div>
                    <div className="flex flex-col p-2 text-[#E9E9EB] justify-between mobileM:p-4 lg:p-2 2xl:p-4">
                        <p className="font-bold text-xl">{title}</p>
                        <p className="font-normal text-[#88869B] text-sm">
                            {desc}
                        </p>
                        {isButton && isComing === false ? (
                            <button className="w-42 my-4 relative group overflow-hidden border-2 border-[#713FDF] text-[#E9E9EB] px-6 py-2 font-medium group cursor-pointer tabletS:w-40 tabletS:h-10 tabletS:p-0">
                                <span className="relative z-10">Ver Demo</span>
                                <span className="w-full h-full flex absolute top-0 left-0 scale-x-0 origin-right transition-transform duration-300 ease-in group-hover:scale-x-100 group-hover:origin-left group-active:scale-x-100 group-active:origin-left bg-[#713FDF]"></span>
                            </button>
                        ) : (
                            <p className="font-bold text-xl my-4 text-[#703FDF]">
                                Você está nele
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkProject;
