import React from 'react';

const Offer = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-red-600 to-red-700 text-white" id="offer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Reacenda Sua Paixão e Esculpa Seu Corpo HOJE!</h2>
            <p className="text-xl font-medium animate-pulse">
              Apenas 50 vagas disponíveis para a próxima turma secreta!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-3">
                O Que Você Recebe:
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <div>
                    <span className="font-bold">Programa FITLOVE Completo:</span>
                    <p className="text-white/80">21 dias de treinos, desafios e cardápios afrodisíacos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <div>
                    <span className="font-bold">Bônus Exclusivos:</span>
                    <p className="text-white/80">Guia Secreto de Massagens Sensuais</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <div>
                    <span className="font-bold">App Secreto:</span>
                    <p className="text-white/80">Acompanhe tudo pelo celular, onde estiver</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <div>
                    <span className="font-bold">Clube VIP Anônimo:</span>
                    <p className="text-white/80">Conecte-se com casais que estão na mesma vibe</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <div>
                    <span className="font-bold">Suporte 24/7:</span>
                    <p className="text-white/80">Tire dúvidas com nossa equipe de especialistas</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
              <div className="text-gray-500 mb-4 line-through">
                Valor Normal: <span className="font-bold">R$ 197,00</span>
              </div>
              
              <div className="mb-6">
                <div className="text-red-600 text-xl font-bold">Oferta Imperdível:</div>
                <div className="text-gray-800 text-4xl font-bold mb-2">R$ 19,90</div>
                <div className="text-gray-600">ou 12x de R$ 1,90</div>
              </div>
              
              <a 
                href="https://payment.ticto.app/O5ABBEF47" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 animate-pulse"
              >
                COMPRAR AGORA
              </a>
              
              <div className="mt-6 text-gray-600 text-sm">
                Acesso imediato. Garantia de 30 dias. Pagamento 100% seguro.
              </div>
              
              <div className="mt-6">
                <img 
                  src="https://raullivros.com.br/loja/image/catalog/demo/forma-de-pagamento-grande.png" 
                  alt="Métodos de pagamento" 
                  className="w-full max-w-xs mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;