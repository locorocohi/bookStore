import ReactSlider from 'react-slider';
import { useState } from 'react';

import FilterDropdown from '@/components/FilterDropdown/FilterDropdown';
import { Wrapper } from './styles';

const Slider = () => {
  const defaultValue = [20, 80];
  const [minValue, setMinValue] = useState(defaultValue[0]);
  const [maxValue, setMaxValue] = useState(defaultValue[1]);

  const handleSliderChange = (value: number [], thumbIndex: number) => {
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
          onChange={handleSliderChange}
        />
        <div className="values">
          <div className="thumb-value min">$ {minValue}</div>
          <div className="thumb-value max">$ {maxValue}</div>
        </div>
      </Wrapper>
    </FilterDropdown>
  );
};

export default Slider;
