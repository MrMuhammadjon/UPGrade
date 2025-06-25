// src/pages/ProductPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../auth/ProductSlice';
import { useAppContext } from '../Context/AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);
  const { DarkMode } = useAppContext()



  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Yuklanmoqda...</p>;
  if (status === 'failed') return <p>Xatolik yuz berdi!</p>;

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);




  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4 mt-18 w-[90%] m-auto max-w-[1400px]">
      {items.map(product => (
        <div key={product.id} className="flex items-center justify-center border-1 border-pink-600 "  data-aos="zoom-out-up">
          <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
            {/* Product Image */}
            <div className="w-full h-64 flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt="Product"
                className="hover:scale-125 transition-transform duration-300 drop-shadow-[0_10px_50px_rgba(255,0,127)] rounded-lg"
              />
            </div>
            {/* Product Info */}
            <div className="p-5">
              {/* Title and Brand */}
              <div className="mb-2">
                <h2 className={`font-bold text-sm ${DarkMode ? 'text-white' : 'text-black'}`}>{product.title}</h2>
                <p className={`text-sm mt-1 ${DarkMode ? 'text-white' : 'text-black'}`}>{product.brand}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <p className={`text-2xl font-bold ${DarkMode ? 'text-white' : 'text-black'}`}>{product.price}$</p>
              </div>

              {/* Action Button */}
              <button className="mt-4 w-full py-3 bg-pink-600 border border-pink-600 text-white font-medium rounded-lg transition duration-300 hover:bg-transparent hover:text-pink-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
