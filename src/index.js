import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import videoData from "../src/assets/data/video-details.json"
import NextVideos from "./components/NextVideos/NextVideos"

//Calling the stylesheet
import "../src/styles/main.css"

function App() {
  //State Variables
  const [selectedVideo, setSelectedVideo] = useState(videoData[0])
  const [videos, setVideos] = useState(videoData)

  function handleVideoClick(id) {
    const clickedVideo = videos.find(video => {
      return video.id === id
      console.log(id, "clickedCharacter: ", video.id)
    })

    setSelectedVideo(clickedVideo)
  }

  return (
    <>
      <Header />
      <Hero selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
      <NextVideos videos={videos} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

if (module.hot) {
  module.hot.accept()
}
