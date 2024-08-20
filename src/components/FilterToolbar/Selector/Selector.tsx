import FilterDropdown from '@/components/FilterDropdown/FilterDropdown';

const Selector = () => {
  return (
    <FilterDropdown title="Sort by" buttonType="secondary">

      <select name="filter" id="1">
        <option value="1" />
        <option value="2" />
        <option value="3" />
        <option value="4" />
      </select>

    </FilterDropdown>
  );
};

export default Selector;
