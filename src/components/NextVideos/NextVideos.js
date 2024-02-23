import data from "../../assets/data/videos.json"
console.log(data[0].image)
const NextVideos = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="headline--large headline--silver headline--margin-top headline--margin-bottom">NEXT VIDEOS</div>
        <div className="videos-container">
          <div className="videos-container__picture">
            <img src={data[0].image} alt="videoImg" />
          </div>
          <div className="videos-container__text">
            <div className="videos-container__text--heading headline--medium">{data[0].channel}</div>
            <div className="videos-container__text--description headline--medium">{data[0].title}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NextVideos
