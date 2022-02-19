/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
// import reviewMetaFetcher from '../reviews/breakdown/breakdownFetcher';
import { Container, Radio, Rating } from './Ratings.styles';

// eslint-disable-next-line react/prop-types
function StarRatings({ currentRating, currentId, isRating }) {
  const [rate, setRate] = useState(0);
  // const { metaData } = reviewMetaFetcher(currentId);
  const [ratingData, setRatingData] = useState(null);

  useEffect(() => {
    if (currentId) {
      axios.get('/products/review/meta', {
        params: {
          id: currentId,
        },
      })
        .then((res) => {
          setRatingData(res.data);
        })
        .catch((err) => {
          console.log('why');
        });
    }
  }, [currentId]);

  function getAverage() {
    if (ratingData) {
      const { ratings } = ratingData;
      const ratingArr = Object.values(ratings);
      let ratingSum = 0;
      let ratingCount = 0;
      ratingArr.forEach((item, index) => {
        ratingSum += Number(item) * (index + 1);
        ratingCount += Number(item);
      });
      const result = Number(ratingSum / ratingCount).toFixed(2);
      // setratingAverage(result);
      return result;
    }
  }

  const rating = useMemo(() => getAverage(), [ratingData]);
  // useMemo(() => getAverage(ratingData), [ratingData]);
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
            {currentId
            && (
            <label>
              <Radio
                type="radio"
                value={givenRating}
              />
              <Rating>
                <FaStar
                  color={
                givenRating < rating || givenRating === rating
                  ? '000'
                  : 'rgb(192,192,192)'
              }
                />
              </Rating>
            </label>
            )}
            {currentRating
            && (
            <label>
              <Radio
                type="radio"
                value={givenRating}
              />
              <Rating>
                <FaStar
                  color={
                givenRating < currentRating || givenRating === currentRating
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
