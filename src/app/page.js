import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Membership from './components/Membership';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Membership />

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Photography Club. All rights reserved.</p>
      </footer>
    </main>
  );
}
