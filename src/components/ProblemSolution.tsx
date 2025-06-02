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
              <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-400 pb-3">PROBLEMA</h3>
              <p className="text-lg mb-6 text-gray-700">
                Você e seu parceiro estão presos na mesmice? Quilos extras, desejo apagado, noites sem graça? A maioria dos casais sofre com:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✕</span>
                  <span className="text-gray-700">Sem tempo para academia ou dietas complicadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✕</span>
                  <span className="text-gray-700">Cansaço e desânimo que matam a conexão</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✕</span>
                  <span className="text-gray-700">Intimidade zero e autoestima no chão</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-xl">✕</span>
                  <span className="text-gray-700">Frustração com o corpo e a relação</span>
                </li>
              </ul>
            </div>
            
            {/* Solution Section */}
            <div className="bg-gradient-to-br from-red-500 to-orange-400 rounded-2xl shadow-xl p-8 text-white transform transition duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold mb-6 border-b-2 border-white/30 pb-3">SOLUÇÃO</h3>
              <p className="text-lg mb-6">
                FITLOVE é o segredo que une prazer, saúde e paixão em um método exclusivo! Você receberá:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-xl">✓</span>
                  <span>Treinos sensuais que queimam até 700 kcal e aquecem a química entre vocês</span>
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
                "Sem suor chato, sem dietas sem graça. Apenas vocês dois, reacendendo a paixão e esculpindo o corpo que sempre sonharam."
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