import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Kasipe Memorial International School" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-4">
              <p className="text-secondary font-semibold tracking-wider">EST. 2003</p>
            </div>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight">
              KOSA 2003 BATCH
            </h1>
            <p className="font-playfair text-2xl md:text-3xl text-secondary italic">
              Kasipe Memorial International School
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Celebrating two decades of friendship, growth, and shared memories. 
            Together we learned, laughed, and built bonds that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/members')}
              className="group font-semibold shadow-glow"
            >
              <Users className="mr-2 h-5 w-5" />
              View Members
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold backdrop-blur-sm"
            >
              Our Story
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
