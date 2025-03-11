
import { Instagram, Youtube, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-cormorant font-bold mb-4">Мария Манукян</h3>
            <p className="text-gray-600 mb-4">
              Профессиональный танцор, модель и вокалистка с богатым опытом выступлений и участия в проектах.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/manyamanukian" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@manya_m" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
                <Youtube size={20} />
              </a>
              <a href="https://t.me/marymane220" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-link">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-cormorant font-bold mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Главная</Link>
              <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">О Марии</Link>
              <Link to="/dance" className="text-gray-600 hover:text-primary transition-colors">Танцы</Link>
              <Link to="/modeling" className="text-gray-600 hover:text-primary transition-colors">Моделинг</Link>
              <Link to="/vocal" className="text-gray-600 hover:text-primary transition-colors">Вокал</Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-cormorant font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+79183975042" className="text-gray-600 hover:text-primary transition-colors">+7 (918) 397-50-42</a>
              </div>
              <div className="flex items-center">
                <MessageCircle size={18} className="mr-2 text-primary" />
                <a href="https://t.me/marymane220" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">@marymane220</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Мария Манукян. Все права защищены.</p>
          <p className="mt-2">Сайт был разработан при поддержке CodeDigital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
