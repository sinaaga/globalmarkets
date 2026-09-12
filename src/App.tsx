import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriceTicker from './components/PriceTicker';
import MarketOverview from './components/MarketOverview';
import CryptoSection from './components/CryptoSection';
import StockSection from './components/StockSection';
import ChartSection from './components/ChartSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <PriceTicker />
      <Hero />
      <MarketOverview />
      <CryptoSection />
      <ChartSection />
      <StockSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
