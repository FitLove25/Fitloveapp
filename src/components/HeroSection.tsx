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
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
             Emagreça Fazendo Sexo e Reacenda a Paixão no Seu Relacionamento! 
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-8 animate-fade-in-delay">
            Perca peso, reacenda o desejo e viva noites inesquecíveis com o método que está revolucionando relacionamentos!
          </h2>
          
        
          
          <div className="mt-12 flex items-center justify-center space-x-2">
            <div className="h-0.5 w-12 bg-red-400"></div>
            <p className="text-lg font-medium">Mais de 800 casais transformados. Você vai ficar fora dessa?</p>
            <div className="h-0.5 w-12 bg-red-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
