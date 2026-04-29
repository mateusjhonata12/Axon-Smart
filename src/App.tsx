/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Footer from './components/Footer';
import Collections from './components/Collections';
import CollectionsTeaser from './components/CollectionsTeaser';

function HomePage() {
  return (
    <>
      <Hero />
      <div className="space-y-32 md:space-y-64 pb-32 md:pb-64">
        <Services />
        <CollectionsTeaser />
        <VideoSection />
        <About />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="min-h-screen selection:bg-nero selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/colecoes" element={<Collections />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

