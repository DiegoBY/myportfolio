import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import DisplayCode from './components/DisplayCode/DisplayCode';
import Work from './components/Work/Work';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoadingPortfolio from './components/LoadingPortfolio/LoadingPortfolio';

function App() {
    const [fakeLoading, setFakeLoading] = useState<string>('hidden');

    useEffect(() => {
        const timer = setTimeout(() => {
            setFakeLoading('block');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <main className="relative font-baiJumjuree">
                <LoadingPortfolio />

                <div className={`${fakeLoading}`}>
                    <Header />
                    <HomePage />
                    <DisplayCode />
                    <Work />
                    <About />
                    <Tech />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default App;
