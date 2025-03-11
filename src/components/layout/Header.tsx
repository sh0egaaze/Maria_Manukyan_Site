
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to top when clicking nav links
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={handleNavClick} className="text-2xl font-cormorant font-bold text-foreground">
          Мария Манукян
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" onClick={handleNavClick} className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Главная
          </Link>
          <Link to="/about" onClick={handleNavClick} className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            О Марии
          </Link>
          <Link to="/dance" onClick={handleNavClick} className={`nav-link ${isActive('/dance') ? 'active' : ''}`}>
            Танцы
          </Link>
          <Link to="/modeling" onClick={handleNavClick} className={`nav-link ${isActive('/modeling') ? 'active' : ''}`}>
            Моделинг
          </Link>
          <Link to="/vocal" onClick={handleNavClick} className={`nav-link ${isActive('/vocal') ? 'active' : ''}`}>
            Вокал
          </Link>
          <Link to="/contact" onClick={handleNavClick} className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://instagram.com/manyamanukian" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com/@manya_m" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
            <Youtube size={20} />
          </a>
          <a href="tel:+79183975042" aria-label="Phone" className="social-link">
            <Smartphone size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu} aria-label="Меню">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg absolute w-full py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6">
            <Link to="/" onClick={handleNavClick} className={`text-lg font-medium ${isActive('/') ? 'text-primary' : ''}`}>
              Главная
            </Link>
            <Link to="/about" onClick={handleNavClick} className={`text-lg font-medium ${isActive('/about') ? 'text-primary' : ''}`}>
              О Марии
            </Link>
            <Link to="/dance" onClick={handleNavClick} className={`text-lg font-medium ${isActive('/dance') ? 'text-primary' : ''}`}>
              Танцы
            </Link>
            <Link to="/modeling" onClick={handleNavClick} className={`text-lg font-medium ${isActive('/modeling') ? 'text-primary' : ''}`}>
              Моделинг
            </Link>
            <Link to="/vocal" onClick={handleNavClick} className={`text-lg font-medium ${isActive('/vocal') ? 'text-primary' : ''}`}>
              Вокал
            </Link>
            <Link to="/contact" onClick={handleNavClick} className={`text-lg font-medium ${isActive('/contact') ? 'text-primary' : ''}`}>
              Контакты
            </Link>
            
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/manyamanukian" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@manya_m" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
                <Youtube size={20} />
              </a>
              <a href="tel:+79183975042" aria-label="Phone" className="social-link">
                <Smartphone size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
