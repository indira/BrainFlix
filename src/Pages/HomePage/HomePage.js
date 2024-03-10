import React from "react"
import ReactDOM from "react-dom/client"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Hero from "../../components/Hero/Hero"
import NextVideos from "../../components/NextVideos/NextVideos"
import Comments from "../../components/Comments/Comments"

const HomePage = () => {
  //axios request data
  const baseURL = "http://localhost:8080"
  const endPoint = "/videos"
  const url = `${baseURL}${endPoint}`

  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8"

  //params to get the id from the link
  const params = useParams()

  //Setting initial State
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState([])

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(url)
        setVideos(response.data)
      } catch (e) {
        console.log("There was an error:", e)
      }
    }
    getVideos()
  }, [])

  useEffect(() => {
    const getSelectedVideo = async id => {
      try {
        const response = await axios.get(`${baseURL}${endPoint}/${id}`)
        setSelectedVideo(response.data)
      } catch (error) {
        console.log("Error fetching video details:", error)
      }
    }
    if (params.id) {
      getSelectedVideo(params.id)
    } else {
      getSelectedVideo(defaultVideoId)
    }
  }, [params])

  return (
    <>
      <Hero baseURL={baseURL} selectedVideo={selectedVideo} />
      <div className="wrapper__outerNV">
        <div className="wrapper__outerNV--one">
          <Comments selectedVideo={selectedVideo} />
        </div>
        <div className="wrapper__outerNV--two">
          <NextVideos baseURL={baseURL} videos={videos} selectedVideo={selectedVideo} />
        </div>
      </div>
    </>
  )
}

export default HomePage
