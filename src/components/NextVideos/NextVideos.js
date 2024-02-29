/*This component is designed to show the video image and is clickable*/
const NextVideos = ({ videos, selectedVideo, handleVideoClick }) => {
  return (
    <section>
      <div className="wrapper--next">
        <div className="headline--large headline--silver headline--margin-top headline--margin-bottom">NEXT VIDEOS</div>
        {videos
          .filter(video => video.id !== selectedVideo.id)
          .map(video => (
            <div
              className="videos-container"
              key={video.id}
              onClick={() => {
                handleVideoClick(video.id)
              }}
            >
              <div className="videos-container__picture">
                <img src={video.image} alt="videoImg" />
              </div>
              <div className="videos-container__text">
                <div className="videos-container__text--heading">{video.channel}</div>
                <div className="videos-container__text--description">{video.title}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default NextVideos
