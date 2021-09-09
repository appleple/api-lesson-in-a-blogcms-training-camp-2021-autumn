import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { get } from '../common';
import { HeroCard, ShowMoreButton } from './index';
import { useConditions } from '../store';

const style = {
  flex: 1,
};

const progress = {
  ...style,
  display: 'flex',
  justifyContent: 'center',
};

const HeroesIndex = () => {
  const { conditions } = useConditions();
  const [heroes, setHeroes] = useState([]);
  const [isShowMore, setIsShowMore] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const endpoint = Object.values(conditions)
      .map((obj) => `/${obj.field}/${obj.keywords.join('/')}`)
      .join('/_and_');
    // console.log(endpoint);
    setIsLoaded(false);
    get(endpoint).then(
      ({ data: { 'entry:loop': result, lastPage } }) => {
        setIsError(false);
        setIsLoaded(true);
        setHeroes(Array.isArray(result) ? result : [result]);
        setIsShowMore(!!lastPage);
      },
      () => {
        setIsLoaded(true);
        setIsError(true);
      },
    );
  }, [conditions]);

  if (isError) {
    return (
      <div style={style}>
        <div>該当するヒーローは存在しません。</div>
      </div>
    );
  }
  if (!isLoaded) {
    return (
      <div style={progress}>
        <CircularProgress size="80px" />
      </div>
    );
  }
  return (
    <div style={style}>
      {heroes.length > 0
        && heroes.map((hero) => <HeroCard hero={hero} key={hero.eid} />)}
      {isShowMore ? (
        <ShowMoreButton
          setHeroes={setHeroes}
          setIsShowMore={setIsShowMore}
          text="もっと見る"
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default HeroesIndex;
