import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ResultItem.css";

const ResultItem = (props) => {
  let { name, url, title, description, tags, id } = props;

  return (
    <Link to={`/results/${id}`}>
      <Card className="mb-4 p-3" title={title} bordered={true}>
        <div className="resultName"> {name} </div>
        <a className="resultA" target={"blank"} href={url}>
          {" "}
          {url}{" "}
        </a>
        <hr/>
            <div className="resultTitle"><b>{title}</b></div>
        <div className="resultDes"> {description} </div>
        <ul className="resultUl">
          {tags.map((tag, index) => (
            <li className="resultLi" key={index}>{tag}</li>
          ))}
        </ul>
      </Card>
    </Link>
  );
};

export default ResultItem;
