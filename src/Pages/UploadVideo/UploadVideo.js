import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"
import React from "react"
import { Navigate } from "react-router-dom"
const UploadVideo = () => {
  const formRef = React.useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    alert("The form get submitted")
  }
  const handleCancel = e => {
    e.preventDefault()
    alert("CANCEL button was clciked")
  }
  return (
    <section className="line">
      <div></div>
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
              <input className="upload-video__right--input" type="text" name="title" placeholder=" Add a title to your video" />
              <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
              <textarea name="description" id="description" cols="1" rows="5" placeholder="  Add a description to your video"></textarea>
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
