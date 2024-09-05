import type { CommentType } from './Comment/Comment';
import Comment from './Comment/Comment';
import CommentPostForm from '../Forms/CommentPostForm/CommentPostForm';
import { Wrapper } from './styles';

type PropsType = {
  comments: CommentType[];
};

const Comments: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <h2 className="title">Comments</h2>
      <div className="comments-container">
        {props.comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
      <CommentPostForm />
    </Wrapper>
  );
};

export default Comments;
