import React from 'react';
import LandingHero from './LandingHero';
import AnalysisLevels from './AnalysisLevels';
import WorkflowVisualization from './WorkflowVisualization';
import DemoInterface from './DemoInterface';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import CervixAIDemoModal from "./CervixAIDemoModal";
import TeamSection from "./TeamSection";
import { Button } from './ui/button';
import { ArrowUp, Github, Linkedin, Youtube, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  const [showAboutUs, setShowAboutUs] = React.useState(false);
  const [showFAQ, setShowFAQ] = React.useState(false);
  const [showDemo, setShowDemo] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar 
        onAboutClick={() => setShowAboutUs(true)}
        onFaqClick={() => setShowFAQ(true)}
        onDemoClick={() => setShowDemo(true)}
      />
      
      {/* Hero Section */}
      <LandingHero />

      {/* Analysis Levels Section */}
      <section id="analysis-levels" className="py-20 lg:py-2 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnalysisLevels />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-5 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="container mx-auto py-5 lg:py-0  px-6 lg:px-8">
          <WorkflowVisualization />
        </div>
      </section>

      {/* Demo Interface Section */}
{/* Demo Interface Section */}
      <section id="demo" className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Interactive Demo
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Experience CerVixAI's capabilities with our interactive demonstration.
            </p>
            <Button 
              size="lg" 
              onClick={() => setShowDemo(true)}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
            >
              Launch Interactive Demo
            </Button>
          </div>
          
          {/* Optional: You can keep a simplified preview here if desired */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg aspect-square shadow-sm border border-slate-200 flex items-center justify-center">
                  <div className="text-slate-400 text-sm">Sample {item}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-slate-500 mb-4">Click the button above to explore our full demo interface</p>
            </div>
          </div>
        </div>
      </section>
   
      {/* Impact Statistics Section */}
      <section id="impact" className="py-20 lg:py-25 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="bg-white mx-auto py-4 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-13 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 ">
              Impact & Statistics
            </h2>
            <p className="text-l text-slate-600 leading-relaxed">
              Transforming healthcare outcomes through AI-powered cervical cancer screening.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 py-4 lg:py-4">
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-4">
                  <span className="text-2xl font-bold text-white">↗</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Increased Screening Capacity</h3>
                <div className="text-6xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-4">
                  270%
                </div>
              </div>
              <p className="text-l text-lg:text-2xl text-slate-600 leading-relaxed text-center">
                CerVixAI dramatically increases annual cervical cancer screening capacity from 2,770 to 10,270 patients, 
                prioritizing high-burden regions and underserved communities.
              </p>
            </div>
            
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mb-4">
                  <span className="text-2xl font-bold text-white"></span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Reduced Diagnostic Time</h3>
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-red-500 mb-1">21 days</div>
                    <div className="text-sm text-slate-500 font-medium">Before</div>
                  </div>
                  <div className="text-3xl text-slate-400">→</div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-1">48 hours</div>
                    <div className="text-sm text-slate-500 font-medium">With CerVixAI</div>
                  </div>
                </div>
              </div>
              <p className="text-l text-lg:text-2xl text-slate-600 leading-relaxed text-center">
                Our AI-powered system reduces the average turnaround time for cervical cancer diagnostic and 
                histopathology reports from three weeks to just 48 hours, enabling faster treatment decisions.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">Additional Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Improved Accuracy</h4>
                <p className="text-slate-600 leading-relaxed">AI-assisted screening achieves {'>'}90% sensitivity and  {'>'}85% specificity, reducing human error.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full mb-4">
                  <span className="text-white font-bold">⚙</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Resource Optimization</h4>
                <p className="text-slate-600 leading-relaxed">Enables efficient allocation of limited pathology expertise where most needed.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full mb-4">
                  <span className="text-white font-bold">🏥</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Rural Access</h4>
                <p className="text-slate-600 leading-relaxed">Brings high-quality screening to remote areas with limited healthcare infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Team Section*/}
      <section id="team-section" className="py-20 lg:py-2 bg-white">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50">
          <TeamSection />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">CerVixAI</h3>
                  <p className="text-slate-400 text-sm">by ORIINE</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                A Stratified AI-Powered Multi-Level Classification Model for Enhanced Cervical Cancer Analysis and Control in Cameroon.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/oriine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/oriine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com/@oriine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/237123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#analysis-levels" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Analysis Levels</a></li>
                <li><a href="#how-it-works" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">How It Works</a></li>
                <li><a href="#demo" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Demo Interface</a></li>
                <li><a href="#impact" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Impact Statistics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">ORIINE</p>
                    <p className="text-slate-400 text-sm">Bamenda, Cameroon</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <a href="mailto:info@oriine.org" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                    info@oriine.org
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <a href="tel:+237123456789" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                    +237 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} CerVixAI by ORIINE. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <Button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 rounded-full bg-teal-600 hover:bg-teal-700 shadow-2xl p-4 z-50 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
      
      {/* Modals */}
      <AboutUs isOpen={showAboutUs} onClose={() => setShowAboutUs(false)} />
      <FAQ isOpen={showFAQ} onClose={() => setShowFAQ(false)} />
      <CervixAIDemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </div>
  );
};

export default Home;