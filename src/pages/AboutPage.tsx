
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="gta-subtitle mb-8">ABOUT GTA CHEAT CODE VAULT</h1>
          
          <div className="bg-secondary/50 rounded-lg p-6 border border-gta-accent/20 mb-8">
            <p className="text-gray-300 mb-4">
              GTA Cheat Code Vault is a comprehensive resource for players of the Grand Theft Auto series. 
              Our application provides quick and easy access to cheat codes for all major GTA titles across multiple gaming platforms.
            </p>
            
            <p className="text-gray-300 mb-4">
              Whether you're playing on PlayStation, Xbox, PC, or Mobile, our database has you covered with an extensive 
              collection of cheats that can enhance your gaming experience.
            </p>
            
            <p className="text-gray-300">
              This app is designed for fans of the Grand Theft Auto series and is not affiliated with 
              Rockstar Games or Take-Two Interactive.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Supported Games</h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-300">
            <li>Grand Theft Auto V (GTA 5)</li>
            <li>Grand Theft Auto IV (GTA 4)</li>
            <li>Grand Theft Auto: San Andreas</li>
            <li>Grand Theft Auto: Vice City</li>
            <li>Grand Theft Auto III</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Supported Platforms</h2>
          <ul className="list-disc list-inside mb-8 space-y-2 text-gray-300">
            <li>PlayStation (PS3, PS4, PS5)</li>
            <li>Xbox (Xbox 360, Xbox One, Xbox Series X/S)</li>
            <li>PC</li>
            <li>Mobile (iOS, Android)</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="text-gray-300">
            All trademarks, logos, and game images are the property of their respective owners. 
            This app is not endorsed by or affiliated with Rockstar Games, Take-Two Interactive, or any 
            other game publishers. This application is intended for educational and entertainment purposes only.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
