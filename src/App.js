import React from 'react';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';



function App() {
  return (
    <div className='App'> 
      {/* <h1>Evangadi family</h1> */}
      <Nav/>
      <Banner/>
      <Row titel="NETFLIX ORIGINAL"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row titel="TRENDING NOW" fetchUrl={requests.fetchTrending} />
     
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}
export default App
