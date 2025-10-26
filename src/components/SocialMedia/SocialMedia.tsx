import { Icon } from '@iconify/react';

function SocialMedia() {
    return (
        <>
            <section className="flex justify-center gap-x-8 mt-5">
                <a
                    href="https://www.instagram.com/diegosantos_cr/"
                    target="_blank"
                >
                    <Icon
                        icon="mdi:instagram"
                        className="text-[#7543DE] w-12 h-12 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105"
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/diego-santos-8055bb288/"
                    target="_blank"
                >
                    <Icon
                        icon="mdi:linkedin"
                        className="text-[#7543DE] w-12 h-12 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105"
                    />
                </a>

                <a href="https://github.com/DiegoBY" target="_blank">
                    <Icon
                        icon="mdi:github"
                        className="text-[#7543DE] w-12 h-12 transition duration-300 ease-in-out hover:text-[#E9E9EB] hover:scale-105"
                    />
                </a>
            </section>
        </>
    );
}

export default SocialMedia;
