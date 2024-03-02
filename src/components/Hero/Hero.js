/*This component is for displaying the selected video in the hero section of the page*/
const Hero = ({ selectedVideo, formatDate }) => {
  const videoURL = `${selectedVideo !== null ? selectedVideo.image : "null"}`

  return (
    <section>
      <div className="large-hero">
        <video poster={videoURL} className="large-hero__video" controls></video>
      </div>
    </section>
  )
}

export default Hero
