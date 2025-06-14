import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "AMARAN", release_date: "2024" },
        { id: 2, title: "KEY", release_date: "2014" },
        { id: 3, title: "KUTTY", release_date: "2015" },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    className="search-input"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home