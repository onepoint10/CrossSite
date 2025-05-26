import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const products = [
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
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наша продукция</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем широкий спектр оборудования для промышленной автоматизации, испытаний и фасовки
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a 
                  href={product.link} 
                  className="inline-block px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700 transition-colors"
                >
                  Подробнее
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/products" 
            className="inline-block px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium rounded-md hover:bg-blue-800 hover:text-white transition-colors"
          >
            Смотреть все продукты
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
