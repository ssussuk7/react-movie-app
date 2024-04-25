import { Link } from "react-router-dom"
import '../App.css';

const Movie = ({props}) => {
  
  return(
    <div className="inner sec-movies">
      <h1 className="subject">Best 20</h1>
      <div className="div-movie">
        {props.map((val) => {
          return(
            <Link to={`${process.env.PUBLIC_URL}/detail/${val.id}`}>
              <div className="item" key={val.id}>
                <img className="img" src={val.medium_cover_image}></img>
                <div className="div-rating">
                  <span className="icon"></span>
                  <p className="rating"> {val.rating}</p>
                </div>
                <p className="title">{val.title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Movie