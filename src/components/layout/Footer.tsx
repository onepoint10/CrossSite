import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ООО "Кросс-Автоматика"</h3>
            <p className="mb-4 text-gray-300">Инжиниринговая компания с большим опытом работы в области промышленной автоматизации и связи, а также техобслуживания промышленных и добывающих объектов.</p>
            <div className="flex items-center">
              <a href="tel:+73812660125" className="text-blue-400 hover:text-blue-300 transition-colors">
                +7 (3812) 66 01 25
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">О компании</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Продукция</a></li>
              <li><a href="/solutions" className="text-gray-300 hover:text-white transition-colors">Решения</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="/contacts" className="text-gray-300 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li><a href="/products/testing-equipment" className="text-gray-300 hover:text-white transition-colors">Испытательное оборудование</a></li>
              <li><a href="/products/automation" className="text-gray-300 hover:text-white transition-colors">Автоматика и телемеханика</a></li>
              <li><a href="/products/packing" className="text-gray-300 hover:text-white transition-colors">Фасовочное оборудование</a></li>
              <li><a href="/products/software" className="text-gray-300 hover:text-white transition-colors">Программное обеспечение</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <address className="not-italic text-gray-300">
              <p>644024, г.Омск, ул. Щербанева, д.25, офис 803</p>
              <p className="mt-2">Email: <a href="mailto:info@crossgroup.su" className="text-blue-400 hover:text-blue-300 transition-colors">info@crossgroup.su</a></p>
              <p className="mt-2">Режим работы:<br />пн. — пт.: 9.00 — 18.00<br />перерыв: 13.00 — 14.00<br />вых.: сб, вс.</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} ООО "Кросс-Автоматика". Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
