import { useEffect, useState } from "react"
import Movie from "../components/Movie"
import Header from "../components/Header"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies)
      setLoading(false)
    })
  },[])


  console.log(movies)


  return(
      <Movie props={movies}/>
  )
}

export default Home