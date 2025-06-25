import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';

const Footer = () => {
  const { DarkMode } = useAppContext();

  const WebLink = [
    // { name: 'instagram', link: '/instagram', id: 1 },
    // { name: 'youtube', link: '/youtube', id: 2 },
    // { name: 'facebook', link: '/facebook', id: 3 },
    // { name: 'twitter', link: '/twitter', id: 4 }
  ];

  return (
    <div className={`text-gray-500/80 pt-8 bottom-0 max-w-[1400px] m-auto mt-18 ${DarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        <div className='max-w-80'>
          {DarkMode ? (
            <Link to='/'>
              <img
                className='w-[200px]'
                src="https://files.ox-sys.com/cache/original/image/81/b3/7f/81b37f227eb3aa9ee19bf9614075ecbfeaf7fa94a0d02e463cd9d4a8cdb5863c.png"
                alt="logo"
              />
            </Link>
          ) : (
            <Link to='/'>
              <img
                className='w-[200px]'
                src="https://files.ox-sys.com/cache/original/image/83/42/50/8342504bbf1b88f7a8e05dd42a7f5b551d99b8bd1e8c0e16fef225962385f14e.png"
                alt="logo"
              />
            </Link>
          )}
          <p className='text-sm mt-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            {WebLink.map((item) => (
              <Link key={item.id} to={item.link}>
                <box-icon name={item.name} type='logo' color={DarkMode ? 'white' : 'black'}></box-icon>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className={`text-lg text-gray-800 ${DarkMode ? 'text-white': 'text-black'}`}>COMPANY</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Press</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">Partners</Link></li>
          </ul>
        </div>

        <div>
          <p className={`text-lg text-gray-800 ${DarkMode ? 'text-white': 'text-black'}`}>SUPPORT</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Safety Information</Link></li>
            <li><Link to="#">Cancellation Options</Link></li>
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">Accessibility</Link></li>
          </ul>
        </div>

        <div className='max-w-80'>
          <p className={`text-lg text-gray-800 ${DarkMode ? 'text-white': 'text-black'}`}>STAY UPDATED</p>
          <p className='mt-3 text-sm'>
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="">
            <p>
              +998 (91) 702 11 75
            </p>
            <p>
              +998 (91) 656 56 56
            </p>
          </div>
        </div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 mt-8' />

      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><Link to="#">Privacy</Link></li>
          <li><Link to="#">Terms</Link></li>
          <li><Link to="#">Sitemap</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
