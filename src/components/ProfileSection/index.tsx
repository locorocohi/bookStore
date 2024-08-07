import { useState } from 'react';
import Image from 'next/image';
import { saveNewAvatar } from '@/api/users';

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
  const [image, setImage] = useState('');
  const { id, email } = props.userData;

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      const reader = new FileReader();
      const newPicture = event.target.files[0];

      reader.readAsDataURL(newPicture);
      reader.onload = (event) => {
        // console.log(event.target.result);
        setImage(event.target.result);
      };
    }
    await saveNewAvatar({ image, id });
  };

  return (
    <Wrapper>
      <div className="avatar">
        <Image src={chelik} alt="avatar" />

        <label className="upload-button">
          <input type="file" className="input-file" onChange={onChange} />
          <Image src={cameraPic} alt="photo" />
        </label>
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
