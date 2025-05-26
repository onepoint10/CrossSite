import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/images/circuit-pattern.svg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Промышленная автоматизация и производство технологического оборудования
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Инжиниринговая компания с большим опытом работы в области промышленной автоматизации и связи, а также техобслуживания промышленных и добывающих объектов.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/products" 
                className="px-6 py-3 bg-white text-blue-800 font-medium rounded-md hover:bg-blue-50 transition-colors shadow-lg"
              >
                Наша продукция
              </a>
              <a 
                href="/contacts" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Связаться с нами
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img 
                src="/images/hero-image.jpg" 
                alt="Промышленная автоматизация" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-lg font-semibold">Надежный партнер с картой выполненных работ по всей России</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Разработка АСУ-ТП</h3>
            <p className="text-blue-100">Комплексное проектирование АСУ ТП и систем интеллектуального мониторинга и управления.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Производство оборудования</h3>
            <p className="text-blue-100">Проектирование и производство технологического оборудования, от шкафов телемеханики до испытательных стендов.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Техническое сопровождение</h3>
            <p className="text-blue-100">Техническое сопровождение систем, сервисное и гарантийное обслуживание.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
