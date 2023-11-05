// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import ItemS from "./ItemS";

// const ProductList = ({ category }) => {
//   const [products, setProducts] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/category/${category}`)
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error(error));
//   }, [category]);

//   const handleProductCardClick = (productId) => {
//     history.push(`/product/${productId}`);
//   };

//   return (
//     <div className="product-list d-flex justify-content-between mx-0">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           onClick={() => handleProductCardClick(product.id)}
//         >
//           <ItemS product={product} />
//         </div>
//       ))}
//       ProductList()
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ItemS from '../categories/ItemS';

// const ProductList = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products/category/${category}`)
//       .then(response => setProducts(response.data))
//       .catch(error => console.error(error));
//   }, [category]);

//   return (
//     <div className="prod">
//       {products.map(product => (
//         <ItemS key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemS from "./ItemS";
import { useNavigate } from "react-router-dom";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, [category]);

  const handleProductCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-list d-flex justify-content-between mx-0">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductCardClick(product.id)}
        >
          <ItemS product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;


