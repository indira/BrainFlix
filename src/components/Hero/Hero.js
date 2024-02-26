import Comments from "../Comments/Comments"
/*This component is for displaying the selected video in the hero section of the page*/
const Hero = props => {
  //console.log("selectedCharacter: ", props.selectedVideo.video)
  //const videoURL = `${props.selectedVideo.video}?api_key=${props.selectedVideo.id}`
  const videoURL = `${props.selectedVideo.image}`
  console.log(videoURL)
  const formatDate = props.formatDate

  return (
    <section>
      <div className="large-hero">
        <video poster={videoURL} className="large-hero__video" controls></video>
      </div>
    </section>
  )
}

export default Hero
