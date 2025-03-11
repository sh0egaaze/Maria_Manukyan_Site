
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/44825737-9d31-41e7-891a-d4b099041d9b.png" 
              alt="Мария Манукян" 
              className="rounded-lg shadow-xl object-cover w-full h-[600px]" 
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <img 
                src="/lovable-uploads/80ac581c-eabe-4762-be02-e0e2f9c9e494.png" 
                alt="Мария Манукян танцует" 
                className="w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-white" 
              />
            </div>
          </div>
          
          <div>
            <h2 className="section-title mb-6">Обо мне</h2>
            <p className="text-lg mb-6">
              Меня зовут Мария, мне 24 года. Я профессиональный танцор, модель и вокалистка с богатым опытом выступлений. 
              Переехала в Москву из солнечного Геленджика, после того как стала 1Vice Miss Russia в рамках конкурса "Мисс Россия Земля".
            </p>
            <p className="text-lg mb-8">
              Являюсь чемпионкой мира по акробатике, вице-чемпионкой мира по народным танцам, чемпионкой России по Диско. 
              Творчество - это моя жизнь и возможность самовыражения.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/about">
                Подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
