const Stats = () => {
  const stats = [
    { number: "20+", label: "Years of Friendship" },
    { number: "100+", label: "Batch Members" },
    { number: "5", label: "Reunions Held" },
    { number: "∞", label: "Memories Created" },
  ];

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="font-playfair text-4xl md:text-6xl font-bold text-secondary">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
