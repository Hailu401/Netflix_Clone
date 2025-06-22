import React from 'react'
import './Rowlist.css'
import Row from '../Row/Row';
import requests from '../../../Utils/Request';

const RowList = () => {
  return (
    <div className="row_list">
      <Row
        title="NETFLIX ORGINALS"
        getData={requests.getTrendingMv}
        isLarge={true}
      />
      <Row title="Trending Now" getData={requests.getTrending} />
      <Row title="" getData={requests.getNetflixAllMovies} />
      <Row title="Popular TV Series" getData={requests.getPopularTVSeries} />
      <Row title="Action Movies" getData={requests.getAction} />
      <Row title="Comedy Movies" getData={requests.getComedy} />
      <Row title="Documentaries" getData={requests.getDocumentaries} />
      <Row title="Horror Movies" getData={requests.getHoror} />
      <Row title="Top Rated Movies" getData={requests.getTopRatedMv} />
    </div>
  );
}

export default RowList;
