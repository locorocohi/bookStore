import Comment from './Comment/Comment';
import { Wrapper } from './styles';

const Comments = () => {
  return (
    <Wrapper>
      <h2 className="title">Comments</h2>
      <div className="comments-container">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </Wrapper>
  );
};

export default Comments;
