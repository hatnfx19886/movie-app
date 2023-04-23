import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

import NavBar from '../browse/NavBar/NavBar';
import SearchForm from './SearchForm';
import Card from '../../UI/Card';
import useHttp from '../../hooks/use-http';
import ResultList from './ResultList';
import MovieDetail from '../browse/MovieDetail/MovieDetail';

const Search = () => {
  const { isLoading, sendRequest } = useHttp();
  const [resultList, setResultList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [detail, setDetail] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const getKeyWord = (e) => {
    const url = `/search/movie?api_key=c5f618b4f7e595ff4e83d24690387a7a&query=${e}&language=en-US&page=1&include_adult=false`;
    const renderMovie = (data) => {
      setResultList(data.results);
      setLoaded(true);
    };
    sendRequest(url, renderMovie);
  };
  const resetHandler = () => {
    setResultList([]);
    setDetail();
    setShowDetail(false);
    setLoaded(false);
  };
  const changeDetailHandler = (e) => {
    const movie = resultList.filter((x) => x.id.toString() === e)[0];
    setShowDetail(true);
    setDetail(movie);
    if (showDetail && detail.id.toString() === e) {
      setShowDetail(false);
      setDetail();
    }
  };
  return (
    <Card>
      <NavBar />
      <SearchForm getKeyWord={getKeyWord} resetHandler={resetHandler} />
      {isLoading && <Spinner variant="dark" />}
      {loaded && resultList.length === 0 ? (
        <h3>No Movie</h3>
      ) : (
        <ResultList
          list={resultList}
          changeDetailHandler={changeDetailHandler}
        />
      )}
      {showDetail && <MovieDetail detail={detail} />}
    </Card>
  );
};

export default Search;
