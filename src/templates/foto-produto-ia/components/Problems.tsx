export default function Problems() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          {/* Main Problem Statement */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white">
              SEUS PRODUTOS ESTÃO
              <span className="block text-red-400">PERDENDO VENDAS</span>
              <span className="block text-white">POR CAUSA DAS FOTOS</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="text-6xl">📱</div>
                    <h3 className="text-xl font-bold text-red-400">Foto de Celular</h3>
                    <p className="text-gray-300">Mesa da cozinha, luz ruim, fundo bagunçado</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-6xl">👎</div>
                    <h3 className="text-xl font-bold text-red-400">Cliente Desconfia</h3>
                    <p className="text-gray-300">Parece amador, não transmite qualidade</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-6xl">💸</div>
                    <h3 className="text-xl font-bold text-red-400">Vendas Perdidas</h3>
                    <p className="text-gray-300">Concorre só por preço, margem baixa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Agitation */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Você trabalha duro, faz produtos incríveis, mas suas vendas não decolam...
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-red-400 mb-6">A VERDADE DOLOROSA:</h3>
              <ul className="space-y-4 text-left text-lg text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>O problema não é seu produto - são as <strong className="text-white">FOTOS</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>Cliente compra primeiro com os <strong className="text-white">OLHOS</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>Concorrentes vendem produtos PIORES por fotos <strong className="text-white">MELHORES</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>Você perde <strong className="text-white">R$ 500+</strong> por dia com fotos que não convertem</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pain Points */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">😞</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">Vergonha das Fotos</h3>
              <p className="text-gray-400">Você mesmo sabe que suas fotos não estão boas</p>
            </div>
            
            <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">Fotógrafo Caro</h3>
              <p className="text-gray-400">R$ 500+ por sessão que você não tem</p>
            </div>
            
            <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">Tempo Perdido</h3>
              <p className="text-gray-400">Horas tentando fazer uma foto decente</p>
            </div>
          </div>

          {/* Transition to Solution */}
          <div className="mt-16 space-y-6">
            <h3 className="text-3xl font-bold text-emerald-400">
              MAS E SE EU TE DISSESSE QUE...
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Existe uma forma de criar fotos profissionais que multiplicam vendas,
              <span className="text-emerald-400 font-bold"> sem fotógrafo e sem estúdio?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
