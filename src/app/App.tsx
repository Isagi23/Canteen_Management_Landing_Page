import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Scope } from './components/Scope';
import { Features } from './components/Features';
import { AppPreview } from './components/AppPreview';
import { Benefits } from './components/Benefits';
import { TechStack } from './components/TechStack';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Scope />
        <Features />
        <AppPreview />
        <Benefits />
        <TechStack />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}