import Image from 'next/image';

import castlePic from '@/images/castle.svg';
import fairy from '@/images/fairy.svg';

import Button from '@/components/Button';
import { Banner } from './styles';

const AuthBanner = () => {
  return (
      <Banner>
        <div className="castle-picture">
          <Image fill src={castlePic} alt = "Castle" />
        </div>

        <div className="content">
          <h2 className="title">Authorize now</h2>
          <p className="text">Authorize now and discover the fabulous world of books</p>
          <Button className="button">Log In/ Sign Up</Button>
        </div>

        <div className="image-wrapper">
          <div className="fairy-picture">
            <Image fill src={fairy} alt = "Fairy" />
          </div>
        </div>
      </Banner>);
};

export default AuthBanner;
