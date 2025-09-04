import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="flex justify-center px-4 pt-4">
        <nav
          className="pointer-events-auto w-full max-w-6xl bg-white/8 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl px-6 py-3"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="font-bold text-white text-lg tracking-tight">
                TuneSpark
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 text-white">
              <NavLink href="#services">Ai Tools</NavLink>
              <NavLink href="#projects">Distribute</NavLink>
              <NavLink href="#testimonials">Pricing</NavLink>
              <NavLink href="#contact">Services</NavLink>
              <NavLink href="#about">Company Profile</NavLink>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button 
                variant="default" 
                className="bg-white text-black hover:bg-gray-100 transition-all duration-200 font-medium px-6 py-2 rounded-xl shadow-sm"
              >
                Start Creating
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white/90 p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-3">
                <MobileNavLink href="#services" onClick={toggleMobileMenu}>Ai Tools</MobileNavLink>
                <MobileNavLink href="#projects" onClick={toggleMobileMenu}>Distribute</MobileNavLink>
                <MobileNavLink href="#testimonials" onClick={toggleMobileMenu}>Pricing</MobileNavLink>
                <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Services</MobileNavLink>
                <MobileNavLink href="#about" onClick={toggleMobileMenu}>Company Profile</MobileNavLink>
                <div className="pt-3">
                  <Button 
                    variant="default" 
                    className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-200 font-medium py-3 rounded-xl"
                    onClick={toggleMobileMenu}
                  >
                    Start Creating
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a 
      href={href} 
      className="text-white/90 hover:text-white transition-all duration-200 font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
    </a>
  );
};

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-white/90 hover:text-white transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
    >
      {children}
    </a>
  );
};

export default Navbar;
