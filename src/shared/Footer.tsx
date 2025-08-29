import { Button } from "@/shared/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Twitter, Youtube, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darker-bg border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Edição Pro</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforme fotos simples em cenários profissionais usando IA. A revolução da fotografia de produtos.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Curso */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Curso</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Conteúdo Completo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Templates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bônus Exclusivos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Garantia</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Email</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Comunidade</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Novidades</h3>
            <p className="text-muted-foreground mb-4">
              Receba dicas exclusivas e updates do curso.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Seu email" 
                className="bg-dark-card border-border focus:border-primary"
              />
              <Button size="sm" className="bg-gradient-primary hover:shadow-glow shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Edição Pro. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;