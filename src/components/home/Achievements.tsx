
import { Sparkles, Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      title: "Чемпионка мира по акробатике",
    },
    {
      id: 2,
      icon: <Award className="h-6 w-6 text-silver-500" />,
      title: "Vice Miss Russia Earth 2020",
    },
    {
      id: 3,
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      title: "Вице-чемпионка мира по народным танцам",
    },
    {
      id: 4,
      icon: <Trophy className="h-6 w-6 text-amber-500" />,
      title: "Чемпионка России по Диско",
    },
    {
      id: 5,
      icon: <Star className="h-6 w-6 text-amber-500" />,
      title: "Участница шоу «Песни на ТНТ»",
    },
    {
      id: 6,
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Участница Международного фонда Владимира Спивакова",
    },
    {
      id: 7,
      icon: <Star className="h-6 w-6 text-amber-500" />,
      title: "Участница шоу «Минута Славы»",
    },
    {
      id: 8,
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Наставник проекта «Большие девочки» на телеканале Пятница",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-4">Достижения</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мои главные творческие и профессиональные достижения
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-lg font-semibold ml-3">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
