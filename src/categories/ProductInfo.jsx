// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ItemB from './itemB';

// const ProductInfo = () => {
//   const { id } = useParams([]);
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then(response => response.json())
//       .then(data => setProduct(data));
//   }, [id]);

//   if (!product) return null;

//   return (
//     <div>
//       <ItemB product={product}/>
//     </div>
//   );
// }

// export default ProductInfo;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemB from './ItemB';

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <ItemB product={product}/>
    </div>
  );
}

export default ProductInfo;
