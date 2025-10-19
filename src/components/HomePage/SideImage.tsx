import imgPlanePaper from '../../images/ImagemTrailPlane.png';
import imgFull from '../../images/imagemFull.png';

function SideImage() {
    return (
        <>
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
        </>
    );
}

export default SideImage;
