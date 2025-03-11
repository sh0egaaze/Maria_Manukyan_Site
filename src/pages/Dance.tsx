
import Layout from "@/components/layout/Layout";
import { Award, Mic, Music, Play, Star, Video, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Dance = () => {
  const { toast } = useToast();
  const [activeImage, setActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const experiences = [
    "Коммерческие проекты со звездами",
    "Работа в шоу-балетах",
    "Шоу «Mad girls»",
    "Шоу «Секрет счастья»"
  ];

  const achievements = [
    {
      title: "Чемпионка мира по акробатике",
      description: "Титул получен в 12 лет"
    },
    {
      title: "Вице-чемпионка мира по народным танцам",
      description: "Международные соревнования"
    },
    {
      title: "Чемпионка России по Диско",
      description: "Всероссийские соревнования"
    }
  ];

  const galleryImages = [
    "/lovable-uploads/f9a90cb2-2459-4f77-a32e-73402eafb4ef.png",
    "/lovable-uploads/e3b13c54-fc27-4c7d-abd8-faeff341a951.png",
    "/lovable-uploads/9621c732-5b07-4cdb-ab78-30c10543b2a2.png",
    "/lovable-uploads/76dd0f7f-d361-47f4-8cfd-8d38ac6f725e.png",
    "/lovable-uploads/3429fe9f-06e2-4303-ae17-a8f07754344e.png",
    "/lovable-uploads/9a1d531c-63b5-4748-802a-383be536e5c8.png",
    "/lovable-uploads/0a5224e2-b9cf-45bf-886d-60458a32e8a4.png",
    "/lovable-uploads/2846107a-f589-4e08-8d89-4535d14a73b1.png",
    "/lovable-uploads/3340212b-4915-4826-aed6-b52def2d79e3.png",
    "/lovable-uploads/44825737-9d31-41e7-891a-d4b099041d9b.png",
    "/lovable-uploads/5b75c23d-9c99-4701-a03a-b889070fe2c0.png",
    "/lovable-uploads/6d2eb5a1-6540-40af-acf7-2cf145039a56.png",
    "/lovable-uploads/80ac581c-eabe-4762-be02-e0e2f9c9e494.png",
    "/lovable-uploads/beeef9f9-9c48-40be-9ea6-83270411957c.png",
    "/lovable-uploads/c89db9ad-7b43-4425-8ea2-efd4690ec347.png",
    "/lovable-uploads/ca9b2a10-684b-44a4-b0aa-5e0802d42ea6.png",
    "/lovable-uploads/e378ab35-1fb7-43fb-abf2-73631084148e.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handleImageHover = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-cormorant font-bold mb-6 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Танцы</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-500 mb-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative group" onMouseEnter={handleImageHover}>
              <img 
                src="/lovable-uploads/3c892c5f-e37f-4371-9e6c-1a6a2982b20b.png" 
                alt="Мария Манукян - танцы" 
                className={`rounded-xl shadow-2xl w-full h-[600px] object-contain bg-gradient-to-b from-gray-50 to-white transform transition-all duration-500 ${isAnimating ? 'scale-105' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Мария Манукян</h3>
                  <p>Профессиональный танцор и хореограф</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h2 className="text-3xl font-cormorant font-semibold mb-6 relative inline-block">
                Профессиональный танцор
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-purple-500"></span>
              </h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Я профессиональный танцор с богатым опытом выступлений. Мои основные танцевальные направления: high heels и contemporary. Также владею различными акробатическими трюками, что делает мои выступления особенно зрелищными.
                </p>
              </div>
              
              <div className="mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="p-2 rounded-full bg-primary/10 mr-2">
                    <Music className="h-5 w-5 text-primary" />
                  </span>
                  Направления танцев:
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-primary/80 to-purple-500/80 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default">High Heels</span>
                  <span className="bg-gradient-to-r from-purple-500/80 to-primary/80 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default">Contemporary</span>
                  <span className="bg-gradient-to-r from-primary/80 to-purple-500/80 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default">Акробатика</span>
                </div>
              </div>
              
              <div className="mb-8 animate-fade-in" style={{animationDelay: "0.6s"}}>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="p-2 rounded-full bg-primary/10 mr-2">
                    <Star className="h-5 w-5 text-primary" />
                  </span>
                  Опыт работы:
                </h3>
                <ul className="space-y-3">
                  {experiences.map((experience, index) => (
                    <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 transition-transform">
                      <Star className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span>{experience}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-fade-in" style={{animationDelay: "0.8s"}}>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="p-2 rounded-full bg-primary/10 mr-2">
                    <Award className="h-5 w-5 text-primary" />
                  </span>
                  Достижения:
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start transform hover:-translate-y-1"
                    >
                      <div className="p-2 rounded-full bg-amber-100 mr-3">
                        <Award className="h-6 w-6 text-amber-500 flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-cormorant font-semibold mb-12 text-center relative inline-block">
            <span className="relative z-10">Галерея танцевальных фото</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -z-10 transform -rotate-1"></span>
          </h2>
          
          <div className="mb-16">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10"></div>
              <img 
                src={galleryImages[activeImage]} 
                alt="Танцевальное фото" 
                className="w-full h-full object-contain bg-gradient-to-r from-gray-50 to-white transition-all duration-1000 ease-in-out group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/60 to-transparent z-20">
                <h3 className="text-white text-2xl font-semibold mb-3">Фото #{activeImage + 1}</h3>
                <div className="mt-3 flex gap-2">
                  {galleryImages.slice(0, 8).map((_, idx) => (
                    <button 
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
                        idx === activeImage ? 'bg-white w-8' : 'bg-white/40 w-4 hover:bg-white/70'
                      }`}
                      onClick={() => setActiveImage(idx)}
                      aria-label={`View photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-72 bg-gradient-to-r from-gray-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  src={img} 
                  alt={`Танцевальное фото ${idx + 1}`} 
                  className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
                  <div className="p-4 text-white text-center w-full">
                    <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full inline-block mb-2">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-medium">Фото #{idx + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://disk.yandex.ru/d/anHwJ3fjErPMvw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Video className="h-5 w-5" />
              Смотреть видеовизитку
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dance;
