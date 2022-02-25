import React, { useState, useEffect, useContext } from 'react';
import reviewMetaFetcher from './breakdownFetcher';
import StarRatings from '../../ratings/Ratings';
import RatingBars from './RatingBars';
import AppContext from '../../AppContext';
import { StarRate } from './Breakdown.styles';

function Breakdown() {
  const { metaData, loading, chars } = reviewMetaFetcher();
  const [ratingAverage, setratingAverage] = useState(0);
  const myContext = useContext(AppContext);

  function getAverage() {
    if (metaData && !loading) {
      const { ratings } = metaData;
      const ratingArr = Object.values(ratings);
      let ratingSum = 0;
      let ratingCount = 0;
      ratingArr.forEach((item, index) => {
        ratingSum += Number(item) * (index + 1);
        ratingCount += Number(item);
      });
      const result = Number(ratingSum / ratingCount).toFixed(2);
      myContext.setGlobalAverage(result);
      setratingAverage(result);
    }
  }

  useEffect(() => {
    getAverage();
  }, [metaData]);

  return (
    <>
      {loading && <h4>loading ... </h4>}
      {(chars && metaData)
        && (
        <>
          <StarRate>
            <h1>{ratingAverage}</h1>
            <StarRatings currentRating={ratingAverage} />
          </StarRate>
          {chars.map((item) => (
            <RatingBars
              name={item}
              value={metaData.characteristics[item].value}
              max={5}
            />
          ))}
          {/* <RatingBars name="Fit" value={metaData.characteristics.Fit.value} max={5} />
          <RatingBars name="Length" value={metaData.characteristics.Length.value} max={5} />
          <RatingBars name="Comfort" value={metaData.characteristics.Comfort.value} max={5} />
          <RatingBars name="Quality" value={metaData.characteristics.Quality.value} max={5} /> */}
        </>
        )}
    </>
  );
}

export default Breakdown;
