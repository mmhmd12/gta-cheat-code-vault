
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';
import { games } from '@/data/gtaCheats';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const registrationSchema = z.object({
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  password: z.string().min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

const Index = () => {
  const [showAdDetails, setShowAdDetails] = useState(false);
  
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

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

  const onSubmit = (data: RegistrationFormValues) => {
    toast.success("تم التسجيل بنجاح", {
      description: "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني",
    });
    console.log(data);
    form.reset();
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
        
        {/* Registration & Ad Section */}
        <section className="bg-gta-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Registration Form */}
              <div className="bg-secondary/50 p-6 rounded-lg border border-gta-accent/20">
                <h2 className="gta-subtitle mb-4 text-right">التسجيل بالبريد الإلكتروني</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-right">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">البريد الإلكتروني</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="أدخل بريدك الإلكتروني" 
                              {...field} 
                              className="bg-secondary border-gta-accent/20"
                              dir="rtl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">كلمة المرور</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="كلمة المرور" 
                              {...field} 
                              className="bg-secondary border-gta-accent/20"
                              dir="rtl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gta-accent hover:bg-gta-accent/90"
                    >
                      <Mail className="ml-2 h-4 w-4" />
                      التسجيل
                    </Button>
                  </form>
                </Form>
              </div>
              
              {/* Advertisement Space */}
              <div className="bg-secondary/50 p-6 rounded-lg border border-gta-accent/20">
                <h2 className="gta-subtitle mb-4">Advertisement Space</h2>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-dashed border-gta-accent/50 min-h-[200px] flex items-center justify-center">
                  {showAdDetails ? (
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">Advertise With Us</h3>
                      <p className="text-gray-300 mb-4">Reach thousands of GTA players daily</p>
                      <ul className="text-left text-gray-300 mb-4">
                        <li className="mb-1">• Premium banner placements</li>
                        <li className="mb-1">• Targeted gaming audience</li>
                        <li className="mb-1">• Affordable rates</li>
                        <li className="mb-1">• Monthly & quarterly packages</li>
                      </ul>
                      <p className="text-gray-300 mb-3">Contact us at: <span className="text-gta-accent">ads@gtacheatvault.com</span></p>
                      <Button 
                        variant="outline" 
                        className="border-gta-accent text-gta-accent hover:bg-gta-accent hover:text-white"
                        onClick={() => setShowAdDetails(false)}
                      >
                        Close Details
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-xl font-bold mb-2">Your Ad Could Be Here</p>
                      <Button 
                        variant="outline" 
                        className="border-gta-accent text-gta-accent hover:bg-gta-accent hover:text-white"
                        onClick={() => setShowAdDetails(true)}
                      >
                        View Ad Details
                      </Button>
                    </div>
                  )}
                </div>
              </div>
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
