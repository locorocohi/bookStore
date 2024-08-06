import Image from 'next/image';

import passwordCloseEye from '@/images/hide.svg';
import emailIcon from '@/images/email.svg';
import openEye from '@/images/openEye.svg';
import profilePic from '@/images/profile.svg';
import chelik from '@/images/chelik.svg';
import cameraPic from '@/images/button_photo.svg';

import { Wrapper } from './styles';
import Input from '../Input';
import PasswordInput from '../PasswordInput';

const ProfileSection = () => {
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
            value="Guy Hawkins"
            signature="Your name"
            isFilled={!!true}
          >
            <Image src={profilePic} alt="profile"
              width={24} height={24}
            />
          </Input>

          <Input
          value="test@example.ru"
          signature="Your email"
          isFilled={!!true}
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
          <PasswordInput
          value="testasdasd"
          signature="Your password"
          isFilled={!!true}
          >
           <Image src={passwordCloseEye} alt="eye" priority />
           <Image src={openEye} alt="view" priority />
          </PasswordInput>
        </div>
      </div>

    </Wrapper>
  );
};

export default ProfileSection;
