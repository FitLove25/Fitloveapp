import React from 'react';
import { Flame } from 'lucide-react';
import ScrollLink from './utils/ScrollLink';

const Difference = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100" id="difference">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Por que o FITLOVE vai mudar sua vida?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sinta seu coração bater mais forte, seu corpo se transformar e a paixão reacender com um método criado para casais que desejam redescobrir o desejo, a cumplicidade e a confiança — tudo isso com prazer, leveza e amor.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Toques que Transformam</h3>
            <p className="text-gray-600 text-center">
              Movimentos sensuais que derretem calorias e derretem corações, trazendo vocês mais perto, reacendendo a chama e fortalecendo cada abraço, cada olhar, cada momento a dois.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Desafios que Unem Almas</h3>
            <p className="text-gray-600 text-center">
              Missões diárias secretas, pensadas para reacender aquela faísca que fez vocês se apaixonarem. Crie memórias quentes, risadas compartilhadas e noites que vocês nunca vão esquecer.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Sabores que Despertam</h3>
            <p className="text-gray-600 text-center">
              Receitas afrodisíacas que aquecem o corpo e a alma. Pratos simples, deliciosos e cheios de energia para alimentar a libido, a vitalidade e o prazer de estarem juntos.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Um Refúgio Só de Vocês</h3>
            <p className="text-gray-600 text-center">
              Faça parte de um clube secreto, 100% anônimo, onde iremos compartilhar conteúdos exclusivos.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ScrollLink to="offer">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              QUERO SENTIR ESSA PAIXÃO E MUDANÇA AGORA!
            </button>
          </ScrollLink>
          <p className="text-gray-600 mt-4">
            Acesso imediato. Garantia total de 30 dias ou seu dinheiro de volta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Difference;
