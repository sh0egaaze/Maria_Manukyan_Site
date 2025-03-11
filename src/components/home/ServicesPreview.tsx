
import { Music, Camera, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Танцы",
      description: "Профессиональный танцор с опытом. Направления: high heels, contemporary. Владею акробатическими трюками.",
      link: "/dance"
    },
    {
      id: 2,
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Моделинг",
      description: "Опыт работы 5 лет. 1 vice miss Russia earth 2020. Европейская внешность. Параметры: 88-65-100.",
      link: "/modeling"
    },
    {
      id: 3,
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Вокал",
      description: "Сольные выступления, работа с артистами. Участница шоу «песни на тнт», кавер группы «город лето», «Hard candy show».",
      link: "/vocal"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-4">Мои направления</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Многолетний опыт работы в различных творческих направлениях
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-md card-hover border border-gray-100">
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-cormorant font-semibold mb-4 text-center">{service.title}</h3>
              <p className="mb-6 text-gray-600 text-center">{service.description}</p>
              <div className="text-center">
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                  <Link to={service.link}>
                    Подробнее
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
