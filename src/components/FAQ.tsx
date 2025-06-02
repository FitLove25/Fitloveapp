import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-red-500 text-xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div className={`mt-2 text-gray-600 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "Preciso ter experiência prévia com exercícios?",
      answer: "Não! O programa FITLOVE foi desenvolvido para todos os níveis, inclusive iniciantes. Os exercícios são simples, progressivos e têm variações para diferentes níveis de condicionamento físico."
    },
    {
      question: "O FITLOVE é seguro e anônimo?",
      answer: "Absolutamente! Respeitamos totalmente sua privacidade. A plataforma é segura e o acesso à comunidade é anônimo. Você pode usar pseudônimos e participar apenas das interações com as quais se sentir confortável."
    },
    {
      question: "Funciona para casais homo ou heterossexuais?",
      answer: "Sim! O FITLOVE foi criado para todos os casais, independente de orientação sexual. Nossos exercícios, desafios e dicas são adaptáveis e inclusivos para todas as relações."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Apenas 10-15 minutos diários são suficientes para seguir o programa. Os exercícios são curtos e intensos, e os desafios são projetados para se encaixarem facilmente na rotina mais ocupada."
    },
    {
      question: "Preciso de equipamentos especiais?",
      answer: "Não! O FITLOVE foi projetado para ser feito em casa, sem necessidade de equipamentos. Usamos apenas o peso corporal e, ocasionalmente, itens comuns que você já tem em casa."
    },
    {
      question: "E se eu não gostar do programa?",
      answer: "Oferecemos garantia de 7 dias. Se você experimentar o FITLOVE e sentir que não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem perguntas."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre o FITLOVE
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ainda tem dúvidas? Estamos aqui para ajudar!</p>
            <a 
              href="mailto:sac.fitlove@gmail.com" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;