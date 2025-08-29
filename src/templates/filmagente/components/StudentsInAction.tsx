import { Badge } from "@/shared/ui/badge";

const StudentsInAction = () => {
  // Simulando fotos de estudantes - na implementação real, essas seriam as imagens reais
  const studentPhotos = [
    { id: 1, src: "/api/placeholder/200/250", alt: "Aluna criando vídeos" },
    { id: 2, src: "/api/placeholder/200/250", alt: "Aluno editando conteúdo" },
    { id: 3, src: "/api/placeholder/200/250", alt: "Estudante gravando" },
    { id: 4, src: "/api/placeholder/200/250", alt: "Aluna apresentando" },
    { id: 5, src: "/api/placeholder/200/250", alt: "Aluno criando roteiro" },
    { id: 6, src: "/api/placeholder/200/250", alt: "Estudante editando" },
    { id: 7, src: "/api/placeholder/200/250", alt: "Aluna produzindo" },
    { id: 8, src: "/api/placeholder/200/250", alt: "Aluno gravando conteúdo" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-darker-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Veja na prática </span>
            <span className="bg-gradient-to-r from-template-primary to-template-secondary bg-clip-text text-transparent">alguns vídeos</span>
            <br />
            <span className="text-foreground">criados com </span>
            <span className="bg-gradient-to-r from-template-secondary to-template-primary bg-clip-text text-transparent">IA mainframe</span>
          </h2>
        </div>

        {/* Students Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {studentPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="aspect-[4/5] bg-gradient-to-br from-template-primary/20 to-template-secondary/20 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <div className="w-full h-full bg-gradient-to-br from-template-primary/30 to-template-secondary/30 flex items-center justify-center relative">
                {/* Placeholder for student photo */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/50 rounded-full"></div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    Aluno FilmAgente
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="text-template-primary font-semibold">Mais de 2.500 pessoas</span> já estão criando vídeos incríveis 
            com IA usando as técnicas do FilmAgente
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentsInAction;
