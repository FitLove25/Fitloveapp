import React from 'react';
import ScrollLink from './utils/ScrollLink';

const CoupleCard = ({ 
  image, 
  testimonial, 
  names, 
  ages, 
  weightLoss, 
  days 
}: {
  image: string;
  testimonial: string;
  names: string;
  ages: string;
  weightLoss: string;
  days: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={names} 
          className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-600 italic mb-4">
          "{testimonial}"
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-800">{names}</p>
            <p className="text-gray-500 text-sm">{ages}</p>
          </div>
          <div className="text-center">
            <p className="text-red-600 font-bold text-3xl">{weightLoss}</p>
            <p className="text-gray-500 text-sm">{days}</p>
            <p className="text-xs text-gray-400">Resultado do casal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoupleStories = () => {
  return (
    <section className="py-20 bg-orange-50" id="couple-stories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Casais transformados</h2>
          <p className="text-xl text-gray-600">
            Histórias reais de pessoas que transformaram seus corpos e relacionamentos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Couple 1 */}
          <CoupleCard 
            image="https://images.pexels.com/photos/3767396/pexels-photo-3767396.jpeg?auto=compress&cs=tinysrgb&w=1600"
            testimonial="Em apenas 30 dias, perdemos juntos 4kg e resgatamos aquela sintonia que tínhamos no início. Os treinos são divertidos e os desafios trouxeram uma nova energia para o nosso relacionamento."
            names="Marcos e Juliana"
            ages="38 e 35 anos"
            weightLoss="-4kg"
            days="Em 30 dias"
          />
          
          {/* Couple 2 */}
          <CoupleCard 
            image="https://i.pinimg.com/736x/47/fe/4c/47fe4cf7e61b8984dd7912e490e1c4ff.jpg"
            testimonial="Procurávamos algo que pudéssemos fazer juntas, e o FITLOVE foi perfeito. Além de nos aproximar, nos ajudou a criar uma rotina saudável sem precisar de academia. Perdemos 5kg juntas em 30 dias!"
            names="Renata e Camila"
            ages="42 e 40 anos"
            weightLoss="-5kg"
            days="Em 30 dias"
          />
          
          {/* Couple 3 */}
          <CoupleCard 
            image="https://i.pinimg.com/736x/17/e6/d1/17e6d1f2aae7780e91463f3292412089.jpg"
            testimonial="Depois de 15 anos juntos, estávamos em uma rotina monótona. O FITLOVE não só nos ajudou a perder 3kg em um mês, mas também trouxe de volta aquele frio na barriga que sentíamos no início."
            names="André e Paula"
            ages="45 e 43 anos"
            weightLoss="-3kg"
            days="Em 30 dias"
          />
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl font-bold text-gray-800 mb-6">
            Junte-se a +800 casais que já transformaram seus corpos e relacionamentos
          </p>
          <ScrollLink to="offer">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              QUERO TRANSFORMAR MEU RELACIONAMENTO
            </button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default CoupleStories;