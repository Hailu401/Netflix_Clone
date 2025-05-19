import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow from "../../../src/assets/images/button_arrow.svg";
import { useNavigate, useParams } from 'react-router-dom';


function Player() {
    const [video, setVideo] = useState({
      name: "",
      key: "",
      published_at: "",
      type: "",
    });
    const {id} = useParams();
    // console.log(id);
    const navigate = useNavigate()
    const url =
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJiNDhlYmQ5YzE4MjljYjRmODdlNzgwNjBjZGZkNCIsIm5iZiI6MTc0NzA3Mjk5Ni4xMzMsInN1YiI6IjY4MjIzN2U0YTM5NjM5Y2RhMjRiNDY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tnzLb4fFVouLyh_UZN0yHF0l9KmaHa3EwK2_wCn_yL0",
      },
    };


useEffect(()=>{
    fetch(url, options)
      .then((res) => res.json())
      .then((data) =>setVideo(data.results[0]))
      .catch((err) => console.error(err));

}, [])
console.log(video);
   let PDate = video.published_at;


  return (
    <>
      <div className="player">
        <img src={back_arrow} alt="" onClick={()=>{navigate("/Netflix_Clone/");}}/>
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          frameborder="0"
          width="90%"
          height="90%"
          title="trailer"
          allowFullScreen
        ></iframe>
        <div className="movie_info1">
          <p>Published Date: {PDate?.slice(0,10)}</p>
          <p>Movie Name: {video.name}</p>
          <p>Type: {video.type}</p>
        </div>
      </div>
    </>
  );
}

export default Player
