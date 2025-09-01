import { Hero1 } from './components/Hero1';

const BibliotecaTemplate = () => {
  return (
    <div className="theme-biblioteca min-h-screen bg-background">
      {/* Header */}
      <div className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-foreground mb-4">
            📚 Biblioteca de Componentes
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Hero1 - Componente principal para personal branding
          </p>
        </div>
      </div>

      <Hero1 
        domain="biblioteca.dev"
        handle="@biblioteca"
        instagramUrl="https://instagram.com/exemplo"
        facebookUrl="https://facebook.com/exemplo"
      />

      {/* Status */}
      <div className="py-8 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-lg p-6 shadow-md text-center border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              ✅ Sistema CSS Variables
            </h3>
            <p className="text-muted-foreground">
              Hero1 adaptável usando CSS Variables
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibliotecaTemplate;
