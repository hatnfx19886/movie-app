import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useHttp from '../../../hooks/use-http';
import Card from '../../../UI/Card';
import MovieDetail from '../MovieDetail/MovieDetail';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  const [detail, setDetail] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const changeDetailHandler = (e) => {
    const movieId = e.target.id;
    const movie = movieList.filter((x) => x.id.toString() === movieId)[0];
    setShowDetail(true);
    setDetail(movie);
    if (showDetail && detail.id.toString() === movieId) {
      setShowDetail(false);
      setDetail();
    }
  };
  useEffect(() => {
    const renderMovie = (data) => {
      setMovieList(data.results);
    };
    sendRequest(props.url, renderMovie);
  }, [props.url, sendRequest]);

  const path = props.poster ? 'poster_path' : 'backdrop_path';

  return (
    <Card className={classes['list-container']}>
      {props.title && <h2>{props.title}</h2>}
      {isLoading && <Spinner variant="dark" />}
      {!isLoading && error && <h3>{error}</h3>}
      {!isLoading && !error && (
        <div className={classes.movelist}>
          {movieList.map((x) => (
            <img
              src={`${
                x[path]
                  ? `https://image.tmdb.org/t/p/original${x[path]}`
                  : './default-img.jpg'
              }`}
              alt={`${x.name || x.title}`}
              className={props.poster && classes.poster}
              key={x.id}
              id={x.id}
              onClick={changeDetailHandler}
            />
          ))}
        </div>
      )}
      {showDetail && <MovieDetail detail={detail} />}
    </Card>
  );
};

export default MovieList;
