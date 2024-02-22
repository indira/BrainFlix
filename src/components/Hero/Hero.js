import videoData from "../../assets/data/videos.json"
import videoDetails from "../../assets/data/video-details.json"
const Hero = () => {
  const videodata = videoDetails.map(videoDis => {
    return videoDis
  })
  console.log(videodata[0].video)
  const videoLink = videodata.length > 0 ? `${videodata[2].video}?api_key=${videodata[2].id}` : null
  console.log(videoLink)
  return (
    <section>
      <div className="large-hero">
        <video className="large-hero__video" autoPlay muted loop>
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default Hero
