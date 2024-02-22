import videoDetails from "../../assets/data/video-details.json"
import views from "../../assets/icons/views.svg"
import likes from "../../assets/icons/likes.svg"
import Comments from "../Comments/Comments"
const FutureAI = () => {
  const videodetails = videoDetails.map(videodetail => {
    return videodetail
  })
  console.log(videodetails[0].title)
  const timeStamp = new Date(videodetails[0].timestamp)
  return (
    <section>
      <div className="wrapper">
        <div className="headline--vlarge headline--margin-top ">{videodetails[0].title}</div>
        <div className="AI-Container">
          <div className="AI-Container__future">
            <div className="AI-Container__future--one">
              <div className="AI-Container__future-by headline--medium">By {videodetails[0].channel}</div>
              <div className="AI-Container__future-date headline--medium headline--silver">{timeStamp.toLocaleString()}</div>
            </div>
            <div className="AI-Container__future--two headline--silver">
              <div className="AI-Container__future-view ">
                <img className="AI-Container__future--icon" src={views} alt="views" />
                <h2 className="headline--medium ">{videodetails[0].views}</h2>
              </div>
              <div className="AI-Container__future-like">
                <img className="AI-Container__future--icon" src={likes} alt="likes" />
                <h2 className="headline--medium">{videodetails[0].likes}</h2>
              </div>
            </div>
          </div>
          <div className="AI-Container__description">
            <p className="AI-Container__description--text">{videodetails[0].description}</p>
          </div>
        </div>
        <Comments />
      </div>
    </section>
  )
}

export default FutureAI
