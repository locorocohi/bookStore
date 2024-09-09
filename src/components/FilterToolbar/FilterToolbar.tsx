import { Wrapper } from './styles';
import MultiSelector from './MultiSelector/MultiSelector';
import Slider from './Slider/Slider';
import Selector from './Selector/Selector';

type PropsType = {
  genres: string [];
  sortOptions: string [];
};

const FilterToolbar: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>

     <MultiSelector filters={props.genres} />
     <Slider />
     <Selector options={props.sortOptions} />

    </Wrapper>
  );
};

export default FilterToolbar;
