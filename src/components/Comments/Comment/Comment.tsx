/* eslint-disable no-inline-styles/no-inline-styles */
import Image from 'next/image';

import putin from '@/images/Putin.jpg';

import { Wrapper } from './styles';

const Comment = () => {
  return (
    <Wrapper>
      <div className="avatar-wrapper">
        <Image src={putin} alt="human"
          width={60} height={60}
          style={{
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </div>
      <div className="comment-content">
        <p className="name">Vladimir</p>
        <p className="creation-time">Left a comment yesterday</p>
        <p className="comment-text">Love this so much! This book opened up a new world for me! I advise everyone to get acquainted with the author of this book. He is awesome!</p>
      </div>
    </Wrapper>
  );
};

export default Comment;
