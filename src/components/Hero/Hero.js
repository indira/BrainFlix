import Comments from "../Comments/Comments"

const Hero = props => {
  //console.log("selectedCharacter: ", props.selectedVideo.video)
  //const videoURL = `${props.selectedVideo.video}?api_key=${props.selectedVideo.id}`
  const videoURL = `${props.selectedVideo.image}`
  console.log(videoURL)
  const formatDate = props.formatDate

  return (
    <section>
      <div className="large-hero">
        {/* <video className="large-hero__video" controls>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>*/}
        <video poster={videoURL} className="large-hero__video" controls></video>
      </div>
    </section>
  )
}

export default Hero
