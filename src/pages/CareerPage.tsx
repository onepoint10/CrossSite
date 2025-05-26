import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CareerPage = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Технический писатель / Научный сотрудник',
      description: 'Разработка технических, научно-технических документов (тексты, шаблоны, графические материалы и т.п., научного, рекламного, прикладного характера) в областях: Промышленное оборудование; Информационные системы; Программное обеспечение; Автоматизация, системы управления; Участие в технических разработках, маркетинговых проектах.',
      salary: 'до 100 000 руб.'
    },
    {
      id: 2,
      title: 'Инженер-программист АСУ ТП (HMI, SCADA)',
      description: 'Программирование Wonderware Intouch, Разработка видеокадров, настройка подсистемы тревог и архивации данных, Отладка ППО на стенде, Участие в наладке системы на объекте.',
      salary: 'По результатам собеседования'
    },
    {
      id: 3,
      title: 'Инженер-конструктор',
      description: 'Разработка конструкторской документации в области машиностроения, приборостроения (нестандартное оборудование, металлоконструкции, детали машин и механизмов, пневмо-гидроаппаратура, корпуса и шкафы электроаппаратуры).',
      salary: 'По результатам собеседования'
    },
    {
      id: 4,
      title: 'Монтажник РЭА, КИПиА, АСУТП',
      description: 'Монтаж (сборка) шкафов управления и автоматики, распайка разъемов и элементов автоматики, монтаж оборудования и закладных конструкций под РЭА на объекте, монтаж кабельных линий, проверка правильности сборки и монтажа электрошкафов, упаковка готовой продукции.',
      salary: 'По результатам собеседования'
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
              Карьера в ООО "Кросс-Автоматика"
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Присоединяйтесь к команде профессионалов в области промышленной автоматизации
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Работа в ООО "Кросс-Автоматика"</h2>
              
              <div className="mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  Наша компания ведет набор специалистов технического, информационного и других профилей в Омске. Помимо профессионализма, мы ценим в сотрудниках такие качества, как активность и творческий подход к решению задач, готовность совершенствоваться, умение работать на стыке различных областей. На предприятии выстроена современная система организации труда.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-blue-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Гибкий рабочий график</h3>
                  <p className="text-gray-700">Возможность удаленной работы и гибкого графика для максимального комфорта сотрудников.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-blue-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Достойная заработная плата</h3>
                  <p className="text-gray-700">Конкурентная оплата труда, соответствующая уровню специалиста и его квалификации.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-blue-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Профессиональное развитие</h3>
                  <p className="text-gray-700">Возможность развиваться в своей профессиональной сфере, а также работать на пересечении с другими областями.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-blue-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Участие в мероприятиях</h3>
                  <p className="text-gray-700">Участие в конференциях, выставках, семинарах для расширения профессиональных знаний и навыков.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-blue-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Обучение</h3>
                  <p className="text-gray-700">Обучение работе в программных продуктах и повышение квалификации за счет компании.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-blue-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Гибкие условия работы</h3>
                  <p className="text-gray-700">Возможность работы по подряду, сдельная оплата труда в зависимости от предпочтений сотрудника.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Открытые вакансии</h2>
              
              <div className="space-y-6">
                {vacancies.map((vacancy) => (
                  <div key={vacancy.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{vacancy.title}</h3>
                    <p className="text-blue-800 font-semibold mb-4">Зарплата: {vacancy.salary}</p>
                    <p className="text-gray-700 mb-6">{vacancy.description}</p>
                    <button className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                      Откликнуться на вакансию
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Вы можете позвонить нам по телефону +7 (3812) 66 01 25, или оставить заявку на сайте, на форме в описании вакансии.
                </p>
                <Link 
                  to="/contacts" 
                  className="inline-block px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Связаться с нами
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
