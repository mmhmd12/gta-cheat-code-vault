
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { games } from '@/data/gtaCheats';

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url(/images/gta-banner.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} 
          />
          <div className="relative z-20 container mx-auto px-4 py-24 text-center">
            <h1 className="gta-title mb-4">
              GTA CHEAT CODE <span className="text-gta-accent">VAULT</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-200">
              Get all cheat codes for every GTA game across PlayStation, Xbox, PC, and Mobile
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/search" 
                className="inline-flex items-center px-6 py-3 border border-gta-accent bg-gta-accent text-white font-bold rounded-md hover:bg-gta-accent/90 transition-colors"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Cheats
              </Link>
            </div>
          </div>
        </section>
        
        {/* Games Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="gta-subtitle text-center mb-12">SELECT YOUR GAME</h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {games.map((game) => (
              <motion.div key={game.id} variants={itemVariants}>
                <GameCard game={game} />
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Features Section */}
        <section className="bg-gta-accent/5 py-16">
          <div className="container mx-auto px-4">
            <h2 className="gta-subtitle text-center mb-12">FEATURES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-secondary/50 p-6 rounded-lg border border-gta-accent/20">
                <h3 className="text-xl font-bold mb-3 text-white">Easy Cheat Code Search</h3>
                <p className="text-gray-300">
                  Quickly find the exact cheat you need with our fast search feature.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border border-gta-accent/20">
                <h3 className="text-xl font-bold mb-3 text-white">Complete Cheat Library</h3>
                <p className="text-gray-300">
                  Access all cheat codes for every GTA game in one convenient place.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border border-gta-accent/20">
                <h3 className="text-xl font-bold mb-3 text-white">Multi-Platform Support</h3>
                <p className="text-gray-300">
                  Find codes for PlayStation, Xbox, PC and Mobile versions of GTA games.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border border-gta-accent/20">
                <h3 className="text-xl font-bold mb-3 text-white">User-Friendly Interface</h3>
                <p className="text-gray-300">
                  Easy to navigate design makes finding the right cheats simple and fast.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
