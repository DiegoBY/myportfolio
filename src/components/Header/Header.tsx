import MenuHeader from './MenuHeader';

function Header() {
    return (
        <>
            <header className="border-b-2 border-[#594F6E] px-5 flex justify-between items-center bg-[#12101B] z-[50] fixed top-0 left-0 right-0 tabletS:px-14 lg:w-full lg:flex lg:px-24 lg:justify-between lg:items-center lg:py-5 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]">
                <div className="py-4 relative z-[999]">
                    <a href="#">
                        <h1 className="selection:bg-[#7543DE] font-baiJumjuree font-semibold text-2xl text-white">
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
                    </a>
                </div>

                <MenuHeader />
            </header>
        </>
    );
}

export default Header;
