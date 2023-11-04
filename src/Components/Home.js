import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/actionCreators';
import { addToCart } from '../redux/actions/actionCreators';


function Home() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(products)

  useEffect(() => {

    // Fetch products from the API



    fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) => dispatch(fetchProducts(data)));
    
      
  }, [dispatch]);

 

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

  return (
    <div>
        <h1>All items</h1>
        <div className="product-list">
      {
      
            products.map((product) => (

            <div key={product.id} className="product-card">

            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

          <p>Price: ${product.price}</p>

          { 
        //   <button onClick={() => handleAddToCart(product)}>Add to Cart</button> 
          }

        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Home;