import { useAppSelector } from '@/store/hooks';
import CartItem from './CartItem/CartItem';
import { Wrapper } from './styles';

const CartSection = () => {
  const booksInCart = useAppSelector((state) => state.cart.booksInCart);
  const total = useAppSelector((state) => state.cart.total);
  return (
    <Wrapper>
      {booksInCart.map((bookInCart) => {
        const { book, booksCount } = bookInCart;
        const { cover, price, name, author } = book;
        return (
          <CartItem
            key={bookInCart.book.id}
            booksCount={booksCount}
            cover={cover}
            price={price}
            title={name}
            author={author}
          />);
      })}
      <p className="total">{total}</p>
    </Wrapper>
  );
};

export default CartSection;
