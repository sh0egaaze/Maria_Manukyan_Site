
import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";

const Modeling = () => {
  const details = [
    { label: "Возраст", value: "24 года" },
    { label: "Рост", value: "173 см" },
    { label: "Тип внешности", value: "Европейская" },
    { label: "Размер одежды", value: "S (44)" },
    { label: "Параметры", value: "88-65-100" },
    { label: "Размер обуви", value: "39" },
    { label: "Образование", value: "Режиссёр-постановщик" },
    { label: "Опыт работы", value: "5 лет" }
  ];

  const achievements = [
    "1 Vice Miss Russia Earth 2020",
    "Участница международных показов и фотосессий",
    "Фотомодель для каталогов одежды и аксессуаров",
    "Участница рекламных кампаний"
  ];

  const links = [
    { name: "Видеовизитка", url: "https://disk.yandex.ru/d/anHwJ3fjErPMvw" },
    { name: "Карта эмоций", url: "https://disk.yandex.ru/d/rva3Mvfd9GkFxQ" },
    { name: "Съемки портфолио", url: "https://disk.yandex.ru/d/Ped5ol0ncqF1RQ" },
    { name: "Instagram", url: "https://instagram.com/manyamanukian" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-cormorant font-bold mb-6">Моделинг</h1>
          <div className="h-1 w-24 bg-primary mb-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src="/lovable-uploads/6d2eb5a1-6540-40af-acf7-2cf145039a56.png" 
                alt="Мария Манукян - модель" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-cormorant font-semibold mb-6">Профессиональная модель</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  В модельной индустрии я работаю уже более 5 лет. За это время успела поучаствовать во многих интересных проектах - от модных показов до фотосессий для известных брендов. Одним из моих главных достижений является титул 1 Vice Miss Russia Earth 2020.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {details.map((detail, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-500 text-sm">{detail.label}</p>
                    <p className="font-semibold">{detail.value}</p>
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Достижения:</h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Портфолио:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 text-primary px-4 py-3 rounded-lg text-center hover:bg-primary/20 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-cormorant font-semibold mb-8">Фотогалерея</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="/lovable-uploads/44825737-9d31-41e7-891a-d4b099041d9b.png" 
              alt="Фотосессия" 
              className="rounded-lg shadow-md h-96 object-cover w-full"
            />
            <img 
              src="/lovable-uploads/e378ab35-1fb7-43fb-abf2-73631084148e.png" 
              alt="Фотосессия" 
              className="rounded-lg shadow-md h-96 object-cover w-full"
            />
            <img 
              src="/lovable-uploads/beeef9f9-9c48-40be-9ea6-83270411957c.png" 
              alt="Фотосессия" 
              className="rounded-lg shadow-md h-96 object-cover w-full"
            />
            <img 
              src="/lovable-uploads/ca9b2a10-684b-44a4-b0aa-5e0802d42ea6.png" 
              alt="Фотосессия" 
              className="rounded-lg shadow-md h-96 object-cover w-full"
            />
            <img 
              src="/lovable-uploads/5b75c23d-9c99-4701-a03a-b889070fe2c0.png" 
              alt="Фотосессия" 
              className="rounded-lg shadow-md h-96 object-cover w-full"
            />
            <img 
              src="/lovable-uploads/c89db9ad-7b43-4425-8ea2-efd4690ec347.png" 
              alt="Фотосессия" 
              className="rounded-lg shadow-md h-96 object-cover w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Modeling;
