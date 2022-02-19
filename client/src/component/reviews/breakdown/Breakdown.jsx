import React, { useState, useEffect } from 'react';
import reviewMetaFetcher from './breakdownFetcher';
import StarRatings from '../../ratings/Ratings';
import RatingBars from './RatingBars';
import { StarRate } from './Breakdown.styles';

function Breakdown() {
  const { metaData, loading } = reviewMetaFetcher();
  const [ratingAverage, setratingAverage] = useState(0);

  function getAverage() {
    if (metaData) {
      const { ratings } = metaData;
      const ratingArr = Object.values(ratings);
      let ratingSum = 0;
      let ratingCount = 0;
      ratingArr.forEach((item, index) => {
        ratingSum += Number(item) * (index + 1);
        ratingCount += Number(item);
      });
      const result = Number(ratingSum / ratingCount).toFixed(2);

      setratingAverage(result);
    }
  }

  useEffect(() => {
    getAverage();
  }, [metaData]);

  return (
    <>
      {loading && <h4>loading ... </h4>}
      {!loading
        && (
        <>
          <StarRate>
            <h1>{ratingAverage}</h1>
            <StarRatings currentRate={ratingAverage} />
          </StarRate>
          <RatingBars value={3} max={5} />
        </>
        )}
    </>
  );
}

export default Breakdown;
