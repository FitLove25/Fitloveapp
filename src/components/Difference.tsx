import React from 'react';
import { Flame } from 'lucide-react';
import ScrollLink from './utils/ScrollLink';

const Difference = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100" id="difference">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Por que FITLOVE é Diferente?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme seu corpo e sua relação com um método feito para casais que querem resultados rápidos e prazer garantido.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Técnicas Sensuais</h3>
            <p className="text-gray-600 text-center">
              Exercícios que queimam calorias e aquecem a relação, com movimentos que fortalecem a conexão e o desejo.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Desafios semanais</h3>
            <p className="text-gray-600 text-center">
              Missões secretas para reacender a paixão e criar momentos inesquecíveis a dois, todos os dias.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Cardápio Afrodisíaco</h3>
            <p className="text-gray-600 text-center">
              Receitas simples e irresistíveis que aumentam a energia, a libido e o prazer.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Flame size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Clube Secreto de Casais</h3>
            <p className="text-gray-600 text-center">
              Junte-se a uma comunidade VIP 100% anônima, onde iremos compartilhar conteúdos exclusivos.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ScrollLink to="offer">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              QUERO ESSA TRANSFORMAÇÃO HOJE!
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