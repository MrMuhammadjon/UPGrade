import React from 'react'
import { useEffect, useState } from "react";


const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="">
            <div className="">
              <a href="">
                <img src="https://files.ox-sys.com/cache/original/image/81/b3/7f/81b37f227eb3aa9ee19bf9614075ecbfeaf7fa94a0d02e463cd9d4a8cdb5863c.png" alt="" />
              </a>
            </div>
            <div className="">
              <form action="">
                <input type="text"  placeholder='Serach..'/>
              </form>
            </div>
            <div className="">
              <ul>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
