import avatar from "../../assets/images/mohan-muruge.jpg"
import views from "../../assets/icons/views.svg"
import likes from "../../assets/icons/likes.svg"
/*This component is for the comment section of the page*/
const Comments = props => {
  const comments = props.comments
  const formatDate = props.formatDate
  return (
    <section>
      <div className="wrapper--comment">
        <div className="headline--vlarge headline--margin-top ">{props.selectedVideo.title}</div>
        <div className="selectedComment">
          <div className="selectedComment__main">
            <div className="selectedComment__main--one">
              <div className="selectedComment__main-by headline--medium--big">By {props.selectedVideo.channel}</div>
              <div className="selectedComment__main-date headline--medium headline--silver">{formatDate(props.selectedVideo.timestamp)}</div>
            </div>
            <div className="selectedComment__main--two headline--silver">
              <div className="selectedComment__main-view ">
                <img className="selectedComment__main--icon" src={views} alt="views" />
                <h2 className="headline--medium ">{props.selectedVideo.views}</h2>
              </div>
              <div className="selectedComment__main-like">
                <img className="selectedComment__main--icon" src={likes} alt="likes" />
                <h2 className="headline--medium">{props.selectedVideo.likes}</h2>
              </div>
            </div>
          </div>
          <div className="selectedComment__description">
            <p className="selectedComment__description--text">{props.selectedVideo.description}</p>
          </div>
        </div>

        <div className="comment">
          <h2 className="headline-medium ">{comments.length} Comments</h2>
          <div className="comment-main">
            <div className="comment-main__avatar">
              <img className="comment-main__avatar-img" src={avatar} alt="Image" />
            </div>
            <form className="comment-main__form" id="commentForm">
              <div className="comment-main__form-inputlab">
                <label className="headline--small" to="name">
                  Join the Conversation:{" "}
                </label>
                <input type="text" id="name" name="name" placeholder="Add a new comment." />
              </div>
              <button className="comment-main__form-button" type="submit">
                Comment
              </button>
            </form>
          </div>
          {comments.map(comment => (
            <div className="comment-default" key={comment.id}>
              <div className="comment-default-line">
                <div className="comment-default__avatar">Avatar</div>
                <div className="comment-default__textarea">
                  <div className="comment-default__HD">
                    <div className="comment-default__header">{comment.name}</div>
                    <div className="comment-default__date">{formatDate(comment.timestamp)}</div>
                  </div>
                  <div className="comment-default__text">{comment.comment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comments
