import NavBar from "./NavBar/NavBar";
import MovieList from "./MovieList/MovieList";
import requestConfig from "../../UI/requestConfig";
import Banner from "./Banner/Banner";
import Card from "../../UI/Card";

function Browse() {
  return (
    <Card>
      <NavBar />
      <Banner url={requestConfig.original} />
      <MovieList title="" poster={true} url={requestConfig.original} />
      <MovieList title="Xu hướng" url={requestConfig.trending} />
      <MovieList title="Xếp hạng cao" url={requestConfig.toprated} />
      <MovieList title="Hành động" url={requestConfig.action} />
      <MovieList title="Hài" url={requestConfig.comedy} />
      <MovieList title="Kinh dị" url={requestConfig.horror} />
      <MovieList title="Lãng mạn" url={requestConfig.romance} />
      <MovieList title="Tài liệu" url={requestConfig.document} />
    </Card>
  );
}

export default Browse;
