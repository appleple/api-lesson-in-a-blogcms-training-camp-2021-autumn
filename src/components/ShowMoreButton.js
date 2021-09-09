import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useConditions } from '../store';
import { get } from '../common';

const style = {
  display: 'flex',
  justifyContent: 'center',
};

const ShowMoreButton = ({ setHeroes, setIsShowMore, text }) => {
  const { conditions } = useConditions();
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const plusPage = () => {
    setPage(page + 1);
  };

  const showMore = (page) => {
    setIsLoading(true);
    const endpoint = `${Object.values(conditions)
      .map((obj) => `/${obj.field}/${obj.keywords.join('/')}`)
      .join('/_and_')}/page/${page}`;

    console.log(endpoint);

    get(endpoint).then(({ data: { 'entry:loop': result, lastPage } }) => {
      setIsLoading(false);
      setHeroes((prevHeroes) => [
        ...prevHeroes,
        ...(Array.isArray(result) ? result : [result]),
      ]);
      setIsShowMore(!!lastPage);
    });
  };

  const handleClick = () => {
    showMore(page);
    plusPage();
  };

  if (isLoading) {
    return (
      <div style={style}>
        <CircularProgress size="80px" />
      </div>
    );
  }
  return (
    <div style={style}>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleClick}
      >
        {text}
      </Button>
    </div>
  );
};

export default ShowMoreButton;
