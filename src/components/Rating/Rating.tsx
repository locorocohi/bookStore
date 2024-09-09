import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setBookRating } from '@/store/thunks';

import { Wrapper } from './styles';

type PropsType = {
  rating?: string | number;
  disabled?: boolean;
};

const Rating: React.FC<PropsType> = (props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const stars = Array(5).fill(0);
  const [currItem, setCurrItem] = useState(props.rating);

  const handleClick = async (index: number) => {
    setCurrItem(index);
    const query = router.query;
    const bookId = Number(query.id);

    dispatch(setBookRating({ rating: index + 1, bookId }));
  };

  return (
    <Wrapper className={props.disabled ? 'disabled' : ''}>

      {stars.map((_, index) => {
        const isSelected = index <= Number(currItem);
        return (
            <button
              key={index}
              className={isSelected ? 'star selected' : 'star'}
              onClick={() => handleClick(index)}
            />
        );
      })
      }

    </Wrapper>
  );
};

export default Rating;
