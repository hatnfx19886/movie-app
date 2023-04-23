import classes from "./ResultList.module.css";
import Card from "../../UI/Card";

const ResultList = (props) => {
  const getId = (e) => {
    props.changeDetailHandler(e.target.id);
  };
  return (
    <div className={classes.container}>
      <h2>Search Result</h2>
      <Card className={classes.result}>
        {props.list.map((x) => (
          <img
            src={`${
              x.poster_path
                ? `https://image.tmdb.org/t/p/original${x.poster_path}`
                : "./default-img.jpg"
            }`}
            alt={`${x.name || x.title}`}
            key={x.id}
            id={x.id}
            onClick={getId}
          />
        ))}
      </Card>
    </div>
  );
};

export default ResultList;
