import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white">
      {/* Logo no topo */}
      <div className="absolute top-6 left-0 right-0 flex justify-center z-20">
        <img 
          src="https://fitlove.online/wp-content/uploads/2025/05/FitLove-400-x-400-px-1.png" 
          alt="Logo FitLove"
          className="h-16 w-auto"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto principal */}
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

            <div className="mt-12 flex flex-col items-center md:items-start space-y-4">
              <p className="text-base text-red-300 font-semibold animate-pulse">
                Os próximos 2 minutos de leitura vão mudar a sua vida sexual.
              </p>
            </div>
          </div>

          {/* Imagem lateral */}
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
