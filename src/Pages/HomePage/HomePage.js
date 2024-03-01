import React from "react"
import ReactDOM from "react-dom/client"
import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "../../components/Hero/Hero"
import videoData from "../../data/video-details.json"
import NextVideos from "../../components/NextVideos/NextVideos"
import Comments from "../../components/Comments/Comments"

const HomePage = () => {
  //axios request data
  const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com"
  const endPoint = "/videos"
  const apiKey = "f27529a3-9e2f-4a63-8d41-79ca998861d4"
  const url = `${baseURL}${endPoint}?api_key=${apiKey}`

  //Setting initial State
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [comments, setComments] = useState([])
  const [selectedComments, setSelectedComments] = useState([])

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(url)
        setVideos(response.data)
        if (response.data.length > 0) {
          setSelectedVideo(response.data[0])
          const commentResponse = await axios.get(`${baseURL}${endPoint}/${response.data[0].id}?api_key=${apiKey}`)
          setComments(commentResponse.data)
          setSelectedComments(commentResponse.data.comments)
        }
      } catch (e) {
        console.log("There was an error:", e)
      }
    }
    getVideos()
  }, [url])

  const handleVideoClick = async videoId => {
    try {
      const response = await axios.get(`${baseURL}${endPoint}/${videoId}?api_key=${apiKey}`)
      setSelectedVideo(response.data)
      const commentResponse = await axios.get(`${baseURL}${endPoint}/${videoId}?api_key=${apiKey}`)
      setSelectedComments(commentResponse.data.comments)
      setComments(commentResponse.data)
    } catch (error) {
      console.log("Error fetching video details:", error)
    }
  }
  return (
    <>
      <Hero selectedVideo={selectedVideo} />
      <div className="comment-next-outer">
        {
          <div className="comment-next-outer--one">
            <Comments selectedComments={selectedComments} comments={comments} handleVideoClick={handleVideoClick} />
          </div>
        }
        <div className="comment-next-outer--two">
          <NextVideos videos={videos} selectedVideo={selectedVideo} handleVideoClick={handleVideoClick} />
        </div>
      </div>
    </>
  )
}

export default HomePage
