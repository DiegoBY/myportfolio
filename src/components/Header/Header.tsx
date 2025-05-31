import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const menuItems = [
    { label: 'Home', href: '#homePage' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contato', href: '#contact' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    useEffect(() => {
        const sections = menuItems.map((item) =>
            document.getElementById(item.href.replace('#', ''))
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sections.findIndex(
                            (sec) => sec === entry.target
                        );
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.9,
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

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

                {/* MENU MOBILE */}
                <div className="lg:hidden relative z-[999]">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-6 h-6 flex items-center justify-center cursor-pointer"
                    >
                        <span
                            className={`absolute w-6 h-0.5 bg-[#7543DE] transition-all duration-300 ${
                                isOpen ? 'rotate-45' : '-translate-y-1.5'
                            }`}
                        />
                        <span
                            className={`absolute w-6 h-0.5 bg-[#7543DE] transition-all duration-300 ${
                                isOpen ? '-rotate-45' : 'translate-y-1.5'
                            }`}
                        />
                    </div>
                </div>

                <nav className="hidden lg:flex relative">
                    <ul className="flex gap-x-10 font-medium text-sm text-[#E9E9EB] relative">
                        {menuItems.map((item, index) => (
                            <li key={item.label} className="relative">
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const targetId = item.href.replace(
                                            '#',
                                            ''
                                        );
                                        const el =
                                            document.getElementById(targetId);
                                        if (el) {
                                            el.scrollIntoView({
                                                behavior: 'smooth',
                                            });
                                        }
                                    }}
                                    className={`font-bold text-xl cursor-pointer pb-1 block selection:bg-[#7543DE] ${
                                        activeIndex === index
                                            ? 'text-[#7543DE] selection:bg-[#E9E9EB]'
                                            : 'text-[#E9E9EB]'
                                    }`}
                                >
                                    {item.label}
                                </a>
                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#7543DE]"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#12101B] flex flex-col items-center justify-start py-20 z-[40]"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.1 },
                                },
                            }}
                            className="flex flex-col items-center gap-y-6 mb-10"
                        >
                            {menuItems.map(({ label, href }) => (
                                <motion.li
                                    key={label}
                                    variants={{
                                        hidden: { opacity: 0, y: -10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <a
                                        href={href}
                                        className="text-[#E9E9EB] font-bold text-2xl"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(false);
                                            const targetId = href.replace(
                                                '#',
                                                ''
                                            );
                                            const element =
                                                document.getElementById(
                                                    targetId
                                                );
                                            if (element) {
                                                element.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                            }
                                        }}
                                    >
                                        {label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-x-6"
                        >
                            <a
                                href="https://www.instagram.com/diegosantos_cr/"
                                target="_blank"
                            >
                                <FaInstagram className="text-[#7543DE] w-8 h-8 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/diego-santos-8055bb288/"
                                target="_blank"
                            >
                                <FaLinkedinIn className="text-[#7543DE] w-8 h-8 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105" />
                            </a>
                            <a
                                href="https://github.com/DiegoBY"
                                target="_blank"
                            >
                                <FaGithub className="text-[#7543DE] w-8 h-8 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105" />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
