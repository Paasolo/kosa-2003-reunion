const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
              KOSA 2003 BATCH
            </h3>
            <p className="text-secondary text-sm md:text-base">
              Kasipe Memorial International School
            </p>
          </div>
          
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} KOSA 2003 Batch. Celebrating 20+ years of friendship and memories.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
