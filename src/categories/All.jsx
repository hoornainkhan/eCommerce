// // src/App.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ItemS from '../categories/ItemS';
// import { CartProvider } from '../COMPONENTS/CartContext';

// const All = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
   
//     <div className="all">
//       {products.map(product => (
//         <ItemS key={product.id} product={product} />
//       ))}
//     </div>
    
//   );
// };

// export default All;
// src/categories/All.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemS from './ItemS';
import { Link } from 'react-router-dom';

const All = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="all">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ItemS product={product} />
        </Link>
      ))}
    </div>
  );
};

export default All;
