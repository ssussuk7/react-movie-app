import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DetailSum from "../components/DetailSum"
import DetailContent from "../components/DetailContent"

const Detail = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})
  console.log(id)
  
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    .then((response) => response.json())
    .then((json) => setMovie(json.data.movie))
  }, [])

  return(  
    <div>
      <DetailSum props={movie}></DetailSum>
      <DetailContent props={movie}></DetailContent>
    </div>
  )
}

export default Detail