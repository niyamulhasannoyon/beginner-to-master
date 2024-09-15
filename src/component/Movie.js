import React from 'react';
import {moviesData} from '../data/MovieData.js';
import './movie.css'


const fetchMovieInfo = () => {
    return moviesData;
}

const Movie = () => {

    return (
        <div className='movie-container'>
            <h1>Movies </h1>
            <ol className='movie-list'>
                {
                    moviesData.map((movie) => (
                        <li className='movie' key={movie.id}>
                            <img src={movie.poster} alt="" />
                            <p>
                                {movie.title} by {movie.director} was released on {movie.year}
                            </p>
                            <p>Rating: {movie.rating} </p>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
};

export default Movie;