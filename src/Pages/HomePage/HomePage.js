import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react"
import { format } from "date-fns"
import Hero from "../../components/Hero/Hero"
import videoData from "../../data/video-details.json"
import NextVideos from "../../components/NextVideos/NextVideos"
import Comments from "../../components/Comments/Comments"

const HomePage = () => {
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
    const formattedDate = format(date, "MM/dd/yyyy")
    return formattedDate
  }
  return (
    <>
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

export default HomePage
