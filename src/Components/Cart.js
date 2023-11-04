import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/actionCreators';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

 

  return (
    <div>
        <h1>Cart</h1>
    </div>
    
  )
}

export default Cart;