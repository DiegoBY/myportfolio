import LineForComponents from '../LineForComponents/LineForComponents';
import SocialMedia from '../SocialMedia/SocialMedia';

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

                <SocialMedia />

                <div className="text-[#847EA4] text-base font-normal text-center selection:bg-[#E9E9EB] selection:text-[#7543DE]">
                    <p className="mt-10">
                        © 2025 Diego Santos. Código com turbulência, mas pouso
                        suave.
                    </p>

                    <p className="mt-5 italic">Até a próxima decolagem…</p>
                </div>
            </footer>
            <LineForComponents />
        </>
    );
}

export default Footer;
