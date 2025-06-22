import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import 'boxicons'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);




  const language = [
    { name: "O'zbekcha", code: 'uz' },
    { name: 'Русский', code: 'ru' },
    { name: 'English', code: 'en' },
  ];

  // const [selectedLanguage, setSelectedLanguage] = useState(language[0].code);

  // const { t, i18n } = useTranslation();

  // const handleChangeLocation = (e) => {
  //   setSelectedLocation(e.target.value);
  // };

  // const handleChangeLanguage = (e) => {
  //   const newLang = e.target.value;
  //   setSelectedLanguage(newLang);
  //   i18n.changeLanguage(newLang);
  // };

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(prev => !prev);


  return (

    <header className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="bg-[#06030F] py-3">
        <div className="w-[90%] h-[80px] mx-auto flex flex-col items-center justify-between">
          <div className="w-full h-auto flex items-center justify-between">
            <div className="flex-1">
              <div className=" flex items-center justify-satart ">
                <button
                  onClick={toggleDropdown}
                  className="text-white px-4 py-2 rounded flex items-center space-x-1"
                >
                  <span>RU</span> / <span>$</span>
                  <span className="ml-1 text-[#77BE1D]">▲</span>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-16 bg-gray-800 rounded-lg shadow-lg p-3 w-40 z-50 borde flex flex-col items-center justify-center gap-3"
                    >
                      <div className="flex justify-between gap-2">
                        <button className="bg-lime-500 text-white px-3 py-1 rounded"> Uz </button>
                        <button className="bg-gray-900 text-white px-3 py-1 rounded"> Ru </button>
                        <button className="bg-gray-900 text-white px-3 py-1 rounded"> En </button>
                      </div>
                      <div className="flex justify-between gap-2">
                        <button className="bg-lime-500 text-white px-3 py-1 rounded"> $ </button>
                        <button className="bg-gray-900 text-white px-3 py-1 rounded"> € </button>
                        <button className="bg-gray-900 text-white px-3 py-1 rounded"> ₽ </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex-2 flex items-center justify-center">
              <ul className='flex gap-3 text-white'>
                <a href="">
                  Накопительный
                </a>
                <a href="">
                  Отзывы
                </a>
                <a href="">
                  Гарантии
                </a>
                <a href="">
                  Как купить
                </a>
                <a href="">
                  Накопительная
                </a>
              </ul>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <h1></h1>
              <div className="">
                <img src="" alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
