import '../App.css'

const DetailSum = ({props}) => {
  return(
    <div className="inner sec-detail-sum" 
    style={{
      backgroundImage : `url(${props.large_cover_image})`,
      backgroundSize : "cover",
      backgroundRepeat : "no-repeat",
      backgroundPosition : "center"
      
      }}>
      <div className='sumDiv'>
        <h1 className='title'>{props.title}</h1>
        <p className='runtime'>{props.runtime}minutes</p>
      </div>
    </div>
  )
}

export default DetailSum