import React from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavbarProps {
  onAboutClick?: () => void;
  onFaqClick?: () => void;
  onDemoClick?: () => void;
}

const navLinks = [
  { id: "analysis-levels", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "demo", label: "Live Demo" },
  { id: "impact", label: "Impact" },
];

const Navbar = ({
  onAboutClick = () => {},
  onFaqClick = () => {},
  onDemoClick = () => {},
}: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleAboutClick = () => {
    onAboutClick();
    setIsOpen(false);
  };

  const handleFaqClick = () => {
    onFaqClick();
    setIsOpen(false);
  };

  const handleDemoClick = () => {
    onDemoClick();
    setIsOpen(false);
  };

  const logo = "/cervilogo1.jpg";

  return (
    <nav
      className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-200"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              {/* Image Logo */}
              <img 
                src={logo} 
                alt="CerVixAI Logo" 
                className="h-full w-20 spy-2" // Adjust size as needed
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => link.id === "demo" ? handleDemoClick() : scrollToSection(link.id)}
                className="inline-flex items-center px-4 py-2 font-medium text-slate-700 hover:text-teal-600 focus:text-teal-700 transition-colors duration-200 rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:outline-none"
                aria-label={link.label}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={handleAboutClick}
              className="inline-flex items-center px-4 py-2 font-medium text-slate-700 hover:text-teal-600 focus:text-teal-700 transition-colors duration-200 rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:outline-none"
              aria-label="About"
            >
              About
            </button>
            <button
              onClick={handleFaqClick}
              className="inline-flex items-center px-4 py-2 font-medium text-slate-700 hover:text-teal-600 focus:text-teal-700 transition-colors duration-200 rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:outline-none"
              aria-label="Support"
            >
              FAQ
            </button>

            {/* Call To Action */}
            <Button
              onClick={() => window.open("https://github.com/yourusername/your-repo", "_blank")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:from-teal-700 hover:to-blue-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-200"
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-label="Open menu"
                >
                  <Menu className="h-7 w-7 text-slate-700" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs sm:max-w-sm p-0"
                aria-label="Mobile Navigation"
              >
                <div className="flex flex-col h-full">
                  {/* Logo in mobile menu */}
                  <div className="flex items-center gap-3 px-6 pt-8 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 bg-gradient-to-tr from-teal-600 to-blue-500 rounded-xl flex items-center justify-center shadow">
                      <span className="text-white font-extrabold text-xl">C</span>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-slate-900">CerVixAI</span>
                      <span className="block text-xs text-slate-500 font-medium">by ORIINE</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col space-y-2 px-6 py-8">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => link.id === "demo" ? handleDemoClick() : scrollToSection(link.id)}
                        className="w-full text-left text-slate-700 hover:text-teal-600 font-medium px-4 py-3 rounded-lg hover:bg-teal-50 focus:bg-teal-50 transition-colors duration-200"
                        aria-label={link.label}
                      >
                        {link.label}
                      </button>
                    ))}
                    <button
                      onClick={handleAboutClick}
                      className="w-full text-left text-slate-700 hover:text-teal-600 font-medium px-4 py-3 rounded-lg hover:bg-teal-50 focus:bg-teal-50 transition-colors duration-200"
                      aria-label="About"
                    >
                      About
                    </button>
                    <button
                      onClick={handleFaqClick}
                      className="w-full text-left text-slate-700 hover:text-teal-600 font-medium px-4 py-3 rounded-lg hover:bg-teal-50 focus:bg-teal-50 transition-colors duration-200"
                      aria-label="Support"
                    >
                      Support
                    </button>
                  </div>
                  <div className="px-6 pb-8">
                    <Button
                      onClick={handleDemoClick}
                      className="w-full px-5 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:from-teal-700 hover:to-blue-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-200"
                    >
                      Try Demo
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;