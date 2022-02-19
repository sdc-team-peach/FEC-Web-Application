/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Container, Radio, Rating } from './Ratings.styles';

// eslint-disable-next-line react/prop-types
function StarRatings({ currentRate, isRating }) {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <>
            {isRating
            && (
            <label>
              <Radio
                type="radio"
                value={givenRating}
                onClick={() => {
                  setRate(givenRating);
                }}
              />
              <Rating>
                <FaStar
                  color={
                givenRating < rate || givenRating === rate
                  ? '000'
                  : 'rgb(192,192,192)'
              }
                />
              </Rating>
            </label>
            )}
            {!isRating
            && (
            <label>
              <Radio
                type="radio"
                value={givenRating}
              />
              <Rating>
                <FaStar
                  color={
                givenRating < currentRate || givenRating === currentRate
                  ? '000'
                  : 'rgb(192,192,192)'
              }
                />
              </Rating>
            </label>
            )}
          </>
        );
      })}
    </Container>
  );
}

// StarRatings.propTypes = {
//   currentRate: PropTypes.number,
// };

export default StarRatings;
