import React, { useState, useEffect } from "react";
import './details.css'
import { getMovieDetails } from "../../Utils/utilities";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const GetMovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const movies = await getMovieDetails();
            console.log({ movies });
            setLoading(false);
            setMovies(movies.results);
        })();
    }, []);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    if (loading) {
        return <h1>Loading movies...</h1>
    }

    return (
        <div className="container">
            {movies &&
                !loading &&
                movies.length > 0 &&
                movies.map((item) => (
                    <div className="image-container" onClick={() => handleMovieClick(item)}>
                        <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
                    </div>
                ))}

            {movies && !loading && movies.length === 0 && (
                <div>
                    <h1>No movies found</h1>
                </div>
            )}

            {selectedMovie && (
                <div>
                    <h2>{selectedMovie.title}</h2>
                    <p>{selectedMovie.overview}</p>
                </div>
            )}
        </div>
    );
};

export default GetMovieDetails;
