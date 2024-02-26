/*This component is designed to show the video image and is clickable*/
const NextVideos = props => {
  return (
    <section>
      <div className="wrapper--next">
        <div className="headline--large headline--silver headline--margin-top headline--margin-bottom">NEXT VIDEOS</div>
        {props.videos
          .filter(video => video.id !== props.selectedVideo.id)
          .map(video => (
            <div
              className="videos-container"
              key={video.id}
              onClick={() => {
                props.handleVideoClick(video.id)
              }}
            >
              <div className="videos-container__picture">
                <img src={video.image} alt="videoImg" />
              </div>
              <div className="videos-container__text">
                <div className="videos-container__text--heading headline--medium">{video.channel}</div>
                <div className="videos-container__text--description headline--medium">{video.title}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default NextVideos
