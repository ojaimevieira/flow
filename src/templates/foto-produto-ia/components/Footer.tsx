export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400">Foto IA Pro</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando empreendedores com fotos profissionais criadas por Inteligência Artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.358-.72-.358-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Início</a></li>
              <li><a href="#method" className="hover:text-emerald-400 transition-colors">O Método</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Depoimentos</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Preços</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Suporte</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Área do Aluno</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Garantia</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contato</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>contato@fotoiapro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Foto IA Pro. Todos os direitos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Política de Reembolso
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-gray-500 text-xs leading-relaxed">
            <p className="mb-2">
              <strong>Aviso Legal:</strong> Os resultados apresentados são baseados em casos reais de alunos, 
              mas podem variar conforme dedicação e aplicação do método. Não garantimos resultados específicos.
            </p>
            <p>
              <strong>Suporte:</strong> Este produto é vendido pelo site oficial. 
              Para dúvidas sobre pagamento, acesso ou reembolso, entre em contato através dos canais oficiais.
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20curso%20Foto%20IA%20Pro"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-3"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="hidden md:block font-medium">Fale Conosco</span>
        </a>
      </div>
    </footer>
  );
}
