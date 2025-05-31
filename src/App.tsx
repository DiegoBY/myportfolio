import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import DisplayCode from './components/DisplayCode/DisplayCode';
import Work from './components/Work/Work';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <main className="relative font-baiJumjuree">
                <Header />
                <HomePage />
                <DisplayCode />
                <Work />
                <About />
                <Tech />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default App;
