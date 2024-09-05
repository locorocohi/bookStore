import type { GetServerSideProps } from 'next';

import { getBookById } from '@/api/books';
import type { BookType } from '@/models/book';

import type { CommentType } from '@/components/Comments/Comment/Comment';
import ProductInfo from '@/components/ProductInfo/ProductInfo';
import Comments from '@/components/Comments/CommentsSection';
import { Wrapper } from './styles';

type PropsType = {
  data: { findedBook: BookType; findedComments: CommentType[] };
};

const ProductPage = (props: PropsType) => {
  return (
    <Wrapper>
      <ProductInfo product={props.data.findedBook} />
      <Comments comments={props.data.findedComments} />
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
