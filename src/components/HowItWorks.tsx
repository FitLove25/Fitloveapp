import React from 'react';
import ScrollLink from './utils/ScrollLink';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-orange-50" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Como Funciona?</h2>
          <p className="text-xl text-gray-600">
            Três passos para reacender a paixão e transformar seu corpo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative transform transition duration-300 hover:scale-105">
            <div className="absolute -top-6 -left-6 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              01
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 mt-6">Inscreva-se Agora</h3>
            <p className="text-gray-600">
              Acesse a plataforma secreta do FITLOVE imediatamente e descubra o método completo. Acesso liberado em segundos!
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative transform transition duration-300 hover:scale-105">
            <div className="absolute -top-6 -left-6 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              02
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 mt-6">Viva o Desafio</h3>
            <p className="text-gray-600">
              Mergulhe no Desafio FITLOVE 21 Dias, com treinos quentes e missões que vão transformar sua relação. Apenas 10 minutos por dia!
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative transform transition duration-300 hover:scale-105">
            <div className="absolute -top-6 -left-6 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              03
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 mt-6">Sinta a Transformação</h3>
            <p className="text-gray-600">
              Em poucas semanas, veja seu corpo mais leve, sua confiança nas alturas e noites de paixão como nunca antes. Resultados garantidos ou seu dinheiro de volta!
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ScrollLink to="offer">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              COMECE AGORA E SINTA A DIFERENÇA!
            </button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;