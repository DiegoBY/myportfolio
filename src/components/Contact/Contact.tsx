import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    // Enviar Mensagem do Form
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    let [formSuccess, setFormSuccess] = useState<string>('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs
            .send(
                'service_jhuedku',
                'template_mxcn1ge',
                templateParams,
                'LurZvW2TXcUgzoWR-'
            )
            .then(
                (response) => {
                    setFormSuccess('Enviado com Sucesso!');
                    setName('');
                    setEmail('');
                    setMessage('');

                    setTimeout(() => {
                        setFormSuccess('');
                    }, 5000);
                },
                (error) => {
                    setFormSuccess('Ocorreu um erro!');
                    setTimeout(() => {
                        setFormSuccess('');
                    }, 5000);
                }
            );
    };

    const maxChars = 1200;
    const charsRemaining = maxChars - message.length;

    return (
        <>
            <section
                id="contact"
                className="scroll-mt-24 lg:scroll-mt-32 my-10 px-5 tabletS:px-14 lg:px-24 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]"
            >
                <div>
                    <p className="text-[#E9E9EB] text-3xl font-bold">
                        <span className="text-[#703FDF] selection:bg-[#703FDF] selection:text-[#E9E9EB]">
                            #
                        </span>
                        <span className="selection:bg-[#E9E9EB] selection:text-[#703FDF]">
                            Contato
                        </span>
                    </p>
                </div>

                <div className="lg:w-full lg:flex lg:justify-between lg:items-center">
                    <form
                        action="."
                        className="mt-10 gap-y-8 flex flex-col lg:w-1/2"
                        onSubmit={sendEmail}
                    >
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="outline-[#E9E9EB]  w-full h-14 px-5 py-2 border-2 border-[#703FDF] text-[#E9E9EB] text-base font-medium placeholder:text-[#E9E9EB] placeholder:font-medium placeholder:text-xl lg:w-full"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            minLength={3}
                        />

                        <input
                            type="email"
                            placeholder="seuemail@exemplo.dev"
                            className="outline-[#E9E9EB] w-full h-14 px-5 py-2 border-2 border-[#703FDF] text-[#E9E9EB] text-base font-medium placeholder:text-[#E9E9EB] placeholder:font-medium placeholder:text-xl lg:w-full"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <div className="w-full">
                            <textarea
                                name="message"
                                id="message"
                                value={message}
                                onChange={(e) => {
                                    if (e.target.value.length <= maxChars) {
                                        setMessage(e.target.value);
                                    }
                                }}
                                maxLength={maxChars}
                                placeholder="Sua mensagem"
                                className="outline-[#E9E9EB] w-full h-40 resize-none px-5 py-2 border-2 border-[#703FDF] text-[#E9E9EB] text-base font-medium placeholder:text-[#E9E9EB] placeholder:font-medium placeholder:text-xl"
                                required
                            ></textarea>
                            {/* Confirmação do envio do form */}
                            <div className="flex justify-between">
                                <p className="select-none text-[#E9E9EB] text-sm">
                                    {formSuccess}
                                </p>
                                <p className="select-none text-[#E9E9EB] opacity-20">
                                    <span>{charsRemaining}</span> Restante
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center lg:justify-start">
                            <button
                                className="mt-5 relative group overflow-hidden border-2 border-[#713FDF] text-[#E9E9EB] text-xl px-4 py-2 font-medium group cursor-pointer w-52 h-14  tabletS:p-0"
                                type="submit"
                            >
                                <span className="relative z-10">
                                    Enviar Mensagem
                                </span>
                                <span className="w-full h-full flex absolute top-0 left-0 scale-x-0 origin-right transition-transform duration-300 ease-in group-hover:scale-x-100 group-hover:origin-left group-active:scale-x-100 group-active:origin-left bg-[#713FDF]"></span>
                            </button>
                        </div>
                    </form>

                    <div className="hidden w-[294px] h-[294px] relative rounded-full overflow-hidden bg-transparent border-2 border-[#847EA4] lg:flex justify-center items-center">
                        <div className="absolute h-0.5 bg-[#703FDF] left-1/2 top-1/2 w-1/2 origin-left z-10 animate-animationRadar">
                            <div className="absolute h-52 w-52 bg-gradient-to-l from-[#B191F8] to-[#703FDF]/20 left-0 bottom-1/2 "></div>
                        </div>

                        <div className="w-[244px] h-[244px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                            <div className="w-[194px] h-[194px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                                <div className="w-[144px] h-[144px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                                    <div className="w-[94px] h-[94px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                                        <div className="w-[44px] h-[44px] rounded-full bg-transparent border-2 border-[#847EA4] flex justify-center items-center">
                                            <div className="w-[20px] h-[20px] rounded-full bg-[#703FDF] flex justify-center items-center z-10"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full h-0.5 bg-[#594F6E]"></div>
        </>
    );
}

export default Contact;
