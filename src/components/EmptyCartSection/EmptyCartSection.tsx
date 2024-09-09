import Image from 'next/image';
import Link from 'next/link';

import books from '@/images/cartBooks.svg';

import { Wrapper } from './styles';

const EmptyCartSection = () => {
  return (
    <Wrapper>
      <Image src={books} alt="books" />
      <div className="content">
        <h1 className="title">Your cart is empty</h1>
        <p>Add items to cart to make a purchase. Go to the catalog now.</p>
        <Link className="redirect-button" href="/">Go to catalog</Link>
      </div>
    </Wrapper>
  );
};

export default EmptyCartSection;
