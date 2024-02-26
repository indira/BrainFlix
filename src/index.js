import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import videoData from "./data/video-details.json"
import NextVideos from "./components/NextVideos/NextVideos"
import Comments from "./components/Comments/Comments"

//Calling the stylesheet
import "../src/styles/main.css"

function App() {
  //State Variables
  const [selectedVideo, setSelectedVideo] = useState(videoData[0])
  const [videos, setVideos] = useState(videoData)
  const comments = selectedVideo.comments
  //HandleClick function for state change while clicking the image in the NextVideo section
  function handleVideoClick(id) {
    const clickedVideo = videos.find(video => {
      return video.id === id
      console.log(id, "clickedCharacter: ", video.id)
    })

    setSelectedVideo(clickedVideo)
  }
  //format date function to format the date
  const formatDate = timestamp => {
    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }
  //The page is divided into four components Header, Hero, Comments and NextVideos
  return (
    <>
      <Header />
      <Hero selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} formatDate={formatDate} />
      <div className="comment-next-outer">
        <div className="comment-next-outer--one">
          <Comments comments={comments} formatDate={formatDate} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
        </div>
        <div className="comment-next-outer--two">
          <NextVideos videos={videos} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
        </div>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

if (module.hot) {
  module.hot.accept()
}
