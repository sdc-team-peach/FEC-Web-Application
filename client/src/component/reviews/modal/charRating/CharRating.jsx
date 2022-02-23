/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  BsFillEmojiExpressionlessFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiHeartEyesFill,
} from 'react-icons/bs';
// import reviewMetaFetcher from '../reviews/breakdown/breakdownFetcher';
import {
  Container, Radio, Rating, Label, SubTitle, SubTitleBox,
} from './CharRating.styles';

// eslint-disable-next-line react/prop-types
function CharRating({ addCharRating, value }) {
  const [rate, setRate] = useState(0);
  const customStyle = {
    'letter-spacing': '.2rem',
  };
  return (
    <Container>
      <SubTitleBox>
        <SubTitle>{value}</SubTitle>
      </SubTitleBox>
      {[
        // eslint-disable-next-line max-len
        BsFillEmojiExpressionlessFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiHeartEyesFill,
      ].map((Item, index) => {
        const givenRating = index + 1;
        return (

          <Label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                addCharRating(givenRating);
              }}
            />

            <Rating>
              <Item
                color={
                givenRating === rate
                  ? '000'
                  : 'rgb(192,192,192)'
              }
                style={customStyle}
              />
            </Rating>
          </Label>

        );
      })}
    </Container>
  );
}

// StarRatings.propTypes = {
//   currentRate: PropTypes.number,
// };

export default CharRating;
