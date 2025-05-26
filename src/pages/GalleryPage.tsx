import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const photoReports = [
    {
      id: 1,
      title: 'Стенд тестирования блоков погружной телеметрии для ООО "РН-Ремонт НПО"',
      description: 'Фотографии стенда для тестирования блоков погружной телеметрии, разработанного и поставленного для ООО "РН-Ремонт НПО".',
      date: '21.01.2025',
      images: [
        '/images/gallery/telemetry-1.jpg',
        '/images/gallery/telemetry-2.jpg',
        '/images/gallery/telemetry-3.jpg',
        '/images/gallery/telemetry-4.jpg',
        '/images/gallery/telemetry-5.jpg',
        '/images/gallery/telemetry-6.jpg',
      ]
    },
    {
      id: 2,
      title: 'Комплексная поставка оборудования для испытания блоков ТМСП И ТМСН для ООО "Борец-Муравленко"',
      description: 'Фотографии комплексной поставки оборудования для испытания блоков ТМСП и ТМСН, разработанного и поставленного для ООО "Борец-Муравленко".',
      date: '15.12.2024',
      images: [
        '/images/gallery/tmsp-1.jpg',
        '/images/gallery/tmsp-2.jpg',
        '/images/gallery/tmsp-3.jpg',
        '/images/gallery/tmsp-4.jpg',
        '/images/gallery/tmsp-5.jpg',
        '/images/gallery/tmsp-6.jpg',
      ]
    },
    {
      id: 3,
      title: 'Автоматизированная система управления КНС',
      description: 'Фотографии внедрения распределенной пятиуровневой системы для автоматизации управления технологическими процессами насосных станций.',
      date: '05.10.2024',
      images: [
        '/images/gallery/kns-1.jpg',
        '/images/gallery/kns-2.jpg',
        '/images/gallery/kns-3.jpg',
        '/images/gallery/kns-4.jpg',
      ]
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
              Фотоотчеты
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Примеры выполненных работ и реализованных проектов
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Примеры выполненных работ</h2>
              
              <div className="space-y-16">
                {photoReports.map((report) => (
                  <div key={report.id} className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{report.title}</h3>
                    <p className="text-gray-600 mb-2">Дата: {report.date}</p>
                    <p className="text-gray-700 mb-6">{report.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {report.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <img 
                            src={image} 
                            alt={`${report.title} - изображение ${index + 1}`} 
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Link 
                        to={`/gallery/${report.id}`} 
                        className="inline-block px-4 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700 transition-colors"
                      >
                        Смотреть все фото
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужен индивидуальный проект?</h2>
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
                to="/products" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Наша продукция
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
