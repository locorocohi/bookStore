import Image from 'next/image';
import { useState, type ChangeEventHandler } from 'react';
import { createQueryString, replaceURLQueryParams } from '@/services/queryStringServices';
import { useRouter } from 'next/router';

import loop from '@/images/search.svg';

import Input from '../Input';

const Search = () => {
  const router = useRouter();
  const [text, setText] = useState(router.query.search as string);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target) {
      return;
    }
    setText(event.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      const queryString = createQueryString({
        query: router.query,
        key: 'search',
        option: text,
      });
      replaceURLQueryParams(router, 'search', queryString);
    }
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
        onKeyDown={handleKeyDown}
        >
        <Image src={loop} alt="loop"
          width={24} height={24}
        />
    </Input>
  );
};

export default Search;
