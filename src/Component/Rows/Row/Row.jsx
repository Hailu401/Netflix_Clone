import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../../Utils/Axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({title, getData, isLarge}) => {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const BaseImage_url = 'https://image.tmdb.org/t/p/original'
useEffect(()=>{
(async ()=>{
    try {
        // console.log(getData);
        const request = await axios.get(getData)
        // console.log(request.data.results);
        setMovie(request.data.results)
    } catch (error) {
        console.log("Error Occur>>>", error);
    }
})()
},[getData])
// console.log(movie);

const handleClick = (movie)=>{
    if(trailerUrl){
        setTrailerUrl('')
    }else{
        movieTrailer(movie?.title || movie?.original_name ).then((url)=>{
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search)
            console.log(urlParams);
            console.log(urlParams.get('v'));
            setTrailerUrl(urlParams.get('v'))
        })
    }
}

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie?.map((movie, i) => (
          <>
            <img
              onClick={() => handleClick(movie)}
              key={i}
              src={`${BaseImage_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLarge && "row_posterLarge"}`}
            />
            {/* <p className='movie_name'>{movie.name}</p> */}
          </>
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row
