import React from 'react';
import { motion } from 'framer-motion';

const SpecificationsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши решения</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем комплексные решения для различных отраслей промышленности
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/solution-automation.jpg" 
                alt="Промышленная автоматизация" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Промышленная автоматизация</h3>
              <p className="text-gray-600 mb-6">
                АСУ ТП, системы мониторинга и управления, системы телемеханики, производство модулей, шкафов управления, изготовление и программирование контроллеров, разработка промышленного программного обеспечения.
              </p>
              <a 
                href="/solutions/industrial-automation" 
                className="inline-block px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Подробнее
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/solution-software.jpg" 
                alt="Программное обеспечение" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Программное обеспечение</h3>
              <p className="text-gray-600 mb-6">
                Наша компания - надежный разработчик программного обеспечения высокого качества. Мы создаем код, используя различные технологии и языки программирования для решения задач промышленной автоматизации.
              </p>
              <a 
                href="/solutions/software" 
                className="inline-block px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Подробнее
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/solution-oil.jpg" 
                alt="Нефтедобыча" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Нефтедобыча</h3>
              <p className="text-gray-600 mb-6">
                Решения для автоматизации процессов нефтедобычи, включая системы мониторинга и управления нефтяными скважинами, системы поддержания пластового давления и другие специализированные решения.
              </p>
              <a 
                href="/solutions/oil-production" 
                className="inline-block px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Подробнее
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/solution-energy.jpg" 
                alt="Энергосбережение" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Энергосбережение</h3>
              <p className="text-gray-600 mb-6">
                Технологии и решения для оптимизации энергопотребления и повышения энергоэффективности промышленных объектов и технологических процессов.
              </p>
              <a 
                href="/solutions/energy-saving" 
                className="inline-block px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Подробнее
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
