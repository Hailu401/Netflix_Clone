import React, { useEffect, useState } from 'react'
import './Banner.css'
import Axios from '../../Utils/Axios';
import requests from '../../Utils/Request';


function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(()=>{
   const fetch = async ()=>{
        try {
            const request = await Axios.get(requests.getNetflixAllMovies);
            // console.log(request.data.results);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
        } catch (error) {
            console.log(`Something went wrong>>>>`, error);
        }
    }
    fetch()
    }, [])
    // console.log(movie);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.orginal_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button play">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">{truncate(movie?.overview, 100)}</h1>
         
        </div>
        <div className="banner_fadeButtom"></div>
      </div>
    </>
  );
}

export default Banner
