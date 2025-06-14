import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const LandingHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center min-h-[calc(100vh-12rem)]">
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-0 lg:pr-4"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-1 ">
                <div className="inline-flex items-center px-4 py-0 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  AI-Powered Healthcare Innovation
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Revolutionizing
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    Cervical Cancer
                  </span>
                  Detection
                </h1>
                <p className="text-l py-6 md:text-1xl text-slate-600 leading-relaxed max-w-2xl">
                  Cervix AI, an innovative AI-powered solution designed to transform cervical cancer detection through a Stratified Multilevel Classification Model (SMCM), is a groundbreaking project designed to revolutionize cervical cancer detection and screening in Cameroon.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection('demo')}
                >
                  Try Interactive Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold"
                  onClick={() => scrollToSection('analysis-levels')}
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    <Zap className="w-6 h-6 text-teal-600 mr-2" />
                    <span className="text-2xl font-bold text-slate-900">&gt; 270%</span>
                  </div>
                  <p className="text-slate-600">Increased Screening Capacity</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    <Shield className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-2xl font-bold text-slate-900">48hrs</span>
                  </div>
                  <p className="text-slate-600">Diagnostic Turnaround</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    <Users className="w-6 h-6 text-indigo-600 mr-2" />
                    <span className="text-2xl font-bold text-slate-900"> &gt; 90%</span>
                  </div>
                  <p className="text-slate-600">Detection Accuracy</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div 
              className="relative lg:pl-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80" 
                      alt="CerVixAI Analysis Interface"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 bg-slate-200 rounded-full"></div>
                    <div className="h-3 bg-slate-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-teal-200 rounded-full w-1/2"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-700">AI Active</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-teal-600 text-white rounded-xl shadow-lg p-4"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold">&gt; 93%</div>
                    <div className="text-xs opacity-90">Accuracy</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default LandingHero;
