import React from 'react';
import ScrollLink from './utils/ScrollLink';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Veja o FITLOVE em ação</h2>
          <p className="text-xl text-gray-600">
            Veja depoimentos de casais reais que transformaram seus corpos e relacionamentos.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">
                      {star}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic text-lg">
                  "O FITLOVE mudou nossa rotina completamente. Estamos mais conectados, 
                  temos mais energia e nossas noites são muito mais especiais agora!"
                </p>
                <p className="font-bold text-gray-800">
                  Carlos e Gabriela, 42 e 38 anos
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://fitlove.online/wp-content/uploads/2025/05/img_0136.png" 
                alt="Casal FITLOVE" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <ScrollLink to="offer">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              Quero Começar Agora →
            </button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;