import { genres } from '@/constants';

import { Wrapper } from './styles';
import MultiSelector from './MultiSelector/MultiSelector';
import Slider from './Slider/Slider';
import Selector from './Selector/Selector';

const FilterToolbar = () => {
  return (
    <Wrapper>

     <MultiSelector filters={genres} />
     <Slider />
     {/* <Selector /> */}

    </Wrapper>
  );
};

export default FilterToolbar;
