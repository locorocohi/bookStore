import { useState } from 'react';
import { Wrapper } from './styles';

type PropsType = {
  rating?: string | number;
};

const Rating: React.FC<PropsType> = (props) => {
  const stars = Array(5).fill(0);
  const [currItem, setCurrItem] = useState(props.rating);

  return (
    <Wrapper>

      {stars.map((_, index) => {
        const isSelected = index <= Number(currItem);
        return (
            <button
              key={index}
              className={isSelected ? 'star selected' : 'star'}
              onClick={() => setCurrItem(index)}
            />
        );
      })
      }

    </Wrapper>
  );
};

export default Rating;
