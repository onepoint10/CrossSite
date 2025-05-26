import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
              О компании
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Инжиниринговая компания с большим опытом работы в области промышленной автоматизации и связи
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Профиль деятельности</h2>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Кто мы</h3>
                <p className="mb-6">
                  ООО "Кросс-Автоматика" - инжиниринговая компания с большим опытом работы в области промышленной автоматизации и связи, а также техобслуживания промышленных и добывающих объектов.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что мы делаем</h3>
                <p className="mb-6">
                  Мы выполняем комплексное проектирование АСУ ТП и систем интеллектуального мониторинга и управления, что включает разработку систем мониторинга и управления, систем телемеханики, производство модулей, шкафов управления и т.д.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Наши возможности</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Проектирование и производство технологического оборудования, от шкафов телемеханики и пультов управления до испытательных стендов</li>
                  <li>Разработка проектной и конструкторской документации</li>
                  <li>Разработка программного обеспечения высокого качества</li>
                  <li>Сервисное и гарантийное обслуживание объектов автоматизации</li>
                  <li>Обучение и стажировка персонала</li>
                  <li>Техническое сопровождение систем</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Stages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Этапы развития</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform md:translate-x-[-50%]"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative">
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2003</h3>
                        <p className="text-gray-700">Основание компании. Начало работы в области промышленной автоматизации.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 transform md:translate-x-[-50%]"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:w-1/2 md:ml-auto md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2005</h3>
                        <p className="text-gray-700">Расширение деятельности. Начало работы с крупными промышленными предприятиями.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 transform md:translate-x-[-50%]"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2008</h3>
                        <p className="text-gray-700">Создание собственного производства. Разработка и внедрение первых испытательных стендов.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 transform md:translate-x-[-50%]"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:w-1/2 md:ml-auto md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2012</h3>
                        <p className="text-gray-700">Выход на новые рынки. Начало сотрудничества с нефтедобывающими компаниями.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 transform md:translate-x-[-50%]"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2015</h3>
                        <p className="text-gray-700">Развитие направления программного обеспечения. Создание собственных программных продуктов.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 transform md:translate-x-[-50%]"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="md:w-1/2 md:ml-auto md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2020</h3>
                        <p className="text-gray-700">Расширение географии деятельности. Реализация проектов по всей России.</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 transform md:translate-x-[-50%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Партнеры</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">НП «Сибирское машиностроение»</h3>
                  <p className="text-gray-700 mb-4">
                    Некоммерческое партнерство, объединяющее ведущие предприятия машиностроительной отрасли Сибирского региона.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ОАО «Газпромнефть-ОНПЗ»</h3>
                  <p className="text-gray-700 mb-4">
                    Один из крупнейших нефтеперерабатывающих заводов России, входящий в структуру компании «Газпром нефть».
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ООО «РН-Ремонт НПО»</h3>
                  <p className="text-gray-700 mb-4">
                    Предприятие, специализирующееся на ремонте и обслуживании нефтепромыслового оборудования.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ООО «Борец-Муравленко»</h3>
                  <p className="text-gray-700 mb-4">
                    Компания, занимающаяся производством и обслуживанием нефтепромыслового оборудования.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать сотрудничество?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Свяжитесь с нами, чтобы обсудить ваш проект или получить дополнительную информацию
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

export default AboutPage;
