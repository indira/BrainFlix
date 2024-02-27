import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg"

const UploadVideo = () => {
  return (
    <section>
      <div className="wrapper">
        <h1 className="headline--vlarge headline--margin-top">UploadVideo</h1>
        <div className="upload-video">
          <div className="upload-video__thumbnail">
            <img src={VideoThumbnail} alt="videoThumbnail" />
          </div>
          <div className="upload-video__form">
            <form action="">
              <label htmlFor="title">TITLE YOUR VIDEO</label>
              <input type="text" name="title" placeholder="Add a title to your video" />
              <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
              <textarea name="description" id="description" cols="30" rows="10"></textarea>
              <button type="submit">CANCEL</button>
              <button type="submit">PUBLISH</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UploadVideo
