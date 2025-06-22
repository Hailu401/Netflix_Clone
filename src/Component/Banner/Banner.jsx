import React, { useEffect, useState } from 'react'
import './Banner.css'
import Axios from '../../Utils/Axios';
import requests from '../../Utils/Request';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { IoMdCloseCircle } from "react-icons/io";


function Banner() {
    const [movie, setMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState("");
    const [showModal, setShowModal] = useState(false);

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

    const handlePlay = () => {
      if (trailerUrl) {
        setTrailerUrl("");
        setShowModal(true);
      } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
          .then((url) => {
            if (!url) return;
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
            setShowModal(true);
          })
          .catch((error) => console.log(error));
      }
    };
    const handleCloseModal = () => {
      setTrailerUrl("");
      setShowModal(false);
    };
  return (
    <>
      <div
        className={`banner${showModal ? " banner-blur" : ""}`}
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
            <button className="banner_button play" onClick={handlePlay}>
              Play
            </button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 100)}
          </h1>
        </div>
        <div className="banner_fadeButtom"></div>
      </div>
      {showModal && (
        <div className="video-modal">
          <button className="close-modal" onClick={handleCloseModal}>
            <IoMdCloseCircle />
          </button>
          <YouTube
            videoId={trailerUrl}
            opts={{
              height: "390",
              width: "100%",
              playerVars: { autoplay: 1 },
            }}
            className="youtube-player"
          />
        </div>
      )}
    </>
  );
}

export default Banner
