import { useAppSelector } from '@/store/hooks';

import Comment from './Comment/Comment';
import CommentPostForm from '../Forms/CommentPostForm/CommentPostForm';
import { Wrapper } from './styles';

const Comments: React.FC = () => {
  const comments = useAppSelector((state) => state.singleBook.comments);

  return (
    <Wrapper>
      <h2 className="title">Comments</h2>
      <div className="comments-container">
        {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
      <CommentPostForm />
    </Wrapper>
  );
};

export default Comments;
