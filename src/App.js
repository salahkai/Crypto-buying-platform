import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TradeApp from './Components/Trade/Trade';
export default function App() {
  return (
    <div className="bg-hero-pattern text-white flex flex-col items-center">
      <Navbar />
      <Hero />
      <TradeApp />
    </div>
  );
}
