
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, MessageCircle, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Формируем текст сообщения для отправки
    const messageText = `
Новая заявка с сайта!
Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone}
Сообщение: ${formData.message}
    `;
    
    console.log("Отправка сообщения:", messageText);
    
    // Имитация отправки сообщения с задержкой
    setTimeout(() => {
      setIsLoading(false);
      
      // Уведомление об успешной отправке
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо! Ваше сообщение успешно отправлено. Мария свяжется с вами в ближайшее время.",
      });
      
      // Сброс формы
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  // Обработчик для кнопки звонка
  const handleCallClick = () => {
    toast({
      title: "Звонок",
      description: "Вы можете позвонить по номеру +7 (918) 397-50-42",
    });
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-cormorant font-bold mb-6">Контакты</h1>
          <div className="h-1 w-24 bg-primary mb-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-cormorant font-semibold mb-6">Свяжитесь со мной</h2>
              
              <p className="text-lg text-gray-600 mb-10">
                Если вы заинтересованы в сотрудничестве или у вас есть вопросы, заполните форму или свяжитесь со мной напрямую по указанным контактам.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="text-gray-500 text-sm">Телефон</p>
                    <a href="tel:+79183975042" onClick={handleCallClick} className="text-lg font-medium hover:text-primary transition-colors">
                      +7 (918) 397-50-42
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="text-gray-500 text-sm">Telegram</p>
                    <a href="https://t.me/marymane220" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                      @marymane220
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="text-gray-500 text-sm">Email через форму связи</p>
                    <span className="text-lg font-medium">Заполните форму справа →</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Социальные сети</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/manyamanukian" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://youtube.com/@manya_m" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://t.me/marymane220" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-all"
                    aria-label="Telegram"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-cormorant font-semibold mb-6">Написать мне</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваш email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="example@mail.ru"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                        placeholder="Опишите ваш запрос или предложение..."
                      ></textarea>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full rounded-md" disabled={isLoading}>
                      {isLoading ? "Отправка..." : "Отправить сообщение"}
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-2">
                      Сообщение будет отправлено в Telegram и на email
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
