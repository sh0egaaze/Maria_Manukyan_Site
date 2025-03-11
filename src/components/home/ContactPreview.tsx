
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ContactPreview = () => {
  const { toast } = useToast();

  const handlePhoneClick = (e: React.MouseEvent) => {
    // Показываем уведомление при клике
    toast({
      title: "Звонок",
      description: "Вы можете позвонить по номеру +7 (918) 397-50-42",
    });
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/lovable-uploads/ca9b2a10-684b-44a4-b0aa-5e0802d42ea6.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-white after:bg-white mb-4">Связаться со мной</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Готова к сотрудничеству и новым проектам. Свяжитесь со мной удобным способом.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <Phone className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-gray-300 mb-4">+7 (918) 397-50-42</p>
            <a href="tel:+79183975042" onClick={handlePhoneClick} className="text-primary hover:underline">Позвонить</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <MessageCircle className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Telegram</h3>
            <p className="text-gray-300 mb-4">@marymane220</p>
            <a href="https://t.me/marymane220" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Написать</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <Mail className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300 mb-4">Форма обратной связи</p>
            <Link to="/contact" className="text-primary hover:underline">Отправить сообщение</Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              Заполнить форму связи
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
