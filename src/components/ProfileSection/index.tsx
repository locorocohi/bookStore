import { useState } from 'react';
import Image from 'next/image';
import { saveNewAvatar } from '@/api/users';

// import type { IUserData } from '@/pages/profile';

import emailIcon from '@/images/email.svg';
import profilePic from '@/images/profile.svg';
import cameraPic from '@/images/button_photo.svg';
import emptyAvatar from '@/images/profilePic.svg';

import { useAppSelector } from '@/store/hooks';
import { Wrapper } from './styles';
import Input from '../Input';
import ChangeForm from '../Forms/ChangeForm/ChangeForm';

// type PropsType = {
//   userData: IUserData;
// };

const ProfileSection = () => {
  const user = useAppSelector((store) => store.user.user);
  const [currAvatar, setAvatar] = useState(user?.avatar || emptyAvatar);
  const [isChanging, setChangingStatus] = useState(false);
  const { id, email, name } = user!;

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      const reader = new FileReader();
      const newPicture = event.target.files[0];
      const fileType = newPicture.type.split('/')[1];

      reader.readAsDataURL(newPicture);
      reader.onload = async (event) => {
        const encodedImage = event.target?.result as string;
        setAvatar(encodedImage);
        await saveNewAvatar({ encodedImage, fileType, id });
      };
    }
  };

  const changeProfileInfo = () => {
    setChangingStatus(!isChanging);
  };

  return (
    <Wrapper>
      <div className="avatar">
        <Image fill src={currAvatar} alt="avatar" />
        <label className="upload-button">
          <input type="file" className="input-file" onChange={onChange} />
          <Image src={cameraPic} alt="photo" />
        </label>
      </div>

      <div className="profile-info">
        <div className="profile-personal">
          <div className="profile-title">
            <h3>Personal information</h3>
            <button onClick={changeProfileInfo}>Change information</button>
          </div>
          { isChanging
            ? <ChangeForm changeProfileInfo={changeProfileInfo} />
            : (<>
              <Input
                value={name}
                signature="Your name"
                readOnly
                $isFilled
              >
                <Image src={profilePic} alt="profile"
                  width={24} height={24}
/>
              </Input>

              <Input
                value={email}
                signature="Your email"
                readOnly
                $isFilled
              >
                <Image src={emailIcon} alt="email"
                  width={24} height={24}
                />
              </Input>
               </>)}
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
