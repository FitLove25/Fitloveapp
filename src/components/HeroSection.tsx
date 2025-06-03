import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/736x/57/18/37/5718377966d13c3c0550adadc2d419ba.jpg" 
          alt="Casal FITLOVE" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Emagreça Fazendo Sexo e Reacenda a Paixão no Seu Relacionamento!
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 animate-fade-in-delay">
              Queime até 600 calorias por dia e transforme seu corpo — e sua cama — em apenas 21 dias!
            </h2>

            <ul className="space-y-3 text-lg font-medium">
              <li>💋 Sim, é possível emagrecer com prazer.</li>
              <li>❤️‍🔥 Sim, é possível voltar a sentir desejo.</li>
              <li>💪 E sim, tudo isso pode começar hoje mesmo — ao lado de quem você ama.</li>
            </ul>

            <div className="mt-12 flex items-center justify-center md:justify-start space-x-2">
              <div className="h-0.5 w-12 bg-red-400"></div>
              <p className="text-lg font-medium">Temos uma surpresa ao final da página!</p>
              <div className="h-0.5 w-12 bg-red-400"></div>
            </div>
          </div>

          {/* Right-side image */}
          <div className="w-full">
            <img 
              src="https://i.pinimg.com/736x/08/2d/43/082d43e3ad59418723f4bb37f89a4c11.jpg" 
              alt="Casal Transformado" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
