const DetailContent = ({props}) => {
  return(
    <div className="inner sec-detail-cont">
      <img className="img" src={props.large_cover_image}></img>
      <div className="div-detail">
        <div className="div-rating">
          <span className="icon"></span>
          <p className="rating"> {props.rating}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="content">{props.description_full}</p>
      </div>
    </div>
  )
}

export default DetailContent