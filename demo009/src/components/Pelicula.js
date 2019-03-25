import React from 'react';

const DEFAULT_IMAGEN = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"

const Pelicula = ({movie}) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_IMAGEN : movie.Poster;

    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt="algo"
                    src={poster}
                />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
};

export default Pelicula;