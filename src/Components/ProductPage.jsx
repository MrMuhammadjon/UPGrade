// src/pages/ProductPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../auth/ProductSlice';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Yuklanmoqda...</p>;
  if (status === 'failed') return <p>Xatolik yuz berdi!</p>;

  console.log(items);
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {items.map(product => (
        <div key={product.id} className="border p-3 rounded shadow">
          <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2 rounded" />
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">{product.description.slice(0, 50)}...</p>
          <p className="font-bold text-green-600 mt-1">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
