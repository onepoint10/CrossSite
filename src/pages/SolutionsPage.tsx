import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 1,
      title: 'Промышленная автоматизация',
      description: 'АСУ ТП, системы мониторинга и управления, системы телемеханики, производство модулей, шкафов управления, изготовление и программирование контроллеров, разработка промышленного программного обеспечения.',
      image: '/images/solution-automation.jpg',
      link: '/solutions/industrial-automation'
    },
    {
      id: 2,
      title: 'Программное обеспечение',
      description: 'Наша компания - надежный разработчик программного обеспечения высокого качества. Мы создаем код, используя различные технологии и языки программирования для решения задач промышленной автоматизации.',
      image: '/images/solution-software.jpg',
      link: '/solutions/software'
    },
    {
      id: 3,
      title: 'Нефтедобыча',
      description: 'Решения для автоматизации процессов нефтедобычи, включая системы мониторинга и управления нефтяными скважинами, системы поддержания пластового давления и другие специализированные решения.',
      image: '/images/solution-oil.jpg',
      link: '/solutions/oil-production'
    },
    {
      id: 4,
      title: 'Энергосбережение',
      description: 'Технологии и решения для оптимизации энергопотребления и повышения энергоэффективности промышленных объектов и технологических процессов.',
      image: '/images/solution-energy.jpg',
      link: '/solutions/energy-saving'
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Наши решения
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Комплексные решения для различных отраслей промышленности
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Отраслевые решения</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <Link 
                        to={solution.link} 
                        className="inline-block px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700 transition-colors"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial Automation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Промышленная автоматизация</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Системы управления технологическими процессами</h3>
                  <p className="text-gray-700 mb-6">
                    Мы разрабатываем и внедряем современные системы управления технологическими процессами, которые обеспечивают высокую эффективность и надежность производства. Наши решения включают в себя:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Автоматизированные системы управления технологическими процессами (АСУ ТП)</li>
                    <li>Системы мониторинга и управления</li>
                    <li>Системы телемеханики</li>
                    <li>Производство модулей и шкафов управления</li>
                    <li>Программирование контроллеров</li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/industrial-automation.jpg" 
                    alt="Системы управления технологическими процессами" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Oil Production Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Нефтедобыча</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/oil-production.jpg" 
                    alt="Решения для нефтедобычи" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Решения для нефтедобывающей отрасли</h3>
                  <p className="text-gray-700 mb-6">
                    Наша компания предлагает специализированные решения для автоматизации процессов нефтедобычи, которые помогают повысить эффективность и безопасность производства:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Системы мониторинга и управления нефтяными скважинами</li>
                    <li>Системы поддержания пластового давления</li>
                    <li>Испытательное оборудование для нефтедобывающей отрасли</li>
                    <li>Системы телеметрии для погружного оборудования</li>
                    <li>Автоматизированные системы управления КНС</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/solutions/oil-production" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Подробнее о решениях для нефтедобычи
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужно индивидуальное решение?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Мы разрабатываем комплексные решения под конкретные задачи и требования заказчика
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contacts" 
                className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors"
              >
                Связаться с нами
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
