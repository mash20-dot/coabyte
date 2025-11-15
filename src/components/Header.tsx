import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      {/* Content Layer */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-25">
          <Link to="/" className="flex items-center gap-0">
            <img src="https://i.imgur.com/EJlR6ep.png" alt="Coabyte Technologies" className="h-20 w-32 object-contain" />
            <div className="flex flex-col -ml-2">
              <span className="text-lg font-semibold text-white leading-tight">Coabyte</span>
              <span className="text-lg font-semibold text-white leading-tight">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/projects" className="text-white hover:text-primary transition-colors font-medium">
              Projects
            </Link>
            <Link to="/team" className="text-white hover:text-primary transition-colors font-medium">
              Team
            </Link>
            <Link to="/blog" className="text-white hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 bg-black/60 backdrop-blur-md rounded-lg px-4 mb-4">
            <Link
              to="/"
              className="block text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/team"
              className="block text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/blog"
              className="block text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;