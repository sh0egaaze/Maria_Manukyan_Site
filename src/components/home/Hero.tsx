
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/5b75c23d-9c99-4701-a03a-b889070fe2c0.png" 
          alt="Мария Манукян" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-cormorant font-bold mb-4 animate-fade-in">
            Мария Манукян
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Танцор • Модель • Вокалистка
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/about">
                Обо мне <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full">
              <Link to="/contact">
                Связаться со мной
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
