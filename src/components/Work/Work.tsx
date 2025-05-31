import imgPortfolio from '../../images/imgPortfolio.png';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WorkProject from './WorkProject';

function Work() {
    // Carousel
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

        appendDots: (dots: any) => (
            <div className="p-2">
                <ul className="flex justify-center gap-2">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 rounded-full bg-[#E9E9EB] transition-all duration-300 ease-in-out mt-5"></div>
        ),
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <>
            <section
                id="projects"
                className="scroll-mt-24 lg:scroll-mt-32 my-10 px-5 tabletS:px-14 lg:px-24 lg:mb-0 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]"
            >
                <div>
                    <p className="text-[#E9E9EB] text-3xl font-bold">
                        <span className="text-[#703FDF] selection:bg-[#703FDF] selection:text-[#E9E9EB]">
                            #
                        </span>
                        <span className="selection:bg-[#E9E9EB] selection:text-[#703FDF] ">
                            Projetos
                        </span>
                    </p>
                </div>

                <div className="mt-10 w-full h-[32rem] flex justify-center lg:h-[35rem]">
                    <div className="slider-container w-full ">
                        <Slider {...settings} className="h-[30rem]">
                            {/* Projeto 1 */}

                            <WorkProject
                                title="Portfolio"
                                desc="Meu portfólio é um espaço onde mostro minha evolução como Desenvolvedor Front-End, com projetos que unem design criativo, código limpo e interatividade."
                                altImg="Representação visual do portfólio de Diego Santos: tecnologia, criatividade e um avião de papel rumo ao céu."
                                techs={['React', 'Typescript', 'Tailwind css']}
                                isButton={false}
                                isComing={false}
                                img={imgPortfolio}
                            />
                            <WorkProject
                                title="Em breve"
                                desc="Projeto em Construção"
                                altImg="Em Breve"
                                techs={['Em Breve']}
                                isButton={true}
                                isComing={true}
                            />
                            <WorkProject
                                title="Em breve"
                                desc="Projeto em Construção"
                                altImg="Em Breve"
                                techs={['Em Breve']}
                                isButton={true}
                                isComing={true}
                            />
                        </Slider>
                    </div>
                </div>
            </section>
            <div className="w-full h-0.5 bg-[#594F6E]"></div>
        </>
    );
}

export default Work;
