import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@/store/hooks';
import { createComment } from '@/api/comments';
import { addComment } from '@/store/commentSlice';
import { validatate } from '@/services/validate';

import Button from '@/components/Button';
import { Wrapper } from './styles';

const CommentPostForm:React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  const handleClick = async () => {
    if (!text) {
      toast('Comment cannot be empty');
      return;
    }
    validatate(text);
    const query = router.query;
    const bookId = Number(query.id);
    const newComment = await createComment({ text, bookId });
    setText('');
    dispatch(addComment(newComment));
  };

  const handleChangeArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Wrapper>
      <textarea
        value={text}
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
