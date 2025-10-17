import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Upcoming Reunion
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="bg-card border border-border rounded-3xl shadow-elegant overflow-hidden">
            <div className="bg-gradient-hero p-8 text-primary-foreground">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-2">
                20 Years Reunion Celebration
              </h3>
              <p className="text-secondary text-lg">
                Two decades of friendship, memories, and success
              </p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Date</div>
                    <div className="text-muted-foreground">TBA - Coming Soon</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Time</div>
                    <div className="text-muted-foreground">Details to Follow</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">To Be Announced</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground mb-6">
                  Join us for an unforgettable evening of reminiscing, reconnecting, and celebrating 
                  our incredible journey together. More details will be shared soon with all batch members.
                </p>
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-gradient-accent hover:opacity-90 transition-opacity font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Stay Updated
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
