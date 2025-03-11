
import Layout from "@/components/layout/Layout";
import { Mic, Music, Radio, Star, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Vocal = () => {
  const { toast } = useToast();
  
  const experiences = [
    { venue: "Жуковка 72", type: "выступление" },
    { venue: "Фортепиано", type: "выступление" },
    { venue: "Seasons", type: "выступление" },
    { venue: "Кавер группа «Город лето»", type: "участие" },
    { venue: "«Hard Candy Show»", type: "участие" },
    { venue: "Сольные выступления на мероприятиях", type: "выступление" },
  ];

  const collaborations = [
    "Артур Бест",
    "Ян Мартин",
    "Алексей Корзин (группа Челси)"
  ];
  
  const handleBookingClick = () => {
    toast({
      title: "Заявка на выступление",
      description: "Для бронирования выступления, пожалуйста, заполните форму на странице 'Контакты'",
    });
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-cormorant font-bold mb-6">Вокал</h1>
          <div className="h-1 w-24 bg-primary mb-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-cormorant font-semibold mb-6">Вокалистка</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  Вокал занимает особое место в моей творческой жизни. Я выступаю как сольно, так и в составе музыкальных коллективов. Мой репертуар очень разнообразный, я знаю весь кавер трек-лист популярных композиций и всегда готова подстроиться под формат мероприятия.
                </p>
                <p>
                  Являюсь солисткой группы «Hard Candy» и участницей проекта «Золотые голоса» благотворительного фонда Бедроса Киркорова.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Опыт выступлений:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                      <Music className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{exp.venue}</p>
                        <p className="text-sm text-gray-500">{exp.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Работала с артистами:</h3>
                <div className="flex flex-wrap gap-3">
                  {collaborations.map((artist, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full flex items-center">
                      <Mic className="h-4 w-4 mr-2" />
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Достижения:</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <Star className="h-6 w-6 text-amber-500 mr-3" />
                    <span>Участница шоу «Песни на ТНТ»</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <Radio className="h-6 w-6 text-primary mr-3" />
                    <span>Участница благотворительного фонда Бедроса Киркорова в составе проекта «Золотые голоса»</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button onClick={handleBookingClick} className="rounded-full">
                  Заказать выступление
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/beeef9f9-9c48-40be-9ea6-83270411957c.png" 
                alt="Мария Манукян - вокал" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-cormorant font-semibold mb-8 text-center">Вокальное портфолио</h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600">
              Вы можете познакомиться с моим вокальным творчеством, посмотрев мои выступления на YouTube канале и в других социальных сетях.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://youtube.com/@manya_m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#ff0000] text-white px-8 py-3 rounded-full hover:bg-[#ff0000]/90 transition-colors flex items-center"
            >
              <Youtube className="h-5 w-5 mr-2" />
              Мой YouTube канал
            </a>
            <a 
              href="https://disk.yandex.ru/d/anHwJ3fjErPMvw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Смотреть видеовизитку
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vocal;
