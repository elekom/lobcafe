import './sass/main.scss';
import i18n from './i18n';
import Loading from './components/Loading';
import Header from './components/Header';
import Banner from './components/Banner';
import Home from './components/Home';
import Menu from './components/Menu';
import Lobsters from './components/Lobsters';
import Map from './components/Map';
import { Suspense, useState, useEffect } from 'react';
import LocaleContext from './LocaleContext';
import Footer from './components/Footer';
import WindowContext from './WindowContext';
import MobileMenu from './components/MobileMenu';
import Top from './components/Top';

function App() {

  const [locale, setLocale] = useState(i18n.language);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  i18n.on('languageChanged', () => setLocale(i18n.language));

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
        setMobileMenuExpanded(false);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let toggleMobileMenuExpanded = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  }

  return (
    <div className="App">
      <WindowContext.Provider value={{ isMobile, setIsMobile }}>
        <LocaleContext.Provider value={{locale, setLocale}}>
          <Suspense fallback={<Loading />}>
            {/* <Banner /> */}
            <Top />
            <Header toggleMobileMenuExpanded={toggleMobileMenuExpanded} />
            { mobileMenuExpanded && <MobileMenu /> }
            <Home />
            <Menu />
            <Lobsters />
            <Map />
            <Footer />
          </Suspense>
        </LocaleContext.Provider>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
