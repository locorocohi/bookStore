import { useAppSelector } from '@/store/hooks';

import Comment from './Comment/Comment';
import CommentPostForm from '../Forms/CommentPostForm/CommentPostForm';
import { Wrapper } from './styles';

const Comments: React.FC = () => {
  const comments = useAppSelector((state) => state.singleBook.comments);
  const user = useAppSelector((state) => state.user.user);

  return (
    <Wrapper>
      {comments.length ? <h2 className="title">Comments</h2> : null}
      <div className="comments-container">
        {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
      {user ? <CommentPostForm /> : null}
    </Wrapper>
  );
};

export default Comments;
