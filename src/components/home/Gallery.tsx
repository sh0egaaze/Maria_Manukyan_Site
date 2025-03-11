
const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/lovable-uploads/3340212b-4915-4826-aed6-b52def2d79e3.png",
      alt: "Мария Манукян - танцы",
      category: "dance"
    },
    {
      id: 2,
      src: "/lovable-uploads/6d2eb5a1-6540-40af-acf7-2cf145039a56.png",
      alt: "Мария Манукян - моделинг",
      category: "modeling"
    },
    {
      id: 3,
      src: "/lovable-uploads/e378ab35-1fb7-43fb-abf2-73631084148e.png",
      alt: "Мария Манукян - моделинг",
      category: "modeling"
    },
    {
      id: 4,
      src: "/lovable-uploads/2846107a-f589-4e08-8d89-4535d14a73b1.png",
      alt: "Мария Манукян - танцы",
      category: "dance"
    },
    {
      id: 5,
      src: "/lovable-uploads/0a5224e2-b9cf-45bf-886d-60458a32e8a4.png",
      alt: "Мария Манукян - выступление",
      category: "vocal"
    },
    {
      id: 6,
      src: "/lovable-uploads/beeef9f9-9c48-40be-9ea6-83270411957c.png",
      alt: "Мария Манукян - фото",
      category: "modeling"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-4">Галерея</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Избранные фотографии из моего портфолио
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md animate-scale">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover transition-all duration-500 hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
