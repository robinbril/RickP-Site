
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Training } from './components/Training';
import { Schedule } from './components/Schedule';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Preloader } from './components/Preloader';

function App() {
  return (
    <div className="bg-black min-h-screen text-white text-base antialiased">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Training />
        <Schedule />
        <Events />
        <Contact />
      </main>
    </div>
  );
}

export default App;
