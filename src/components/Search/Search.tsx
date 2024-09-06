import Image from 'next/image';
import { useState, type ChangeEventHandler } from 'react';

import loop from '@/images/search.svg';

import Input from '../Input';

const Search = () => {
  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target) {
      return;
    }
    setText(event.target.value);
  };

  const clearInputValue = (event: MouseEvent) => {
    const currElem = event.target as HTMLButtonElement;
    if (!currElem.previousSibling) {
      return;
    }
    setText('');
  };

  return (
    <Input
        type="test"
        placeholder="Search"
        clearInputValue={clearInputValue}
        $isFilled={!!text.length}
        signature="Search"
        value={text}
        onChange={handleChange}
        >
        <Image src={loop} alt="loop"
          width={24} height={24}
        />
    </Input>
  );
};

export default Search;
