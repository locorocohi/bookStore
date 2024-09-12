/* eslint-disable no-inline-styles/no-inline-styles */
import Image from 'next/image';

import putin from '@/images/Putin.jpg';

import type { CommentType } from '@/models/comment';
import { Wrapper } from './styles';

type PropsType = {
  comment: CommentType;
};

const Comment:React.FC<PropsType> = (props) => {
  const { text, creationTime, author } = props.comment;
  return (
    <Wrapper>
      <div className="avatar-wrapper">
        <Image src={author.avatar.length > 0 ? author.avatar : putin} alt="human"
          width={60} height={60}
          style={{
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </div>
      <div className="comment-content">
        <p className="name">{author.name}</p>
        <p className="creation-time">Left a comment {creationTime}</p>
        <p className="comment-text">{text}</p>
      </div>
    </Wrapper>
  );
};

export default Comment;
