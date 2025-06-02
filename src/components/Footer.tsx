import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold text-red-500 mb-2">FITLOVE</h2>
              <p className="text-gray-300 max-w-xs">
                Transformando casais através de saúde, bem-estar e reconexão emocional.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-4">FALE CONOSCO:</p>
              <a 
                href="mailto:sac.fitlove@gmail.com" 
                className="text-red-400 hover:text-red-300 transition duration-300"
              >
                sac.fitlove@gmail.com
              </a>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} FITLOVE. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;