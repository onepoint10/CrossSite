import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const productCategories = [
    {
      id: 1,
      title: 'Испытательное оборудование',
      description: 'Комплексные и одиночные стенды для проведения полного набора технологических испытаний различных видов изделий.',
      image: '/images/product-testing.jpg',
      link: '/products/testing-equipment'
    },
    {
      id: 2,
      title: 'Автоматика и телемеханика',
      description: 'Оборудование для автоматизации технологических процессов, сбора, передачи и обработки информации в составе интеллектуальных систем.',
      image: '/images/product-automation.jpg',
      link: '/products/automation'
    },
    {
      id: 3,
      title: 'Фасовочное оборудование',
      description: 'Оборудование для фасовки и упаковки различных продуктов и материалов, включая дозирующие клапаны и полуавтоматы серии ПАРК.',
      image: '/images/product-packing.jpg',
      link: '/products/packing'
    },
    {
      id: 4,
      title: 'Программное обеспечение',
      description: 'Разработка программного обеспечения высокого качества для промышленной автоматизации и управления технологическими процессами.',
      image: '/images/product-software.jpg',
      link: '/products/software'
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
              Наша продукция
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Широкий спектр оборудования для промышленной автоматизации, испытаний и фасовки
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Категории продукции</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {productCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <Link 
                        to={category.link} 
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

      {/* Testing Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Испытательное оборудование</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Комплексные испытательные стенды</h3>
                  <p className="text-gray-700 mb-6">
                    Комплексные стенды для проведения полного набора технологических испытаний различных видов изделий. Стенды разрабатываются индивидуально под требования заказчика и могут включать в себя различные модули для проведения специфических испытаний.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Стенды для испытания погружного оборудования</li>
                    <li>Стенды для испытания блоков телеметрии</li>
                    <li>Стенды для проверки герметичности</li>
                    <li>Стенды для проверки электрических параметров</li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/testing-complex.jpg" 
                    alt="Комплексные испытательные стенды" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/testing-single.jpg" 
                    alt="Одиночные испытательные стенды" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Одиночные испытательные стенды</h3>
                  <p className="text-gray-700 mb-6">
                    Специализированные стенды для проведения отдельных видов испытаний. Такие стенды обычно компактнее и экономичнее комплексных, но при этом обеспечивают высокую точность и надежность результатов.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Стенды для калибровки датчиков</li>
                    <li>Стенды для проверки электронных компонентов</li>
                    <li>Стенды для испытания механических узлов</li>
                    <li>Стенды для проверки программного обеспечения</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/products/testing-equipment" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Подробнее об испытательном оборудовании
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
              Мы разрабатываем и производим оборудование по индивидуальным требованиям заказчика
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

export default ProductsPage;
