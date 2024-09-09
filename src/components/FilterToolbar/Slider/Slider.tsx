import ReactSlider from 'react-slider';
import { useState } from 'react';
import { useRouter } from 'next/router';

import FilterDropdown from '@/components/FilterDropdown/FilterDropdown';
import { Wrapper } from './styles';

const Slider = () => {
  const router = useRouter();
  const defaultValue = [0, 100];
  const [minValue, setMinValue] = useState(defaultValue[0]);
  const [maxValue, setMaxValue] = useState(defaultValue[1]);

  const handleAfterChange = () => {
    router.push({
      query: {
        ...router.query,
        minPrice: minValue.toString(),
        maxPrice: maxValue.toString(),
      },
    }, '', {
      scroll: false,
    });
  };

  const handleChange = (value: number [], thumbIndex: number) => {
    if (thumbIndex === 0) {
      setMinValue(value[0]);
    }
    setMaxValue(value[1]);
  };

  return (
    <FilterDropdown title="Price" buttonType="primary">
      <Wrapper>

        <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          defaultValue={defaultValue}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props) => <div {...props} />}
          pearling
          minDistance={1}
          onAfterChange={handleAfterChange}
          onChange={handleChange}
        />
        <div className="values">
          <div className="thumb-value min">$ {minValue},00</div>
          <div className="thumb-value max">$ {maxValue},00</div>
        </div>

      </Wrapper>
    </FilterDropdown>
  );
};

export default Slider;
