import { useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';
import classes from './Banner.module.css';
import { Spinner } from 'react-bootstrap';

const Banner = (props) => {
  const [banner, setBanner] = useState({});
  const { isLoading, error, sendRequest } = useHttp();
  const subString = (string, number) => {
    if (string?.length < number) {
      return string;
    } else return string?.substring(0, number) + '...';
  };
  useEffect(() => {
    const renderMovie = (data) => {
      setBanner(data.results[parseInt(Math.random() * data.results.length)]);
    };
    sendRequest(props.url, renderMovie);
  }, [props.url, sendRequest]);

  return (
    <div>
      {isLoading && <Spinner variant="dark" />}
      {!isLoading && error && <h1 className="centered">{error}</h1>}
      {!isLoading && !error && (
        <header className={classes.header}>
          <img
            src={
              banner.backdrop_path
                ? `https://image.tmdb.org/t/p/original${banner.backdrop_path}`
                : './default-img.jpg'
            }
            alt={`${banner.name || banner.title}`}
          />
          <div className={classes.content}>
            <h1>{banner.name || banner.title}</h1>
            <button>Play</button>
            <button>My List</button>
            <p>{subString(banner.overview, 150)}</p>
          </div>
        </header>
      )}
    </div>
  );
};

export default Banner;
