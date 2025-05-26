import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Изготовление на заказ',
      description: 'Изготовление металлоизделий, промышленных установок и деталей. Элементы из листового металла, резка и гибка металла любой сложности.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Разработка АСУ-ТП',
      description: 'Комплексное проектирование АСУ ТП и систем интеллектуального мониторинга и управления, включая разработку систем мониторинга и управления, систем телемеханики, производство модулей, шкафов управления и т.д.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Проектирование и производство оборудования',
      description: 'Проектирование и производство технологического оборудования, от шкафов телемеханики и пультов управления до испытательных стендов.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Разработка проектной и конструкторской документации',
      description: 'Разработка проектной и конструкторской документации для различных промышленных систем и оборудования.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Разработка программного обеспечения',
      description: 'Разработка программного обеспечения высокого качества для промышленной автоматизации и управления технологическими процессами.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Пуско-наладка и сервисное обслуживание',
      description: 'Сервисное и гарантийное обслуживание объектов автоматизации, обучение и стажировка персонала, техническое сопровождение систем.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
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
              Наши услуги
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Полный спектр услуг в области создания интеллектуальных автоматизированных систем
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Наши услуги и возможности</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Manufacturing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Изготовление на заказ</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Металлоизделия и промышленные установки</h3>
                  <p className="text-gray-700 mb-6">
                    Наша компания предлагает услуги по изготовлению металлоизделий, промышленных установок и деталей по индивидуальным требованиям заказчика. Мы обеспечиваем высокое качество и точность изготовления, а также соблюдение всех технических требований.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Изготовление элементов из листового металла</li>
                    <li>Резка и гибка металла любой сложности</li>
                    <li>Производство нестандартного оборудования</li>
                    <li>Изготовление металлоконструкций</li>
                    <li>Производство деталей машин и механизмов</li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/custom-manufacturing.jpg" 
                    alt="Изготовление на заказ" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Разработка программного обеспечения</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/software-development.jpg" 
                    alt="Разработка программного обеспечения" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Промышленное программное обеспечение</h3>
                  <p className="text-gray-700 mb-6">
                    Мы разрабатываем программное обеспечение высокого качества для промышленной автоматизации и управления технологическими процессами. Наши решения отличаются надежностью, эффективностью и удобством использования.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Разработка SCADA-систем</li>
                    <li>Программирование ПЛК</li>
                    <li>Создание человеко-машинных интерфейсов (HMI)</li>
                    <li>Разработка систем сбора и анализа данных</li>
                    <li>Интеграция с существующими системами</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/products/software" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Подробнее о программном обеспечении
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
            <h2 className="text-3xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Свяжитесь с нами, чтобы получить консультацию и узнать, как мы можем помочь в реализации ваших задач
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contacts" 
                className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors"
              >
                Связаться с нами
              </Link>
              <Link 
                to="/about" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                О компании
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
