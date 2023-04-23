import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import useHttp from '../../../hooks/use-http';
import classes from './MovieDetail.module.css';

const MovieDetail = (props) => {
  const [key, setKey] = useState();
  const url = `/movie/${props.detail.id}/videos?api_key=c5f618b4f7e595ff4e83d24690387a7a&language=en-US`;
  const { sendRequest } = useHttp();
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  useEffect(() => {
    const renderMovie = (data) => {
      setKey(
        data.results.find((x) => x.type === 'Trailer').key ||
          data.results.find((x) => x.type === 'Teaser').key
      );
    };
    sendRequest(url, renderMovie);
    return setKey();
  }, [url, sendRequest]);
  return (
    <div className={classes['detail-container']}>
      <div className={classes['detail-content']}>
        <h1>{`${props.detail.name || props.detail.title}`}</h1>
        <strong>
          <p>{`Release Date: ${props.detail.release_date || '?'}`}</p>
        </strong>
        <strong>
          <p>{`Vote: ${props.detail.vote_average || '?'}/10`}</p>
        </strong>
        <p className={classes.overview}>{props.detail.overview}</p>
      </div>
      {key ? (
        <YouTube videoId={key} opts={opts} />
      ) : (
        <img
          src={`${
            props.detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original${props.detail.backdrop_path}`
              : './default-img.jpg'
          }`}
          alt={`${props.detail.name || props.detail.title}`}
        />
      )}
    </div>
  );
};

export default MovieDetail;
