import { useState } from 'react';
import { Wrapper } from './styles';

const Rating: React.FC = () => {
  const stars = Array(5).fill(0);
  const [currItem, setCurrItem] = useState();

  return (
    <Wrapper>

      {stars.map((item, index) => {
        return (
            <div
              key={index}
              className={index <= currItem ? 'star selected' : 'star'}
              onClick={() => setCurrItem(index)}
            />
        );
      })
      }

      <p className="rating">5.0</p>

    </Wrapper>
  );
};

export default Rating;
