import type { GetServerSideProps } from 'next';

import { getBookById } from '@/api/books';
import type { BookType } from '@/models/book';

import ProductInfo from '@/components/ProductInfo/ProductInfo';
import Comments from '@/components/Comments/CommentsSection';
import { Wrapper } from './styles';

type CommentType = {
  id: number;
  text: string;
  creationTime: string;
  book: number;
  author: number;
};

type PropsType = {
  data: { findedBook: BookType; findedComments: CommentType[] };
};

const ProductPage = (props: PropsType) => {
  return (
    <Wrapper>
      <ProductInfo product={props.data.findedBook} />
      <Comments />
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params as {id: string};
  const data = await getBookById(params.id);
  console.log('!!Comments >> ', data.findedComments);
  return {
    props: { data },
  };
};

export default ProductPage;
