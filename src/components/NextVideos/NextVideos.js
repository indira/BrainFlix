/*This component is designed to show the video image and is clickable*/
import { Link } from "react-router-dom"
const NextVideos = ({ videos, selectedVideo, handleVideoClick }) => {
  return (
    <section>
      <div className="wrapper--nextV">
        <div className="headline--large">NEXT VIDEOS</div>
        {videos
          .filter(video => video.id !== selectedVideo.id)
          .map(video => (
            <div
              className="videos__container"
              key={video.id}
              onClick={() => {
                handleVideoClick(video.id)
              }}
            >
              <Link to={`/video/${video.id}`}>
                <div className="videos__container-picture">
                  <img src={video.image} alt="videoImg" />
                </div>
              </Link>
              <div className="videos__container-text">
                <div className="videos__container-text--heading">{video.channel}</div>
                <div className="videos__container-text--description">{video.title}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default NextVideos
