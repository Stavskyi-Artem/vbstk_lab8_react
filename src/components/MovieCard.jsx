import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-genre">{movie.genre}</p>
                <p className="movie-description">{movie.description}</p>
                <div className="showtimes">
                    <h4>Showtimes:</h4>
                    <div className="showtime-list">
                        {movie.showtimes.map((time, index) => (
                            <span key={index} className="showtime">{time}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
        showtimes: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default MovieCard;