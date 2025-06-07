import React from 'react';
import ScrollLink from './utils/ScrollLink';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gray-50" id="problem-solution">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Problem Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-400 pb-3">Está difícil se olhar no espelho?</h3>
              <p className="text-lg mb-6 text-gray-700">
               As roupas não servem mais como antes, o corpo já não responde, e o pior...
 O desejo sumiu. A conexão esfriou. A cama virou um lugar de sono — não de prazer. 
Se você sente que:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✕</span>
                  <span className="text-gray-700">Vocês se distanciaram emocionalmente e fisicamente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✕</span>
                  <span className="text-gray-700">Seu peso virou um problema na autoestima e na relação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✕</span>
                  <span className="text-gray-700">O sexo ficou raro (ou mecânico)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✓</span>
                  <span className="text-gray-700">Saiba que vocês não estão sozinhos.</span>
                </li>
              </ul>
            </div>
            
            {/* Solution Section */}
            <div className="bg-gradient-to-br from-red-500 to-orange-400 rounded-2xl shadow-xl p-8 text-white transform transition duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold mb-6 border-b-2 border-white/30 pb-3">Existe uma maneira divertida, gostosa e real de virar esse jogo:
</h3>
              <p className="text-lg mb-6">
                 EMAGRECER FAZENDO SEXO! Apresentamos o Método FitLove.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <span>Um programa de 21 dias que une saúde, tesão e conexão.
</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <span>Desafios quentes que reacendem a chama em dias</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <span>Cardápio afrodisíaco que dispara sua energia e libido</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <span>Comunidade secreta 100% anônima para casais como você</span>
                </li>
              </ul>
              
              <p className="mt-6 text-lg italic border-l-4 pl-4 border-white/50">
                "Nada de dietas restritivas ou treinos entediantes. É você, seu amor e um novo corpo reacendendo a paixão."
              </p>
              
              <div className="mt-8 text-center">
                <ScrollLink to="offer">
                  <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
                    QUERO REACENDER MINHA PAIXÃO AGORA!
                  </button>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
