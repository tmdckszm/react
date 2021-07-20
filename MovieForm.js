import React, { useState } from 'react';

const MovieForm = ( { addMovie }) =>{
    const [movieTitle, setMovieTitle]= useState('');
    const [movieYear, setMovieYear]= useState('');
    
    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addMovie({
            title: movieTitle,
            year: movieYear
        });
        /*setMovies([
            ...movies,
            {
                title: movieTitle,
                year: movieYear
            }
        ])*/
    };

    return(
        
            <form onSubmit={onSubmit}>
                <input
                 type='text'
                 placeholder='영화제목'
                 value={movieTitle}
                 onChange={(e) => setMovieTitle(e.target.value)}
                /><br/>
                <input
                 type='text'
                 placeholder='개봉년도'
                 value={movieYear}
                 onChange={(e) => setMovieYear(e.target.value)}
                /><br/>
                <button type='onSubmit'>영화추가</button>
            </form>
    );
};

export default MovieForm;