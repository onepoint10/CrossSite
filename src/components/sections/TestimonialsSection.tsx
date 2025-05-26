import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Стенд тестирования блоков погружной телеметрии',
      client: 'ООО "РН-Ремонт НПО"',
      description: 'Разработка и поставка стенда для тестирования блоков погружной телеметрии, обеспечивающего полный цикл испытаний оборудования.',
      image: '/images/project-telemetry.jpg'
    },
    {
      id: 2,
      title: 'Комплексная поставка оборудования для испытания блоков ТМСП И ТМСН',
      client: 'ООО "Борец-Муравленко"',
      description: 'Разработка и поставка комплексного оборудования для испытания блоков термо-манометрических систем, включая стенды для проверки герметичности.',
      image: '/images/project-tmsp.jpg'
    },
    {
      id: 3,
      title: 'Автоматизированная система управления КНС',
      client: 'Нефтедобывающая компания',
      description: 'Внедрение распределенной пятиуровневой системы для автоматизации управления технологическими процессами насосных станций.',
      image: '/images/project-kns.jpg'
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Надежный партнер с картой выполненных работ по всей России
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-300 text-sm mb-4">Клиент: {project.client}</p>
                <p className="text-blue-100 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/gallery" 
            className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-900 transition-colors"
          >
            Смотреть все проекты
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
