import { useState, useEffect, useRef } from 'react';

import { Icon } from '@iconify/react';
import ReactAudioPlayer from 'react-audio-player';
import seatBelt from '../../../public/audio/seat_belt.mp3';

function LoadingPortfolio() {
    const [progress, setProgress] = useState<number>(0);
    const [status, setStatus] = useState<string>('Checando pré-voo');
    const [loading, setLoading] = useState<boolean>(true);

    const audioRef = useRef<ReactAudioPlayer>(null);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => {
                const nextProgress = progress + 1;
                setProgress(nextProgress);

                if (nextProgress < 34) setStatus('Checando pré-voo');
                else if (nextProgress < 67)
                    setStatus('Embarque de passageiros');
                else {
                    setStatus('Tripulação, preparar para decolagem');

                    audioRef.current?.audioEl.current?.play();
                }
            }, 50);

            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [progress]);

    return (
        <>
            <section
                className={
                    loading
                        ? 'overflow-hidden flex justify-center items-center flex-col w-full h-full bg-[#12101B] fixed inset-0 z-[9999]'
                        : 'hidden'
                }
            >
                <Icon
                    icon="fa:paper-plane"
                    className="w-22 h-22 text-[#7543DE] animate-pulse "
                />

                <p className="text-xl mt-5 mb-2 text-[#E9E9EB]">{status}</p>

                {/* Bar Progress */}
                <div className="relative w-[50%] h-1 rounded-xs bg-[#E9E9EB]/20">
                    <div
                        className={`absolute left-0 top-0 z-20  h-full bg-[#7543DE] rounded-xs transition-all duration-200`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <ReactAudioPlayer
                    src={seatBelt}
                    ref={audioRef}
                    style={{ display: 'none' }}
                />
            </section>
        </>
    );
}

export default LoadingPortfolio;
