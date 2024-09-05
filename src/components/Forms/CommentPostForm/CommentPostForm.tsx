import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { createComment } from '@/api/comments';
import { validatate } from '@/services/validate';

import Button from '@/components/Button';
import { Wrapper } from './styles';

const CommentPostForm = () => {
  const router = useRouter();
  const [text, setText] = useState('');

  const handleClick = async () => {
    if (!text) {
      return;
    }
    validatate(text);
    const query = router.query;
    const bookId = Number(query.id);
    await createComment({ text, bookId });
  };

  const handleChangeArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Wrapper>
      <textarea
        className="comment-area"
        placeholder="Share a comment"
        onChange={handleChangeArea}
      />

      <Button
        type="button"
        className="comment-button"
        onClick={handleClick}
      >
        Post a comment
      </Button>
    </Wrapper>
  );
};

export default CommentPostForm;
