import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import { useAppDispatch } from '@/store/hooks';

import { setComments } from '@/store/commentSlice';
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setComments(props.data.findedComments));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  return {
    props: { data },
  };
};

export default ProductPage;
