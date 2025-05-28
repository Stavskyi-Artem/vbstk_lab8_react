import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const MovieList = ({ movies }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="movie-list-container">
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <div className="movie-list">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p className="no-results">No movies found matching your search.</p>
                )}
            </div>
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            posterUrl: PropTypes.string.isRequired,
            showtimes: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired
};

export default MovieList;