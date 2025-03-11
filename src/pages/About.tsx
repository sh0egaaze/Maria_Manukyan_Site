
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const qualities = [
    "Пунктуальность: Всегда прихожу на встречи вовремя и сдаю проекты в установленные сроки.",
    "Ответственность: Готова брать на себя ответственность за результаты своей работы.",
    "Профессионализм: Стремлюсь к высокому качеству работы и постоянному совершенствованию своих навыков."
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-cormorant font-bold mb-6">О Марии</h1>
          <div className="h-1 w-24 bg-primary mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src="/lovable-uploads/5b75c23d-9c99-4701-a03a-b889070fe2c0.png" 
                alt="Мария Манукян" 
                className="rounded-lg shadow-xl object-cover w-full"
              />
            </div>
            
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium mb-6">
                  Здравствуйте, меня зовут Мария, мне 24 года, рост 173 см, вес 60 кг.
                </p>
                
                <p className="mb-6">
                  По образованию я режиссёр-постановщик (КГУФКСТ). Переехала в Москву из солнечного Геленджика после того, как стала 1 Vice Miss Russia в рамках конкурса «Мисс Россия Земля».
                </p>
                
                <p className="mb-6">
                  С самого детства я была вовлечена в различные виды творчества: начиная с 3-х лет я занималась гимнастикой, затем танцами, балетом, вокалом, фортепьяно и даже изучала иностранные языки.
                </p>
                
                <p className="mb-6">
                  Я являюсь чемпионкой мира по акробатике (титул получила в 12 лет), вице-чемпионкой мира по народным танцам и чемпионкой России по Диско.
                </p>
                
                <p className="mb-6">
                  Мои творческие достижения включают участие в международном благотворительном фонде Владимира Спивакова, благотворительном фонде Бедроса Киркорова в составе проекта «Золотые голоса», шоу на ТНТ, шоу «Минута Славы» и проекте «Большие девочки» на телеканале Пятница как наставника по женственности.
                </p>
                
                <p>
                  Я очень необычный и счастливый человек. Верю в силу мысли и уверена, что абсолютно все зависит только от нас.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-cormorant font-semibold mb-4">Мои сильные стороны:</h3>
                <ul className="space-y-2">
                  {qualities.map((quality, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{quality}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/dance">
                    Танцы
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/modeling">
                    Моделинг
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/vocal">
                    Вокал
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-cormorant font-semibold mb-8">Моя история</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <p className="text-lg mb-6">
              В 16 лет, втайне от мамы, сделала татуировку на рёбрах на испанском - "Любовь и честь". Нет, не пожалела об этом.
            </p>
            
            <p className="text-lg mb-6">
              Я очень необычный человек, меня порой многим сложно понять. Ведь говорят, у творческих людей свой мир.
            </p>
            
            <p className="text-lg">
              Я очень счастливый человек. У меня есть Мама, благодаря которой с самого детства я росла в заботе и ласке, которая смогла заменить мне всех родственников. Друзья, которые придут всегда на помощь. Я верю в силу мысли и уверена, что абсолютно все зависит только от нас.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img 
              src="/lovable-uploads/44825737-9d31-41e7-891a-d4b099041d9b.png" 
              alt="Мария Манукян" 
              className="rounded-lg shadow-md h-80 object-cover"
            />
            <img 
              src="/lovable-uploads/c89db9ad-7b43-4425-8ea2-efd4690ec347.png" 
              alt="Мария Манукян - танцы" 
              className="rounded-lg shadow-md h-80 object-cover"
            />
            <img 
              src="/lovable-uploads/6d2eb5a1-6540-40af-acf7-2cf145039a56.png" 
              alt="Мария Манукян - моделинг" 
              className="rounded-lg shadow-md h-80 object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
