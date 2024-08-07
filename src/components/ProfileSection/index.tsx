import Image from 'next/image';

import type { IUserData } from '@/pages/profile';

import emailIcon from '@/images/email.svg';
import profilePic from '@/images/profile.svg';
import cameraPic from '@/images/button_photo.svg';
import chelik from '@/images/chelik.svg';

import { Wrapper } from './styles';
import Input from '../Input';

type PropsType = {
  userData: IUserData;
};

const ProfileSection = (props: PropsType) => {
  const { id, email } = props.userData;
  return (
    <Wrapper>
      <div className=".avatar">
        <Image src={chelik} alt="avatar" />
        <button type="button" className="button">
          <Image src={cameraPic} alt="photo" />
        </button>
      </div>

      <div className="profile-info">
        <div className="profile-personal">
          <div className="profile-title">
            <h3>Personal information</h3>
            <button>Change information</button>
          </div>
          <Input
            value={`User${id}`}
            signature="Your name"
            isFilled
          >
            <Image src={profilePic} alt="profile"
              width={24} height={24}
            />
          </Input>

          <Input
          value={email}
          signature="Your email"
          isFilled
          >
            <Image src={emailIcon} alt="email"
              width={24} height={24}
            />
          </Input>
        </div>
        <div className="profile-password">
          <div className="profile-title">
            <h3>Password</h3>
            <button>Change password</button>
          </div>
        </div>
      </div>

    </Wrapper>
  );
};

export default ProfileSection;
