import type { GetServerSideProps } from 'next';

import { getBookById } from '@/api/books';
import type { BookType } from '@/models/book';

import ProductInfo from '@/components/ProductInfo/ProductInfo';
import Comments from '@/components/Comments/CommentsSection';
import { Wrapper } from './styles';

type PropsType = {
  data: BookType;
};
const ProductPage = (props: PropsType) => {
  return (
    <Wrapper>
      <ProductInfo book={props.data} />
      <Comments />
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params as {id: string};
  const data = await getBookById(params.id);

  return {
    props: { data },
  };
};

export default ProductPage;
