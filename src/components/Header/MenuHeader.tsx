import { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { MenuItem } from '../../types/MenuItem';
import SocialMedia from '../SocialMedia/SocialMedia';

const menuItems: MenuItem[] = [
    { label: 'Home', href: '#homePage' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contato', href: '#contact' },
];

function MenuHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

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
                                    const targetId = item.href.replace('#', '');
                                    const el =
                                        document.getElementById(targetId);
                                    if (el) {
                                        el.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                    }
                                }}
                                className={`font-bold text-xl cursor-pointer pb-1 block selection:bg-[#7543DE] transition-all ease-in duration-200  ${
                                    activeIndex === index
                                        ? 'text-[#7543DE] selection:bg-[#E9E9EB]'
                                        : 'text-[#E9E9EB] hover:-translate-y-1'
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
                        >
                            <SocialMedia />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default MenuHeader;
