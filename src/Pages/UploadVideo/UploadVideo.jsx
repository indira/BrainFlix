import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const UploadVideo = () => {
  const formRef = React.useRef(null)
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    //Axios request
    try {
      const response = await axios.post("http://localhost:8080/videos", {
        title: title,
        description: description
      })
    } catch (e) {
      console.log("There was an error in form submission", e)
    }
    // Redirect to home page after successful submission
    navigate("/")
  }
  const handleCancel = e => {
    e.preventDefault()
    alert("You clicked the cancel button.")
    navigate("/")
  }
  return (
    <section className="line">
      <div className="wrapper">
        <h1 className="headline--vlarge">UploadVideo</h1>
        <div className="upload-video">
          <div className="upload-video__left">
            <h1 className="upload-video__left--title">VIDEO THUMBNAIL</h1>
            <img className="upload-video__left--image" src={VideoThumbnail} alt="videoThumbnail" />
          </div>
          <div className="upload-video__right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="title">TITLE YOUR VIDEO</label>
              <input onChange={e => setTitle(e.target.value)} className="upload-video__right--input" type="text" name="title" placeholder=" Add a title to your video" />
              <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
              <textarea onChange={e => setDescription(e.target.value)} name="description" id="description" cols="1" rows="5" placeholder="  Add a description to your video"></textarea>
            </form>
          </div>
        </div>
        <div className="upload-video__right--button">
          <button onClick={handleCancel} className="upload-video__right-buttonleft" type="button">
            CANCEL
          </button>
          <button onClick={handleSubmit} className="upload-video__right-buttonright" type="submit">
            PUBLISH
          </button>
        </div>
      </div>
    </section>
  )
}
export default UploadVideo
