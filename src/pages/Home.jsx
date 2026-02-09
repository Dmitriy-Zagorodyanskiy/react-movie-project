import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John1", release_date: "2020"},
        {id: 2, title: "John2", release_date: "2020"},
        {id: 3, title: "John3", release_date: "2020"},
        {id: 4, title: "John4", release_date: "2020"},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("------")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="sumbit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie ={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home