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
        <div className="AI-Container">
          <div className="AI-Container__future">
            <div className="AI-Container__future--one">
              <div className="AI-Container__future-by headline--medium--big">By {props.selectedVideo.channel}</div>
              <div className="AI-Container__future-date headline--medium headline--silver">{formatDate(props.selectedVideo.timestamp)}</div>
            </div>
            <div className="AI-Container__future--two headline--silver">
              <div className="AI-Container__future-view ">
                <img className="AI-Container__future--icon" src={views} alt="views" />
                <h2 className="headline--medium ">{props.selectedVideo.views}</h2>
              </div>
              <div className="AI-Container__future-like">
                <img className="AI-Container__future--icon" src={likes} alt="likes" />
                <h2 className="headline--medium">{props.selectedVideo.likes}</h2>
              </div>
            </div>
          </div>
          <div className="AI-Container__description">
            <p className="AI-Container__description--text">{props.selectedVideo.description}</p>
          </div>
        </div>

        <div className="comment">
          <h2 className="headline-medium ">{comments.length} Comments</h2>
          <div className="comment__container">
            <div className="comment__container--avatar">
              <img className="comment__container-avatar-img" src={avatar} alt="Image" />
            </div>
            <form className="comment__container--form" id="commentForm">
              <div className="comment__container--form-inputlab">
                <label className="headline--small" to="name">
                  Join the Conversation:{" "}
                </label>
                <input type="text" id="name" name="name" placeholder="Add a new comment." />
              </div>
              <button className="comment__container--form-button" type="submit">
                Comment
              </button>
            </form>
          </div>
          {comments.map(comment => (
            <div className="comment__default" key={comment.id}>
              <div className="comment__default-line">
                <div className="comment__default-avatar">Avatar</div>
                <div className="comment__default-textarea">
                  <div className="comment__default-HD">
                    <div className="comment__default--header">{comment.name}</div>
                    <div className="comment__default--date">{formatDate(comment.timestamp)}</div>
                  </div>
                  <div className="comment__default--text">{comment.comment}</div>
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
