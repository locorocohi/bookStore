import { Wrapper } from './styles';

const Rating = () => {
  return (
    <Wrapper>
     <div className="star" data-rating="1" />
     <div className="star" data-rating="2" />
     <div className="star" data-rating="3" />
     <div className="star" data-rating="4" />
     <div className="star" data-rating="5" />
     <p className="rating">{null}</p>
    </Wrapper>
  );
};

export default Rating;
