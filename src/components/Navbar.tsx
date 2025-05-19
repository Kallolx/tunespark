
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50">
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-white"></div>
            <span className="font-medium text-lg">Portfolite</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          
          <Button className="hidden md:flex items-center gap-2">
            <span>Get Template</span>
          </Button>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode 
}) => {
  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

export default Navbar;
