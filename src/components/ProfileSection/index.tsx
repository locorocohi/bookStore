import { useState } from 'react';
import Image from 'next/image';
import { saveNewAvatar } from '@/api/users';
import { useAppSelector } from '@/store/hooks';

import emailIcon from '@/images/email.svg';
import profilePic from '@/images/profile.svg';
import cameraPic from '@/images/button_photo.svg';
import emptyAvatar from '@/images/profilePic.svg';

import { Wrapper } from './styles';
import Input from '../Input';
import ChangeForm from '../Forms/ChangeForm/ChangeForm';
import ChangePasswordForm from '../Forms/ChangePasswordForm/ChangePasswordForm';

const ProfileSection = () => {
  const user = useAppSelector((store) => store.user.user);
  const [currAvatar, setAvatar] = useState(user?.avatar || emptyAvatar);
  const [isChanging, setChangingStatus] = useState(false);
  const [isChangingPass, setChangingPass] = useState(false);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files) {
      const reader = new FileReader();
      const newPicture = event.target.files[0];
      const fileType = newPicture.type.split('/')[1];

      reader.readAsDataURL(newPicture);
      reader.onload = async (event) => {
        const encodedImage = event.target?.result as string;
        setAvatar(encodedImage);
        await saveNewAvatar({ encodedImage, fileType, id: user?.id || 1123 });
      };
    }
  };

  const toggleInfoForm = () => {
    setChangingStatus(!isChanging);
  };

  const togglePasswordForm = () => {
    setChangingPass(!isChangingPass);
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
            <button onClick={toggleInfoForm} className="profile-title-button">Change information</button>
          </div>
          { isChanging
            ? <ChangeForm toggleInfoForm={toggleInfoForm} />
            : (<div className="info-wrapper">
                 <Input
                   value={user?.name}
                   signature="Your name"
                   readOnly
                   $isFilled
                 >
                   <Image src={profilePic} alt="profile"
                     width={24} height={24}
                   />
                 </Input>

                 <Input
                   value={user?.email}
                   signature="Your email"
                   readOnly
                   $isFilled
                 >
                   <Image src={emailIcon} alt="email"
                     width={24} height={24}
                   />
                 </Input>
               </div>)}
        </div>
        <div className="profile-password">
          <div className="profile-title">
            <h3>Password</h3>
            <button onClick={togglePasswordForm} className="profile-title-button">Change password</button>
          </div>
            { isChangingPass
              ? <ChangePasswordForm togglePasswordForm={togglePasswordForm} />
              : null }
        </div>
      </div>

    </Wrapper>
  );
};

export default ProfileSection;
