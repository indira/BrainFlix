import videoData from "../../assets/data/videos.json"
import videoDetails from "../../assets/data/video-details.json"
import views from "../../assets/icons/views.svg"
import likes from "../../assets/icons/likes.svg"
import Comments from "../Comments/Comments"

const Hero = props => {
  //console.log("selectedCharacter: ", props.selectedVideo.video)
  const videoURL = `${props.selectedVideo.video}?api_key=${props.selectedVideo.id}`
  const comments = props.selectedVideo.comments

  const formatDate = timestamp => {
    const date = new Date(timestamp)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }

  return (
    <section>
      <div className="large-hero">
        <video className="large-hero__video" controls>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="wrapper">
        <div className="headline--vlarge headline--margin-top ">{props.selectedVideo.title}</div>
        <div className="AI-Container">
          <div className="AI-Container__future">
            <div className="AI-Container__future--one">
              <div className="AI-Container__future-by headline--medium">By {props.selectedVideo.channel}</div>
              <div className="AI-Container__future-date headline--medium headline--silver">{formatDate(props.selectedVideo.timestamp)}</div>
            </div>
            <div className="AI-Container__future--two headline--silver">
              <div className="AI-Container__future-view ">
                <img className="AI-Container__future--icon" src={views} alt="views" />
                <h2 className="headline--medium ">{props.selectedVideo.views}</h2>
              </div>
              <div className="AI-Container__future-like">
                <img className="AI-Container__future--icon" src={likes} alt="likes" />
                <h2 className="headline--medium">{props.selectedVideo.likes}</h2>
              </div>
            </div>
          </div>
          <div className="AI-Container__description">
            <p className="AI-Container__description--text">{props.selectedVideo.description}</p>
          </div>
        </div>
        <Comments comments={comments} formatDate={formatDate} />
      </div>
    </section>
  )
}

export default Hero
