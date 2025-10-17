import memory1 from "@/assets/memories-1.jpg";
import memory2 from "@/assets/memories-2.jpg";
import memory3 from "@/assets/memories-3.jpg";

const Memories = () => {
  const memories = [
    {
      image: memory1,
      title: "Graduation Day",
      description: "The proudest moment of our journey together"
    },
    {
      image: memory2,
      title: "Study Sessions",
      description: "Late nights and shared knowledge"
    },
    {
      image: memory3,
      title: "Sports Day",
      description: "Competition, teamwork, and celebration"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Treasured Memories
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moments that defined us, experiences that bonded us, and memories that will last forever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair text-2xl font-bold mb-2">{memory.title}</h3>
                    <p className="text-primary-foreground/90">{memory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
