import { useState, useEffect } from 'react';
import HeroImage from './HeroImage';
import ContainerDisplay from './ContainerDisplay';
import LineForComponents from '../LineForComponents/LineForComponents';

function DisplayCode() {
    const [displayedCode, setDisplayedCode] = useState<string>('');

    const fullCode: string = `1  // Hello World !
2  import React from 'react';  
3  
4      function Hello() {
5          return (
6              <>
7                  <div>
8                      <h1>Diego Santos</h1>
9                      <h2>Desenvolvedor Front End</h2>
10                      <p>
11                         Sempre aprendendo,
12                         descobrindo novas possibilidades.
13                     </p>
14                 </div>
15             </>
16         );
17     }
18
19  export default Hello;
`;

    useEffect(() => {
        let currentIndex = 0;
        let intervalId: any;
        const startAnimation = () => {
            intervalId = setInterval(() => {
                if (currentIndex < fullCode.length) {
                    const nextChar = fullCode[currentIndex] || '';
                    setDisplayedCode((prev) => prev + nextChar);
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        setDisplayedCode('');
                        currentIndex = 0;
                        startAnimation();
                    }, 8000);
                }
            }, 50);
        };

        startAnimation();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className="my-20 px-5 lg:flex lg:justify-between lg:items-center tabletS:px-14 lg:px-24 laptopS:px-36 laptopM:px-60 2xl:px-96 4xl:px-[40rem]">
                <HeroImage />

                {/* Container Display */}
                <ContainerDisplay
                    fullCode={fullCode}
                    displayedCode={displayedCode}
                />
            </section>
            <LineForComponents />
        </>
    );
}

export default DisplayCode;
