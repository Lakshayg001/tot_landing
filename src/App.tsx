
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Closing from './components/Closing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-tot-orange selection:text-white overflow-hidden">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        <Hero />
        <Features />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
