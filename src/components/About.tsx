import { GraduationCap, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our Journey Together
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            The KOSA 2003 Batch represents more than just a group of students who graduated together. 
            We are a family forged through shared experiences at Kasipe Memorial International School. 
            From our first nervous days in the classroom to our triumphant graduation ceremony, 
            we've grown together, supported each other, and created memories that continue to shape who we are today.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-4 p-6 rounded-2xl bg-card border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-card-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                Dedicated to academic achievement and personal growth throughout our journey
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-card border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-card-foreground">Unity</h3>
              <p className="text-muted-foreground">
                Building lasting friendships and supporting each other through every challenge
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-card border border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-card-foreground">Legacy</h3>
              <p className="text-muted-foreground">
                Creating a positive impact and maintaining our bonds for generations to come
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
