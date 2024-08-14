import { genres } from '@/constants';
import Select from './Select/Selector';
import { Wrapper } from './styles';

const FilterToolbar = () => {
  return (
    <Wrapper>
     <Select multiple filters={genres} />
     {/* <Select />
     <Select /> */}
     <select multiple />
    </Wrapper>
  );
};

export default FilterToolbar;
