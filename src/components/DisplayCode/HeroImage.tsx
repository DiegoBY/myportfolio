import imgAvatarPc from '../../images/avatarWithPc.png';

import SocialMedia from '../SocialMedia/SocialMedia';

function HeroImage() {
    return (
        <>
            <div className="hidden lg:flex flex-col items-center w-1/2">
                <img
                    src={imgAvatarPc}
                    alt="Ilustração de uma pessoa com capuz roxo, sem rosto visível, usando um notebook escuro com ícone de avião de papel"
                    className="lg:h-auto lg:w-90 laptopG:w-100 2xl:w-110"
                />

                <SocialMedia />
            </div>
        </>
    );
}

export default HeroImage;
