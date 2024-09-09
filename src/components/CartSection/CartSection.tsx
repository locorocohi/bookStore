import CartItem from './CartItem/CartItem';
import { Wrapper } from './styles';

const CartSection = () => {
  return (
    <Wrapper>
      <CartItem />
      <p className="total">34.98</p>
    </Wrapper>
  );
};

export default CartSection;
