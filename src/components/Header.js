import '../App.css'

const Header = () => {
  return(
    <div className='inner sec-title'>
      <h1 className="title">Fresh Tomato</h1>
      <input className="searchInput" placeholder='Search movies, TV, actors, more..'></input>
    </div>
  )
}

export default Header