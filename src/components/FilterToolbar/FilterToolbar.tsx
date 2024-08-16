import { genres } from '@/constants';
import Select from './Select/Selector';
import { Wrapper } from './styles';
import MultiSelector from './MultiSelector/MultiSelector';

const FilterToolbar = () => {
  return (
    <Wrapper>
     <MultiSelector filters={genres} />
     {/* <Select /> */}
    </Wrapper>
  );
};

export default FilterToolbar;
