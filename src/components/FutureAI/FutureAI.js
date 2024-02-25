import videoDetails from "../../assets/data/video-details.json"
import views from "../../assets/icons/views.svg"
import likes from "../../assets/icons/likes.svg"
import Comments from "../Comments/Comments"
import NextVideos from "../NextVideos/NextVideos"
const FutureAI = () => {
  const videodetails = videoDetails.map(videodetail => {
    return videodetail
  })
  console.log(videodetails[0].title)
  const timeStamp = new Date(videodetails[0].timestamp)
  return <section></section>
}

export default FutureAI
