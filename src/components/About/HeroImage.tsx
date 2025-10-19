import imgAvatar from '../../images/imageAvatar.png';

function HeroImage() {
    return (
        <>
            <div className="flex justify-center items-center relative lg:items-end">
                <img
                    src={imgAvatar}
                    alt="Ilustração de uma pessoa com capuz roxo, sem rosto, com um avião de papel roxo ao fundo e linhas tracejadas representando movimento"
                    className="z-10 w-fit max-w-auto max-h-auto h-auto md:max-w-fit md:w-96 md:h-auto laptopG:w-110 2xl:max-w-[40rem] 2xl:w-[30rem] 2xl:max-h-fit"
                />
            </div>
        </>
    );
}

export default HeroImage;
