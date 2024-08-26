import { useState } from 'react';
import { Wrapper } from './styles';

const Rating: React.FC = () => {
  const stars = Array(5).fill(0);
  const [currItem, setCurrItem] = useState<number | null>(null);

  return (
    <Wrapper>

      {stars.map((_, index) => {
        const isSelected = typeof currItem === 'number' && index <= currItem;
        return (
            <button
              key={index}
              className={isSelected ? 'star selected' : 'star'}
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
