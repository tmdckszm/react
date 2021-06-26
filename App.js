import React, { Component, Fragment, useState} from 'react';
import Movie from './Movie'
import './App.css'

const App = () => {
    const [movieTitle, setMovieTitle]= useState('');
    const [movieYear, setMovieYear]= useState('');
    const [movies, setMovies]= useState([
        { title: 'kossie coder1', year: 2001},
        { title: 'kossie coder2', year: 2002},
        { title: 'kossie coder3', year: 2003},
        { title: 'kossie coder4', year: 2004},
    ]);

    const renderMovies = movies.map((movie)=>{
        return (
            <Movie movie={movie} key={movie.title}/>
        );
    })

    const addMovie = (e) => {
        e.preventDefault();
        setMovies([
            ...movies,
            {
                title: movieTitle,
                year: movieYear
            }
        ])
        setMovieTitle('');
        setMovieYear('');

    }
    return(
        <div className="App">
            <h1>Movie list</h1>
            <form onSubmit={addMovie}>
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
                <button type='onSubmot'>영화추가</button>
            </form>
            {renderMovies}
        </div>
    );
}

export default App;