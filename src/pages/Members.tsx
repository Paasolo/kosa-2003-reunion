import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigate = useNavigate();

  const members = [
    "ABIBA KAMAGATEY",
    "ABUU KAMAGATEY",
    "ADESHEYI JOHN",
    "ADJETEY",
    "ADWOA ADJEIWAA",
    "AGYA MORO",
    "ALBERT KUSI",
    "ALICE OWUSUAA",
    "AMADU MUSAH",
    "BINTU MAHAMA",
    "BUABENG EBENEZER",
    "CECILIA NKRUMAH",
    "CHARLES",
    "CLEMENT OSEI",
    "DANIEL KOSONO",
    "DERRICK",
    "EBENEZER ODUOLA",
    "ELIZABETH",
    "EMMANUEL ADINKRAH",
    "ESTHER ADINKRAH",
    "EVANS AMOH",
    "FATI ISSAH",
    "FAUSTINA ADINKRAH",
    "FISATU",
    "GERALD MENSAH",
    "HAGA",
    "HAJIA FATI ALI",
    "IVY SAWIRI",
    "JULIANA OBENG",
    "JULIUS OLADOKUN",
    "JUSTICE OBOUR",
    "KASSUM MARIAMA",
    "KOOSONO GABRIEL",
    "LINDA",
    "LUCKMAN",
    "LUIS TAKYI",
    "MAAME STELLA",
    "MAAME U (EUNICE)",
    "MAMA HAWA NUHU",
    "MARY ACHEAMPOMAA",
    "MATILDA ANANE",
    "MEMUNA ALI",
    "MOHAMMED ALI",
    "MUMUNI ADAMA",
    "MUSAH MUHAMMED",
    "MUTIU AREMU",
    "NAFIU AREMU",
    "NIKE ARE",
    "ASHETU MAMUDU (NINA)",
    "OKYERE EBENEZER",
    "PATRICIA ADJEI",
    "PATRICK AKOI",
    "PATRICK NYAME",
    "RAHINATU ISSAH",
    "SALA MAHAMA",
    "SAMPSON SIE",
    "SAMUEL OBENG",
    "SANISCO JERRY",
    "SASAH WIREDU",
    "SHANDERITA FRIMPOMAA",
    "SIATA AMADU",
    "SISCO ALHASSAN",
    "SOLOMON ANSU",
    "TATINO",
    "TAYO ABOKADE",
    "TAWIAH ANDREWS",
    "TONY NYAME",
    "YEBOAH",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground py-16 px-4">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            KOSA 2003 BATCH Members
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            {members.length} members who completed together
          </p>
        </div>
      </header>

      {/* Members List */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <p className="text-foreground font-semibold text-center">
                  {member}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
